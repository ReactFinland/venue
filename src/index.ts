/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

// console.log("Script started successfully");
// WA.openCoWebSite("https://workadventu.re");

WA.onInit().then(() => {
  console.log("Hello", WA.player.name);

  openLinkAtZone(
    "brella",
    "Press space to join other attendees at the Brella matchmaking platform",
    "https://next.brella.io/join/reactfinland2021"
  );
  openLinkAtZone(
    "vincit",
    "Press space to see open positions",
    "https://www.vincit.fi/en/careers/"
  );
  openLinkAtZone(
    "almaPositions",
    "Press space to see open positions",
    "https://www.almamedia.fi/en/careers/"
  );
  openLinkAtZone(
    "almaSite",
    "Press space to learn more about us",
    "https://www.almamedia.fi/"
  );
  openLinkAtZone(
    "cybercomPositions",
    "Press space to see open positions",
    "https://cybercom.com/join-us/"
  );
  openLinkAtZone(
    "cybercomSite",
    "Press space to learn more about us",
    "https://cybercom.com/"
  );
  openLinkAtZone(
    "wunderPositions",
    "Press space to see open positions",
    "https://wunder.io/careers/"
  );
  openLinkAtZone(
    "wunderSite",
    "Press space to learn more about us",
    "https://wunder.io/"
  );
  openLinkAtZone(
    "wunderSite",
    "Press space to learn more about us",
    "https://wunder.io/"
  );
  openLinkAtZone(
    "wunderpedia",
    "Press space to explore wunderpedia",
    "https://wunder.io/wunderpedia/"
  );
});

function openLinkAtZone(zone: string, messageToShow: string, link: string) {
  let message: ReturnType<typeof WA.ui.displayActionMessage>;

  WA.room.onEnterZone(
    zone,
    () =>
      (message = WA.ui.displayActionMessage({
        message: messageToShow + " (opens a separate tab)",
        callback: () => WA.nav.openTab(link),
      }))
  );

  WA.room.onLeaveZone(zone, () => message && message.remove());
}
