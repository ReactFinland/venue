(()=>{"use strict";function e(e,s,o){let t;WA.room.onEnterZone(e,(()=>t=WA.ui.displayActionMessage({message:s+" (opens a separate tab)",callback:()=>WA.nav.openTab(o)}))),WA.room.onLeaveZone(e,(()=>t&&t.remove()))}WA.onInit().then((()=>{console.log("Hello",WA.player.name),e("brella","Press space to join other attendees at the Brella matchmaking platform","https://next.brella.io/join/reactfinland2021"),e("vincit","Press space to see open positions","https://www.vincit.fi/en/careers/"),e("almaPositions","Press space to see open positions","https://www.almamedia.fi/en/careers/"),e("almaSite","Press space to learn more about us","https://www.almamedia.fi/"),e("cybercomPositions","Press space to see open positions","https://cybercom.com/join-us/"),e("cybercomSite","Press space to learn more about us","https://cybercom.com/"),e("wunderPositions","Press space to see open positions","https://wunder.io/careers/"),e("wunderSite","Press space to learn more about us","https://wunder.io/"),e("wunderSite","Press space to learn more about us","https://wunder.io/"),e("wunderpedia","Press space to explore wunderpedia","https://wunder.io/wunderpedia/")}))})();
//# sourceMappingURL=script.js.map