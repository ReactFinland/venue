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

  let currentPopup: ReturnType<typeof WA.ui.openPopup> | undefined;

  WA.room.onEnterZone("popUpRelexZone", () => {
    currentPopup = WA.ui.openPopup(
      "popUpRelex",
      "You code, the planet benefits: our work reduces significant amounts of food waste globally. If that’s something that resonates with you, check out our open positions and apply.",
      [
        {
          label: "See the full stack position",
          callback: (popup) => {
            WA.nav.openCoWebSite("https://grnh.se/f9a830a43us");
            popup.close();
          },
        },
        {
          label: "See the software developer position",
          callback: (popup) => {
            WA.nav.openCoWebSite("https://grnh.se/7ff36a803us");
            popup.close();
          },
        },
      ]
    );
  });
  WA.room.onLeaveZone("popUpRelexZone", closePopUp);

  WA.room.onEnterZone("popUpDirectionsZone", () => {
    currentPopup = WA.ui.openPopup(
      "popUpDirections",
      `North: Sponsors, West: 30.08-01.09, South: 02.09, East: 03.09`,
      [
        {
          label: "See the schedule",
          callback: (popup) => {
            WA.nav.openCoWebSite("https://react-finland.fi/schedule/");
            popup.close();
          },
        },
      ]
    );
  });
  WA.room.onLeaveZone("popUpDirectionsZone", closePopUp);

  function closePopUp() {
    if (currentPopup !== undefined) {
      currentPopup.close();
      currentPopup = undefined;
    }
  }
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
