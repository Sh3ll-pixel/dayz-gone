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
    ip: "191.101.30.133",
    port: "2491",
    map: "Chernarus",
    // Optional: BattleMetrics server ID for live status/player count.
    // Find it in your BattleMetrics server URL: battlemetrics.com/servers/dayz/XXXXXXX
    // Leave blank to disable the live-status fetch and show a static badge instead.
    battlemetricsId: "40601145"
  },

  wipe: {
    schedule: "Full wipe every 2 weeks — next: check Discord pinned post",
    lastWipe: "2026-08-012"
  },

  rulesSummary: [
    "No cheating, exploiting, or duping — permanent ban, no appeal",
    "No advertising",
    "KOS is allowed. Combat logging is not.",
    "Voice/text chat: no slurs, no harassment",
    "Full rules pinned in #server-rules on {DISCORD}"
  ],

  // Add a workshopUrl to any entry once you have the Steam Workshop link —
  // mods without one render as plain cards instead of clickable links.
  mods: [
    { name: "CannabisPlus", workshopUrl: "https://steamcommunity.com/workshop/filedetails/?id=1932611410" },
    { name: "SIBNIC Helis", workshopUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2705416522" },
    { name: "SNAFU", workshopUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2443122116" },
    { name: "Expansion Market", workshopUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2572328470" },
    { name: "BC Weapons", workshopUrl: "https://steamcommunity.com/workshop/filedetails/?id=3092251597" },
    { name: "Saline Bag+", workshopUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=1736675168" },
    { name: "DayZ Gone Server Pack", workshopUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3428206652" },
    { name: "Callatic Vehicles", workshopUrl: "https://steamcommunity.com/id/Callatic" },
    { name: "Rocket Movement+", workshopUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3723753750" },
    { name: "Base Building Plus", workshopUrl: "https://steamcommunity.com/workshop/filedetails/?id=1710977250" }
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
      body: "Map wiped. New trader stock at Severo. Base rules unchanged."
    },
    {
      date: "2026-07-28",
      tag: "NOTICE",
      body: "Two admins added to the roster."
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
    { label: "BattleMetrics", url: "https://www.battlemetrics.com/40601145" }
  ]
};
