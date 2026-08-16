/* =========================================================================
   SERVER CONFIG
   Edit everything in this file to update the site. No HTML/CSS edits needed
   for routine changes — add a mod, post a news entry, update the
   leaderboard, all happens here.
   ========================================================================= */

const CONFIG = {
  serverName: "DAYZ GONE",
  tagline: "South Zagoria is quiet again. That's the problem.",

  // Used everywhere the site links to Discord — change it once here.
  discordUrl: "https://discord.gg/BRabpUbSfZ",

  connect: {
    ip: "127.0.0.1",
    port: "2302",
    map: "Chernarus",
    // Optional: BattleMetrics server ID for live status/player count.
    // Find it in your BattleMetrics server URL: battlemetrics.com/servers/dayz/XXXXXXX
    // Leave blank to disable the live-status fetch and show a static badge instead.
    battlemetricsId: ""
  },

  wipe: {
    schedule: "Full wipe every 2 weeks — next: check Discord pinned post",
    lastWipe: "2026-08-03"
  },

  rulesSummary: [
    "No cheating, exploiting, or duping — permanent ban, no appeal",
    "No base building within 1.5km of a named town",
    "KOS is allowed. Combat logging is not.",
    "Voice/text chat: no slurs, no harassment",
    "Full rules pinned in #server-rules on {DISCORD}"
  ],

  // Add a workshopUrl to any entry once you have the Steam Workshop link —
  // mods without one render as plain cards instead of clickable links.
  mods: [
    { name: "CannabisPlus", workshopUrl: "" },
    { name: "SIBNIC Helis", workshopUrl: "" },
    { name: "SNAFU", workshopUrl: "" },
    { name: "Expansion Market", workshopUrl: "" },
    { name: "BC Weapons", workshopUrl: "" },
    { name: "Saline Bag+", workshopUrl: "" },
    { name: "DayZ Gone Server Pack", workshopUrl: "" },
    { name: "Callatic Vehicles", workshopUrl: "" },
    { name: "Rocket Movement+", workshopUrl: "" },
    { name: "Base Building Plus", workshopUrl: "" }
  ],

  // Field Log — news / changelog. Newest first.
  fieldLog: [
    {
      date: "2026-08-10",
      tag: "PATCH",
      body: "Fixed loot spawns at NWAF hangars. Rolled back the vehicle damage multiplier — it was too punishing on gravel."
    },
    {
      date: "2026-08-03",
      tag: "WIPE",
      body: "Map wiped. New trader stock at Green Mountain. Base rules unchanged — 1.5km minimum from named towns still enforced."
    },
    {
      date: "2026-07-28",
      tag: "NOTICE",
      body: "Two admins added to the roster. Ban appeals now go through the #appeals channel, not DMs."
    }
  ],

  // Leaderboard — static snapshot, update by hand or swap for a fetch
  // once you're piping stats out of your server logs.
  leaderboard: [
    { name: "Vulture_6", kills: 142, deaths: 38, hours: 310 },
    { name: "Rusty.Kestrel", kills: 118, deaths: 51, hours: 275 },
    { name: "GraveDigger", kills: 97, deaths: 22, hours: 198 },
    { name: "Nadia_K", kills: 84, deaths: 40, hours: 240 },
    { name: "coldwar_pete", kills: 71, deaths: 60, hours: 410 },
    { name: "Salt.Marsh", kills: 65, deaths: 29, hours: 150 }
  ],

  community: [
    { label: "Discord", url: "https://discord.gg/BRabpUbSfZ" },
    { label: "BattleMetrics", url: "https://www.battlemetrics.com/" }
  ]
};
