import Section from "../base/Section.js";
import Block from "../base/Block.js";
import Button from "../base/Button.js";

export default class MiscSection {
  static create() {
    const patreonIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" aria-label="Patreon" viewBox="0 0 512 512" id="patreon"><rect width="512" height="512" fill="#052d49" rx="15%"></rect><circle cx="310" cy="223" r="113" fill="#fff"></circle><path fill="#f96854" d="M165 410V110h-56v300"></path></svg>
      `;

    const stickerlyIcon = `
      <svg width="22px" height="22px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C35.0457 44 44 35.0457 44 24C44 24 33.5 27 27 20C20.5 13 24 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 24L24 4" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
    `;

    const paypalIcon = `
      <svg width="22px" height="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87" id="paypal"><defs><linearGradient id="linear-gradient" x1="-3.04" x2="29.49" y1="-2.41" y2="28.95" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#253b80"></stop><stop offset="1" stop-color="#179bd7"></stop></linearGradient></defs><g id="Layer_2"><g id="Layer_1-2"><rect width="28.87" height="28.87" rx="6.48" ry="6.48" style="fill:url(#linear-gradient)"></rect><path id="_Path_" d="M19.88 10.5l-.05.29c-.66 3.37-2.9 4.53-5.77 4.53H12.6a.71.71 0 0 0-.7.6l-.75 4.74-.21 1.34a.37.37 0 0 0 .37.43h2.59a.62.62 0 0 0 .62-.52v-.13l.48-3.09v-.17a.62.62 0 0 1 .62-.53h.39c2.51 0 4.47-1 5-4a3.38 3.38 0 0 0-.52-3 2.47 2.47 0 0 0-.61-.49z" style="fill:#fff;opacity:.3"></path><path id="_Path_2" d="M19.19 10.23l-.31-.08-.33-.06a8.1 8.1 0 0 0-1.28-.09h-3.9a.62.62 0 0 0-.61.53l-.83 5.25v.15a.71.71 0 0 1 .7-.6h1.46c2.87 0 5.11-1.16 5.77-4.53 0-.1 0-.2.05-.29a3.49 3.49 0 0 0-.54-.23z" style="fill:#fff;opacity:.5"></path><path id="_Path_3" d="M12.75 10.52a.62.62 0 0 1 .61-.53h3.9a8.1 8.1 0 0 1 1.29.09l.33.06.31.08h.15a3.54 3.54 0 0 1 .54.23 3.18 3.18 0 0 0-.67-2.86c-.74-.84-2.08-1.21-3.79-1.21h-5a.71.71 0 0 0-.7.6L7.66 20.17a.43.43 0 0 0 .42.49h3.07l.77-4.89z" style="fill:#fff"></path></g></g></svg>
    `;

    const pinterestIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="22px" height="22px" viewBox="0 0 256 256" xml:space="preserve"><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 44.913 26.682 H 15.231 c -8.28 0 -15.002 -3.611 -15.211 -11.841 C 0.016 14.972 0 15.099 0 15.231 v 31.303 c 8.265 10.233 20.908 16.784 35.087 16.784 h 0.682 c 8.28 0 12.002 3.611 12.211 11.841 c 0.003 -0.131 0.02 -0.258 0.02 -0.39 C 48 83.181 44.181 90 35.769 90 h 39 C 83.181 90 90 83.181 90 74.769 C 90 42.732 69.814 26.682 44.913 26.682 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(216,0,33); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/><path d="M 90 74.769 L 90 74.769 c 0 -24.901 -20.186 -45.087 -45.087 -45.087 H 15.231 c -8.28 0 -15.002 -6.611 -15.211 -14.841 C 0.016 14.972 0 15.099 0 15.231 C 0 6.819 6.819 0 15.231 0 h 59.538 C 83.181 0 90 6.819 90 15.231 V 74.769" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(230,0,35); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/><path d="M 0 74.769 V 43.534 c 8.265 10.233 20.908 16.784 35.087 16.784 h 0.682 c 8.28 0 15.002 6.611 15.211 14.841 c 0.003 -0.131 0.02 -0.258 0.02 -0.39 C 51 83.181 44.181 90 35.769 90 H 15.231 C 6.819 90 0 83.181 0 74.769 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(203,0,31); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/><path d="M 11.625 24.41 c 0.675 -0.564 1.768 -2.423 2.014 -3.371 c 0.133 -0.51 0.68 -2.593 0.68 -2.593 c 0.356 0.678 1.395 1.252 2.5 1.252 c 3.289 0 5.66 -3.025 5.66 -6.784 c 0 -3.603 -2.94 -6.299 -6.724 -6.299 c -4.706 0 -7.206 3.16 -7.206 6.6 c 0 1.6 0.852 3.591 2.214 4.225 c 0.207 0.096 0.317 0.054 0.365 -0.146 c 0.036 -0.152 0.22 -0.892 0.303 -1.237 c 0.026 -0.11 0.013 -0.205 -0.076 -0.313 c -0.451 -0.546 -0.812 -1.552 -0.812 -2.489 c 0 -2.405 1.821 -4.733 4.925 -4.733 c 2.679 0 4.556 1.826 4.556 4.437 c 0 2.95 -1.49 4.994 -3.428 4.994 c -1.071 0 -1.872 -0.885 -1.615 -1.971 c 0.307 -1.297 0.903 -2.696 0.903 -3.631 c 0 -0.838 -0.45 -1.536 -1.38 -1.536 c -1.095 0 -1.974 1.132 -1.974 2.649 c 0 0.966 0.326 1.619 0.326 1.619 s -1.081 4.57 -1.279 5.421 c -0.219 0.942 -0.133 2.269 -0.038 3.132 L 11.625 24.41 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(2.81 0 0 2.81 1.4065934065934016 1.4065934065934016) " stroke-linecap="round"/></g></svg>
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

    const pinterestButton = new Button({
      label: "Pinterest",
      icon: pinterestIcon,
      className: "pinterest-button",
      onClick: () => window.open("https://pinterest.com/choxypop", "_blank"),
    });

    const miscBlock = new Block();
    miscBlock.addButton(patreonButton);
    miscBlock.addButton(stickerlyButton);
    miscBlock.addButton(paypalButton);
    miscBlock.addButton(pinterestButton);

    const miscSection = new Section("Contenido Exclusivo", "misc");
    miscSection.addBlock(miscBlock);

    return miscSection;
  }
}
