(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderDossier();
    renderMods();
    renderFieldLog();
    renderBoard();
    renderCommunity();
    wireCopyButton();
    wireLogReveal();
    fetchLiveStatus();
  });

  function renderHero() {
    document.getElementById("server-name").textContent = CONFIG.serverName;
    document.getElementById("tagline").textContent = CONFIG.tagline;
    document.getElementById("connect-ip").textContent =
      `${CONFIG.connect.ip}:${CONFIG.connect.port}`;
    document.getElementById("connect-map").textContent = CONFIG.connect.map;
  }

  function renderDossier() {
    document.getElementById("wipe-schedule").textContent = CONFIG.wipe.schedule;
    document.getElementById("last-wipe").textContent =
      `LAST WIPE: ${CONFIG.wipe.lastWipe}`;

    const discordLink = `<a href="${CONFIG.discordUrl}" target="_blank" rel="noopener noreferrer">Discord</a>`;
    const list = document.getElementById("rules-list");
    CONFIG.rulesSummary.forEach((rule) => {
      const li = document.createElement("li");
      if (rule.includes("{DISCORD}")) {
        li.innerHTML = escapeHTML(rule).replace("{DISCORD}", discordLink);
      } else {
        li.textContent = rule;
      }
      list.appendChild(li);
    });
  }

  function renderMods() {
    const grid = document.getElementById("mod-grid");
    CONFIG.mods.forEach((mod) => {
      const hasLink = !!mod.workshopUrl;
      const el = document.createElement(hasLink ? "a" : "div");
      el.className = "mod-card";
      if (hasLink) {
        el.href = mod.workshopUrl;
        el.target = "_blank";
        el.rel = "noopener noreferrer";
      }
      el.innerHTML = `
        <span class="mod-name">${escapeHTML(mod.name)}</span>
        ${mod.note ? `<span class="mod-note mono">${escapeHTML(mod.note)}</span>` : ""}
      `;
      grid.appendChild(el);
    });
  }

  function renderFieldLog() {
    const feed = document.getElementById("log-feed");
    CONFIG.fieldLog.forEach((entry) => {
      const row = document.createElement("div");
      row.className = "log-entry";
      row.innerHTML = `
        <span class="log-date mono">${escapeHTML(entry.date)}</span>
        <span class="log-tag">[${escapeHTML(entry.tag)}]</span>
        <span class="log-body">${escapeHTML(entry.body)}</span>
      `;
      feed.appendChild(row);
    });
  }

  let boardData = [];
  let sortKey = "kills";
  let sortDir = -1;

  function renderBoard() {
    boardData = CONFIG.leaderboard.map((p) => ({
      ...p,
      kd: p.deaths > 0 ? p.kills / p.deaths : p.kills
    }));
    drawBoard();

    document.querySelectorAll(".board-table th[data-sort]").forEach((th) => {
      th.addEventListener("click", () => {
        const key = th.getAttribute("data-sort");
        if (sortKey === key) {
          sortDir *= -1;
        } else {
          sortKey = key;
          sortDir = -1;
        }
        drawBoard();
      });
    });
  }

  function drawBoard() {
    const sorted = [...boardData].sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      if (typeof va === "string") return sortDir * va.localeCompare(vb);
      return sortDir * (va - vb);
    });

    const body = document.getElementById("board-body");
    body.innerHTML = "";
    sorted.forEach((p) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${escapeHTML(p.name)}</td>
        <td>${p.kills}</td>
        <td>${p.deaths}</td>
        <td>${p.hours}</td>
        <td>${p.kd.toFixed(2)}</td>
      `;
      body.appendChild(tr);
    });
  }

  function renderCommunity() {
    const row = document.getElementById("community-row");
    CONFIG.community.forEach((link) => {
      const a = document.createElement("a");
      a.className = "community-link";
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = link.label.toUpperCase();
      row.appendChild(a);
    });
  }

  function wireCopyButton() {
    const btn = document.getElementById("copy-btn");
    btn.addEventListener("click", async () => {
      const text = `${CONFIG.connect.ip}:${CONFIG.connect.port}`;
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        // Clipboard API unavailable — fall back silently, button label still confirms intent
      }
      btn.textContent = "COPIED";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = "COPY";
        btn.classList.remove("copied");
      }, 1500);
    });
  }

  function wireLogReveal() {
    const entries = document.querySelectorAll(".log-entry");
    if (!("IntersectionObserver" in window)) {
      entries.forEach((el) => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            item.target.classList.add("visible");
            observer.unobserve(item.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    entries.forEach((el) => observer.observe(el));
  }

  // BattleMetrics public API — no auth required for public server data.
  // Only runs if a battlemetricsId is set in data.js.
  async function fetchLiveStatus() {
    const dot = document.getElementById("status-dot");
    const text = document.getElementById("status-text");
    const count = document.getElementById("player-count");
    const id = CONFIG.connect.battlemetricsId;

    if (!id) {
      dot.classList.remove("online", "offline");
      text.innerHTML = `STATUS: SEE <a href="${CONFIG.discordUrl}" target="_blank" rel="noopener noreferrer">DISCORD</a>`;
      count.textContent = "";
      return;
    }

    try {
      const res = await fetch(`https://api.battlemetrics.com/servers/${id}`);
      if (!res.ok) throw new Error("bad response");
      const json = await res.json();
      const attrs = json.data.attributes;
      const online = attrs.status === "online";
      dot.classList.toggle("online", online);
      dot.classList.toggle("offline", !online);
      text.textContent = online ? "ONLINE" : "OFFLINE";
      if (online) {
        count.textContent = `${attrs.players}/${attrs.maxPlayers} SURVIVORS`;
      }
    } catch (e) {
      dot.classList.remove("online", "offline");
      text.innerHTML = `STATUS: SEE <a href="${CONFIG.discordUrl}" target="_blank" rel="noopener noreferrer">DISCORD</a>`;
    }
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
})();
