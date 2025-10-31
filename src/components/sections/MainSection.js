import Section from "../base/Section.js";
import Block from "../base/Block.js";
import Button from "../base/Button.js";

export default class MainSection {
  static create() {
    const websiteIcon = `
      <svg width="22" height="22" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 116.87"><defs><style>.cls-1{fill: #0a8de4ff;fill-rule:evenodd;}.cls-2{fill:#fff;}</style></defs><polygon class="cls-1" points="61.37 8.24 80.43 0 90.88 17.79 111.15 22.32 109.15 42.85 122.88 58.43 109.2 73.87 111.15 94.55 91 99 80.43 116.87 61.51 108.62 42.45 116.87 32 99.08 11.73 94.55 13.73 74.01 0 58.43 13.68 42.99 11.73 22.32 31.88 17.87 42.45 0 61.37 8.24 61.37 8.24"/><path class="cls-2" d="M37.92,65c-6.07-6.53,3.25-16.26,10-10.1,2.38,2.17,5.84,5.34,8.24,7.49L74.66,39.66C81.1,33,91.27,42.78,84.91,49.48L61.67,77.2a7.13,7.13,0,0,1-9.9.44C47.83,73.89,42.05,68.5,37.92,65Z"/></svg>
    `;

    const emailIcon = `
      <svg width="22px" height="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" id="mail"><defs><linearGradient id="a" x1="26.206" x2="146.207" y1="-1059.782" y2="-1059.782" gradientTransform="rotate(90 -486.788 -512.994)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d6ff2"></stop><stop offset="1" stop-color="#1ac8fc"></stop></linearGradient></defs><path fill="url(#a)" fill-rule="evenodd" d="M0,94V26A25.94821,25.94821,0,0,1,26,0H94a25.94821,25.94821,0,0,1,26,26V94a25.94821,25.94821,0,0,1-26,26H26A26.012,26.012,0,0,1,0,94Z"></path><path fill="#fff" fill-rule="evenodd" d="M99,86.2a6.10894,6.10894,0,0,1-3,.8H24a5.83049,5.83049,0,0,1-3-.8l24-24,5.9,5.9A12.219,12.219,0,0,0,60,71.5a12.37426,12.37426,0,0,0,9.1-3.4L75,62.2Zm2.1-2.2-24-24,24-24a6.10893,6.10893,0,0,1,.8,3V81A4.55088,4.55088,0,0,1,101.1,84ZM18.8,84a6.10894,6.10894,0,0,1-.8-3V39a5.83049,5.83049,0,0,1,.8-3l24,24ZM99,33.8,66.9,65.9A9.353,9.353,0,0,1,60,68.5a9.353,9.353,0,0,1-6.9-2.6L21,33.8a6.10894,6.10894,0,0,1,3-.8H96A6.10862,6.10862,0,0,1,99,33.8Z"></path></svg>
    `;

    const whatsappIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="22px" viewBox="0 0 1024 1024" id="whatsapp"><defs><path id="b" d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"></path></defs><linearGradient id="a" x1="512.001" x2="512.001" y1=".978" y2="1025.023" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#61fd7d"></stop><stop offset="1" stop-color="#2bb826"></stop></linearGradient><use xlink:href="#b" fill="url(#a)" overflow="visible"></use><path fill="#FFF" d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"></path></svg>
    `;
    
    const telegramIcon = `
      <svg height="22px" width="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.94 61.94" id="telegram"><defs><radialGradient id="a" cx="29.8" cy="-26.28" r="72.01" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6fcee7"></stop><stop offset=".2" stop-color="#58b7db"></stop><stop offset=".42" stop-color="#48a7d3"></stop><stop offset=".67" stop-color="#3f9ece"></stop><stop offset="1" stop-color="#3c9bcc"></stop></radialGradient><linearGradient id="b" x1="28.97" x2="28.97" y1="45.56" y2="16.37" gradientUnits="userSpaceOnUse"><stop offset=".16" stop-color="#e1f4fd"></stop><stop offset=".4" stop-color="#f2fafe"></stop><stop offset=".67" stop-color="#fcfeff"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient></defs><rect width="61.94" height="61.94" fill="url(#a)" rx="16.96"></rect><path fill="url(#b)" d="M30.09,39.26l-.88.86c-1,.92-1.9,1.85-2.87,2.76a3,3,0,0,1-1.45.82l-.12,0h-.15a.66.66,0,0,1,0-.14c.09-1.23.19-2.47.29-3.71.08-1.09.17-2.18.25-3.28,0-.31.05-.63.08-.94a.34.34,0,0,1,.11-.18l4.46-4.08,9-8.2,1.2-1.1a1.71,1.71,0,0,0,.22-.25c.12-.17.06-.31-.14-.36a.82.82,0,0,0-.63.06,3.64,3.64,0,0,0-.47.28L21.85,32.58c-.32.2-.63.41-1,.6a.42.42,0,0,1-.27,0L12.9,30.85a5.29,5.29,0,0,1-.76-.27.77.77,0,0,1-.33-1.23,1.77,1.77,0,0,1,.82-.66q1.18-.5,2.37-1l12.94-5,16-6.17a3.08,3.08,0,0,1,.66-.18,1.49,1.49,0,0,1,1.64,1.27,3.17,3.17,0,0,1,0,1.3c-.66,3.11-1.33,6.22-2,9.34L42,38.61c-.36,1.7-.71,3.39-1.09,5.08a4.29,4.29,0,0,1-.34,1,1.31,1.31,0,0,1-1.7.77,3.44,3.44,0,0,1-1.16-.55c-2.5-1.87-5-3.73-7.53-5.6Z"></path></svg>
    `;

    const googleIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="none" viewBox="0 0 256 256" id="google"><rect width="224" height="224" x="16" y="16" fill="url(#paint0_linear_531_13626)" rx="70"></rect><path fill="#4285F4" d="M192.224 129.249C192.224 123.786 191.78 119.8 190.821 115.666H128.443V140.321H165.058C164.32 146.449 160.333 155.676 151.475 161.877L151.351 162.702L171.073 177.981L172.44 178.117C184.989 166.528 192.224 149.475 192.224 129.249Z"></path><path fill="#34A853" d="M128.443 194.208C146.381 194.208 161.44 188.302 172.439 178.115L151.475 161.875C145.864 165.787 138.335 168.518 128.443 168.518C110.874 168.518 95.9625 156.929 90.647 140.91L89.8679 140.976L69.36 156.848L69.0918 157.593C80.017 179.296 102.458 194.208 128.443 194.208Z"></path><path fill="#FBBC05" d="M90.6476 140.912C89.245 136.779 88.4333 132.349 88.4333 127.773C88.4333 123.195 89.245 118.766 90.5738 114.633L90.5366 113.752L69.7718 97.626L69.0924 97.9491C64.5896 106.955 62.0059 117.069 62.0059 127.773C62.0059 138.476 64.5896 148.589 69.0924 157.595L90.6476 140.912Z"></path><path fill="#EB4335" d="M128.443 87.0221C140.918 87.0221 149.334 92.4109 154.132 96.9142L172.882 78.6068C161.367 67.903 146.381 61.333 128.443 61.333C102.458 61.333 80.017 76.2445 69.0918 97.9473L90.5732 114.631C95.9625 98.6119 110.874 87.0221 128.443 87.0221Z"></path><defs><linearGradient id="paint0_linear_531_13626" x1="16" x2="208" y1="16" y2="240" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#ACCCFF"></stop></linearGradient></defs></svg>
    `;
    
    const trustpilotIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 799.89 761" width="22" height="22"><path d="M799.89 290.83H494.44L400.09 0l-94.64 290.83L0 290.54l247.37 179.92L152.72 761l247.37-179.63L647.16 761l-94.35-290.54z" fill="#00b67a"/><path d="M574.04 536.24l-21.23-65.78-152.72 110.91z" fill="#005128"/></svg>
    `;

    const websiteButton = new Button({
      label: "Sitio Web",
      icon: websiteIcon,
      className: "website-button",
      onClick: () =>
        window.open("https://choxypop.com/", "_blank"),
    });

    const emailButton = new Button({
      label: "Email",
      icon: emailIcon,
      className: "email-button",
      onClick: () => window.open("mailto:info@choxypop.com", "_blank"),
    });

    const whatsappButton = new Button({
      label: "Mi WhatsApp",
      icon: whatsappIcon,
      className: "whatsapp-button",
      onClick: () => window.open("https://wa.me/+542494060873", "_blank"),
    });

    const telegramButton = new Button({
      label: "Mi Telegram",
      icon: telegramIcon,
      className: "telegram-button",
      onClick: () => window.open("https://t.me/choxypop", "_blank"),
    });

    const googleButton = new Button({
      label: "Google (Reseñas)",
      icon: googleIcon,
      className: "google-button",
      onClick: () => window.open("https://g.page/r/CWzqR9xPAVS-EBM/review", "_blank"),
    });

    const trustpilotButton = new Button({
      label: "Trustpilot",
      icon: trustpilotIcon,
      className: "trustpilot-button",
      onClick: () => window.open("https://www.trustpilot.com/review/choxypop.com", "_blank"),
    });

    const mainBlock = new Block();
    mainBlock.addButton(websiteButton);
    mainBlock.addButton(emailButton);
    mainBlock.addButton(whatsappButton);
    mainBlock.addButton(telegramButton);
    mainBlock.addButton(googleButton);
    mainBlock.addButton(trustpilotButton);

    const mainSection = new Section("Más Sobre Mi", "main", {
      content: "Por WA respondo más rapido. 😉",
      position: "right",
    });
    mainSection.setTitleLevel("h1");
    mainSection.setDescription(
      "¿Quieres saber más sobre mis proyectos, hablar conmigo, preguntar algunas cosas o dar tu opinion? Pues no dudes en visitar cualquiera de los siguientes enlaces."
    );
    mainSection.addBlock(mainBlock);

    return mainSection;
  }
}
