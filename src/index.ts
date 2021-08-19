/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

// console.log("Script started successfully");
// WA.openCoWebSite("https://workadventu.re");

WA.onInit().then(() => {
  console.log("Hello", WA.player.name);

  let message: ReturnType<typeof WA.ui.displayActionMessage>;

  WA.room.onEnterZone(
    "brella",
    () =>
      (message = WA.ui.displayActionMessage({
        message:
          "Press space to join other attendees at the Brella matchmaking platform (opens a separate tab)",
        callback: () =>
          WA.nav.openTab("https://next.brella.io/join/reactfinland2021"),
      }))
  );

  WA.room.onLeaveZone("brella", () => message && message.remove());
});
