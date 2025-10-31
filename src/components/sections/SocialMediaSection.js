import Section from "../base/Section.js";
import Block from "../base/Block.js";
import Button from "../base/Button.js";

export default class SocialMediaSection {
  static create() {
    const deviantartIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87" id="deviantart"><g id="Layer_2"><g id="Layer_1-2"><rect width="28.87" height="28.87" rx="6.48" ry="6.48" style="fill:#05cc47"></rect><path d="M18.63 7.69h-2.54l-1.43 2.72h-4.42v3.38h2.64l-2.64 5.03v2.36h2.57l1.43-2.71h4.39v-3.38h-2.61l2.61-4.98V7.69z" style="fill:#fff"></path></g></g></svg>
    `;

    const whatsappIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="22px" viewBox="0 0 1024 1024" id="whatsapp"><defs><path id="b" d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"></path></defs><linearGradient id="a" x1="512.001" x2="512.001" y1=".978" y2="1025.023" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#61fd7d"></stop><stop offset="1" stop-color="#2bb826"></stop></linearGradient><use xlink:href="#b" fill="url(#a)" overflow="visible"></use><path fill="#FFF" d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"></path></svg>
    `;

    const instagramIcon = `
      <svg width="22px" height="22px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><style>.cls-1{fill:url(#radial-gradient);}.cls-2{fill:#fff;}</style><radialGradient cx="-578.95" cy="-837.6" gradientTransform="translate(499.5 629.5) scale(0.75)" gradientUnits="userSpaceOnUse" id="radial-gradient" r="197.06"><stop offset="0" stop-color="#f9ed32"/><stop offset="0.36" stop-color="#ee2a7b"/><stop offset="0.44" stop-color="#d22a8a"/><stop offset="0.6" stop-color="#8b2ab2"/><stop offset="0.83" stop-color="#1b2af0"/><stop offset="0.88" stop-color="#002aff"/></radialGradient></defs><title/><g data-name="3-instagram" id="_3-instagram"><rect class="cls-1" height="64" rx="11.2" ry="11.2" transform="translate(64 64) rotate(180)" width="64"/><path class="cls-2" d="M44,56H20A12,12,0,0,1,8,44V20A12,12,0,0,1,20,8H44A12,12,0,0,1,56,20V44A12,12,0,0,1,44,56ZM20,12.8A7.21,7.21,0,0,0,12.8,20V44A7.21,7.21,0,0,0,20,51.2H44A7.21,7.21,0,0,0,51.2,44V20A7.21,7.21,0,0,0,44,12.8Z"/><path class="cls-2" d="M32,45.6A13.6,13.6,0,1,1,45.6,32,13.61,13.61,0,0,1,32,45.6Zm0-22.4A8.8,8.8,0,1,0,40.8,32,8.81,8.81,0,0,0,32,23.2Z"/><circle class="cls-2" cx="45.6" cy="19.2" r="2.4"/></g></svg>
    `;

    const facebookIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64"><rect fill="#0866FF" width="512" height="509.64" rx="115.612" ry="115.612"/><path fill="#fff" d="M287.015 509.64h-92.858V332.805h-52.79v-78.229h52.79v-33.709c0-87.134 39.432-127.522 124.977-127.522 16.217 0 44.203 3.181 55.651 6.361v70.915c-6.043-.636-16.536-.953-29.576-.953-41.976 0-58.194 15.9-58.194 57.241v27.667h83.618l-14.365 78.229h-69.253V509.64z"/></svg>
    `;

    const tiktokIcon = `
      <svg width="22px" height="22px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" style="enable-background:new 0 0 64 64;" version="1.1" viewBox="0 0 64 64" xml:space="preserve"><style type="text/css">.st0{fill:#314A52;}.st1{fill-rule:evenodd;clip-rule:evenodd;}.st2{fill:#FE2C55;}.st3{fill:#25F4EE;}.st4{fill:#FFFFFF;}</style><g id="TikTok"><path class="st0" d="M3,13C3,7.5,7.5,3,13,3h38c5.5,0,10,4.5,10,10v38c0,5.5-4.5,10-10,10H13C7.5,61,3,56.5,3,51V13z"/><path class="st1" d="M9.5,5.1c1-0.5,2.1-0.8,4-0.9C15.4,4,17.8,4,21.2,4h21.6c3.4,0,5.8,0,7.7,0.2c1.9,0.2,3.1,0.4,4,0.9   c1.9,1,3.4,2.5,4.4,4.4c0.5,1,0.8,2.1,0.9,4c0.1,1.7,0.2,3.8,0.2,6.6c-0.1,12.2-7.7,22.7-19,28.1c-3.5,2.3-9.8,3.8-17,3.8   c-11,0-19.9-3.6-20-7.9c0-0.4,0-0.8,0-1.3V21.2c0-3.4,0-5.8,0.2-7.7c0.2-1.9,0.4-3.1,0.9-4C6,7.6,7.6,6,9.5,5.1z M42.9,0H21.1   c-3.3,0-5.9,0-8,0.2C11,0.3,9.3,0.7,7.6,1.5C5,2.9,2.9,5,1.5,7.6C0.7,9.3,0.3,11,0.2,13.2C0,15.2,0,17.8,0,21.1v21.8   c0,3.3,0,5.9,0.2,8c0.2,2.1,0.5,3.9,1.4,5.5C2.9,59,5,61.1,7.6,62.5c1.6,0.8,3.4,1.2,5.5,1.4c2.1,0.2,4.7,0.2,8,0.2h21.8   c3.3,0,5.9,0,8-0.2c2.1-0.2,3.9-0.5,5.5-1.4c2.6-1.3,4.8-3.5,6.1-6.1c0.8-1.6,1.2-3.4,1.4-5.5c0.2-2.1,0.2-4.7,0.2-8V21.1   c0-3.3,0-5.9-0.2-8c-0.2-2.1-0.5-3.9-1.4-5.5C61.1,5,59,2.9,56.4,1.5c-1.6-0.8-3.4-1.2-5.5-1.4C48.8,0,46.2,0,42.9,0z"/><path class="st2" d="M54,22c-6.6,0-12-5.4-12-12h-8v32c0,3.3-2.7,6-6,6c-3.3,0-6-2.7-6-6c0-3.3,2.7-6,6-6c0.7,0,1.4,0.1,2,0.3v-8.2   C29.3,28,28.7,28,28,28c-7.7,0-14,6.3-14,14c0,7.7,6.3,14,14,14c7.7,0,14-6.3,14-14V26c3.3,2.5,7.5,4,12,4V22z"/><path class="st3" d="M52,20c-6.6,0-12-5.4-12-12h-8v32c0,3.3-2.7,6-6,6c-3.3,0-6-2.7-6-6c0-3.3,2.7-6,6-6c0.7,0,1.4,0.1,2,0.3v-8.2   C27.3,26,26.7,26,26,26c-7.7,0-14,6.3-14,14c0,7.7,6.3,14,14,14c7.7,0,14-6.3,14-14V24c3.3,2.5,7.5,4,12,4V20z"/><path class="st4" d="M52,21.8c-3-0.5-5.6-2.1-7.4-4.4c-2.3-1.8-3.9-4.4-4.4-7.4H34v32c0,3.3-2.7,6-6,6c-2.2,0-4.1-1.2-5.1-2.9   c-1.7-1.1-2.9-3-2.9-5.1c0-3.3,2.7-6,6-6c0.7,0,1.4,0.1,2,0.3V28c-7.7,0-14,6.3-14,14c0,3.4,1.2,6.4,3.2,8.8c2.4,2,5.5,3.2,8.8,3.2   c7.7,0,14-6.3,14-14V24c3.3,2.5,7.5,4,12,4V21.8z"/></g></svg>
    `;

    const youtubeIcon = `
      <svg width="22px" height="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87" id="youtube"><g id="Layer_2"><g id="Layer_1-2"><rect width="28.87" height="28.87" rx="6.48" ry="6.48" style="fill:#fd3832"></rect><path d="M8 19.77a1.88 1.88 0 0 1-1.24-1.21c-.54-1.48-.7-7.66.34-8.88A2 2 0 0 1 8.46 9c2.79-.3 11.41-.26 12.4.1a1.94 1.94 0 0 1 1.22 1.17c.59 1.53.61 7.09-.08 8.56a1.89 1.89 0 0 1-.87.88c-1.04.52-11.75.51-13.13.06zm4.43-2.9l5-2.6-5-2.62z" style="fill:#fff;fill-rule:evenodd"></path></g></g></svg>
    `;

    const blueskyIcon = `
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8576 6.06892C16.1772 10.1191 21.8992 18.3312 24 22.7383C26.1009 18.3315 31.8225 10.119 37.1424 6.06892C40.9808 3.14646 47.2 0.885231 47.2 8.08059C47.2 9.5176 46.3876 20.1522 45.9111 21.8787C44.2548 27.8812 38.2196 29.4122 32.8511 28.4856C42.2351 30.1053 44.6223 35.4704 39.4668 40.8355C29.6756 51.0249 25.394 38.2789 24.2964 35.013C24.0953 34.4142 24.0012 34.1341 23.9998 34.3723C23.9984 34.1341 23.9043 34.4142 23.7032 35.013C22.6061 38.2789 18.3246 51.0252 8.5328 40.8355C3.37728 35.4704 5.7644 30.1049 15.1486 28.4856C9.77992 29.4122 3.74456 27.8812 2.08856 21.8787C1.61207 20.1521 0.799683 9.51744 0.799683 8.08059C0.799683 0.885231 7.01904 3.14646 10.8573 6.06892H10.8576Z" fill="#1185FE"/></svg>
    `;

    const twitterIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64"><rect width="512" height="509.64" rx="115.61" ry="115.61"/><path fill="#fff" fill-rule="nonzero" d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"/></svg>
      `;

    const deviantartButton = new Button({
      label: "DeviantArt",
      icon: deviantartIcon,
      className: "deviantart-button",
      onClick: () =>
        window.open(
          "https://www.deviantart.com/choxypop",
          "_blank"
        ),
    });

    const whatsappButton = new Button({
      label: "WhatsApp",
      icon: whatsappIcon,
      className: "whatsapp-button",
      onClick: () => window.open("https://whatsapp.com/channel/0029VaFZXi4FHWq38h6MIO0H", "_blank"),
    });

    const instagramButton = new Button({
      label: "Instagram",
      icon: instagramIcon,
      className: "instagram-button",
      onClick: () =>
        window.open("https://instagram.com/choxypop", "_blank"),
    });

    const facebookButton = new Button({
      label: "Facebook",
      icon: facebookIcon,
      className: "facebook-button",
      onClick: () =>
        window.open("https://facebook.com/choxypop.oficial", "_blank"),
    });

    const tiktokButton = new Button({
      label: "TikTok",
      icon: tiktokIcon,
      className: "tiktok-button",
      onClick: () =>
        window.open("https://tiktok.com/@choxypop", "_blank"),
    });

    const youtubeButton = new Button({
      label: "YouTube",
      icon: youtubeIcon,
      className: "youtube-button",
      onClick: () =>
        window.open("https://youtube.com/@choxypop", "_blank"),
    });

    const blueskyButton = new Button({
      label: "BlueSky",
      icon: blueskyIcon,
      className: "bluesky-button",
      onClick: () =>
        window.open("https://bsky.app/profile/choxypop.com", "_blank"),
    });

    const twitterButton = new Button({
      label: "Twitter",
      icon: twitterIcon,
      className: "twitter-button",
      onClick: () =>
        window.open("https://x.com/choxypop", "_blank"),
    });


    const socialBlock = new Block();
    socialBlock.addButton(deviantartButton);
    socialBlock.addButton(whatsappButton);
    socialBlock.addButton(instagramButton);
    socialBlock.addButton(facebookButton);
    socialBlock.addButton(tiktokButton);
    socialBlock.addButton(youtubeButton);
    socialBlock.addButton(blueskyButton);
    socialBlock.addButton(twitterButton);

    const socialSection = new Section("Redes Sociales", "social media");
    socialSection.addBlock(socialBlock);

    return socialSection;
  }
}
