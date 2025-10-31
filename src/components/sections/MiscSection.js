import Section from "../base/Section.js";
import Block from "../base/Block.js";
import Button from "../base/Button.js";

export default class MiscSection {
  static create() {
    const patreonIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 640 640"><path fill="#d64b00" d="M554 217.8C553.9 152.4 503 98.8 443.3 79.5C369.1 55.5 271.3 59 200.4 92.4C114.6 132.9 87.6 221.7 86.6 310.2C85.8 383 93 574.6 201.2 576C281.5 577 293.5 473.5 330.7 423.7C357.1 388.2 391.2 378.2 433.1 367.8C505.1 350 554.2 293.1 554.1 217.8L554 217.8z"/></svg>
    `;

    const stickerlyIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="-4.8 -4.8 57.60 57.60" id="b" fill="#0fa8f5" stroke="#0fa8f5"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <defs> <style>.c{fill:none;stroke:#1fc7ff;stroke-linecap:round;stroke-linejoin:round;}</style> </defs> <path class="c" d="m20.83,45.2679c-10.8073-1.597-18.9953-11.2358-18.2874-22.6398C3.2073,11.9213,11.9213,3.2073,22.6282,2.5427c11.404-.7079,21.0427,7.4801,22.6398,18.2874.2767,1.8724-.3654,3.7674-1.7038,5.1058l-17.6283,17.6283c-1.3384,1.3384-3.2334,1.9805-5.1058,1.7038Z"/> <g> <ellipse class="c" cx="17.4017" cy="18.3001" rx="3.0459" ry="4.3001"/> <ellipse class="c" cx="30.5983" cy="18.3001" rx="3.0459" ry="4.3001"/> <path class="c" d="m33.6442,27.8345c-1.4611,4.6199-5.6618,6.1655-9.255,6.1655-3.5932,0-7.2564-1.3216-9.255-6.1655"/> </g> </g></svg>
    `;

    const paypalIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid" viewBox="0 0 256 302" id="paypal"><path fill="#27346A" d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.393 13.393 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221.366-1.873.683-3.696.957-5.477-1.556-.824-1.556-.824 0 0 3.671-23.407-.025-39.34-12.686-53.765"></path><path fill="#27346A" d="M102.397 68.84a11.737 11.737 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a101.6 101.6 0 0 1 6.177 1.182 89.928 89.928 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287 3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.717 11.717 0 0 1 6.509-8.74z"></path><path fill="#2790C3" d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48 9.173-58.136.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55 4.503-23.15 2.173-42.478-9.739-56.054-3.613-4.112-8.1-7.508-13.327-10.28-.283 1.79-.59 3.604-.957 5.477z"></path><path fill="#1F264F" d="M216.952 72.128a89.928 89.928 0 0 0-5.818-1.49 109.904 109.904 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.57 11.57 0 0 0-5.053 1.149 11.683 11.683 0 0 0-6.51 8.74l-15.582 98.798-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221.367-1.873.675-3.688.958-5.477-3.122-1.648-6.501-3.072-10.14-4.279a83.26 83.26 0 0 0-2.77-.865"></path></svg>
    `;

    const patreonButton = new Button({
      label: "Patreon",
      icon: patreonIcon,
      className: "patreon-button",
      onClick: () => window.open("https://patreon.com/choxypop", "_blank"),
    });

    const stickerlyButton = new Button({
      label: "Stickers",
      icon: stickerlyIcon,
      className: "stickerly-button",
      onClick: () => window.open("https://sticker.ly/user/choxypop", "_blank"),
    });

    const paypalButton = new Button({
      label: "PayPal",
      icon: paypalIcon,
      className: "paypal-button",
      onClick: () => window.open("https://paypal.me/noctrow", "_blank"),
    });

    const miscBlock = new Block();
    miscBlock.addButton(patreonButton);
    miscBlock.addButton(stickerlyButton);
    miscBlock.addButton(paypalButton);

    const miscSection = new Section("Contenido Exclusivo", "misc");
    miscSection.addBlock(miscBlock);

    return miscSection;
  }
}
