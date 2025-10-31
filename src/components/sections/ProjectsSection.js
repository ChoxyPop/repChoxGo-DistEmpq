import Section from "../base/Section.js";
import Block from "../base/Block.js";
import Button from "../base/Button.js";

export default class ProjectsSection {
  static create() {
    const whatsappIcon = `
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z" fill="#25D366"/></svg>
    `;

    const minecraftIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" version="1.1" width="22" height="22" viewBox="0 0 512 512" id="svg1" xml:space="preserve"><defs id="defs1"></defs><path id="bg1" fill="#81563a" d="M 0,0 H 512 V 512 H 0 Z"></path><path id="bg2" fill="#61b441" d="M 0,0 V 128 H 64 V 64 H 128 V 128 H 256 V 192 H 320 V 128 H 384 V 64 H 448 V 192 H 512 V 0 Z"></path><rect id="rect1" width="64" height="64" x="0" y="0" fill="#86d562"></rect><rect id="rect2" width="64" height="64" x="64" y="0" fill="#52a535"></rect><rect id="rect3" width="64" height="64" x="128" y="0" fill="#6cc349"></rect><rect id="rect4" width="64" height="64" x="192" y="0" fill="#86d562"></rect><rect id="rect5" width="64" height="64" x="256" y="0" fill="#6cc349"></rect><rect id="rect6" width="64" height="64" x="320" y="0" fill="#52a535"></rect><rect id="rect7" width="64" height="64" x="384" y="0" fill="#6cc349"></rect><rect id="rect8" width="64" height="64" x="448" y="0" fill="#52a535"></rect><rect id="rect9" width="64" height="64" x="0" y="64" fill="#52a535"></rect><rect id="rect10" width="64" height="64" x="64" y="64" fill="#66412c"></rect><rect id="rect11" width="64" height="64" x="128" y="64" fill="#52a535"></rect><rect id="rect12" width="64" height="64" x="192" y="64" fill="#3c8527"></rect><rect id="rect13" width="64" height="64" x="256" y="64" fill="#52a535"></rect><rect id="rect14" width="64" height="64" x="320" y="64" fill="#6cc349"></rect><rect id="rect15" width="64" height="64" x="384" y="64" fill="#66412c"></rect><rect id="rect16" width="64" height="64" x="448" y="64" fill="#6cc349"></rect><rect id="rect17" width="64" height="64" x="0" y="128" fill="#66412c"></rect><rect id="rect18" width="64" height="64" x="64" y="128" fill="#998f8b"></rect><rect id="rect19" width="64" height="64" x="128" y="128" fill="#66412c"></rect><rect id="rect20" width="64" height="64" x="192" y="128" fill="#66412c"></rect><rect id="rect21" width="64" height="64" x="256" y="128" fill="#6cc349"></rect><rect id="rect22" width="64" height="64" x="320" y="128" fill="#66412c"></rect><rect id="rect23" width="64" height="64" x="384" y="128" fill="#805539"></rect><rect id="rect24" width="64" height="64" x="448" y="128" fill="#52a535"></rect><rect id="rect25" width="64" height="64" x="0" y="192" fill="#976746"></rect><rect id="rect26" width="64" height="64" x="64" y="192" fill="#805539"></rect><rect id="rect27" width="64" height="64" x="128" y="192" fill="#976746"></rect><rect id="rect28" width="64" height="64" x="192" y="192" fill="#ad7a54"></rect><rect id="rect29" width="64" height="64" x="256" y="192" fill="#66412c"></rect><rect id="rect30" width="64" height="64" x="320" y="192" fill="#805539"></rect><rect id="rect31" width="64" height="64" x="384" y="192" fill="#976746"></rect><rect id="rect32" width="64" height="64" x="448" y="192" fill="#66412c"></rect><rect id="rect33" width="64" height="64" x="0" y="256" fill="#805539"></rect><rect id="rect34" width="64" height="64" x="64" y="256" fill="#66412c"></rect><rect id="rect35" width="64" height="64" x="128" y="256" fill="#66412c"></rect><rect id="rect36" width="64" height="64" x="192" y="256" fill="#976746"></rect><rect id="rect37" width="64" height="64" x="256" y="256" fill="#805539"></rect><rect id="rect38" width="64" height="64" x="320" y="256" fill="#ad7a54"></rect><rect id="rect39" width="64" height="64" x="384" y="256" fill="#66412c"></rect><rect id="rect40" width="64" height="64" x="448" y="256" fill="#66412c"></rect><rect id="rect41" width="64" height="64" x="0" y="320" fill="#ad7a54"></rect><rect id="rect42" width="64" height="64" x="64" y="320" fill="#805539"></rect><rect id="rect43" width="64" height="64" x="128" y="320" fill="#66412c"></rect><rect id="rect44" width="64" height="64" x="192" y="320" fill="#66412c"></rect><rect id="rect45" width="64" height="64" x="256" y="320" fill="#998f8b"></rect><rect id="rect46" width="64" height="64" x="320" y="320" fill="#805539"></rect><rect id="rect47" width="64" height="64" x="384" y="320" fill="#976746"></rect><rect id="rect48" width="64" height="64" x="448" y="320" fill="#805539"></rect><rect id="rect49" width="64" height="64" x="0" y="384" fill="#805539"></rect><rect id="rect50" width="64" height="64" x="64" y="384" fill="#976746"></rect><rect id="rect51" width="64" height="64" x="128" y="384" fill="#66412c"></rect><rect id="rect52" width="64" height="64" x="192" y="384" fill="#ad7a54"></rect><rect id="rect53" width="64" height="64" x="256" y="384" fill="#976746"></rect><rect id="rect54" width="64" height="64" x="320" y="384" fill="#ad7a54"></rect><rect id="rect55" width="64" height="64" x="384" y="384" fill="#805539"></rect><rect id="rect56" width="64" height="64" x="448" y="384" fill="#976746"></rect><rect id="rect57" width="64" height="64" x="0" y="448" fill="#66412c"></rect><rect id="rect58" width="64" height="64" x="64" y="448" fill="#805539"></rect><rect id="rect59" width="64" height="64" x="128" y="448" fill="#998f8b"></rect><rect id="rect60" width="64" height="64" x="192" y="448" fill="#805539"></rect><rect id="rect61" width="64" height="64" x="256" y="448" fill="#805539"></rect><rect id="rect62" width="64" height="64" x="320" y="448" fill="#976746"></rect><rect id="rect63" width="64" height="64" x="384" y="448" fill="#66412c"></rect><rect id="rect64" width="64" height="64" x="448" y="448" fill="#ad7a54"></rect><rect id="rect65" width="64" height="4.4" x="384" y="64" fill="#503120"></rect><rect id="rect66" width="64" height="4.4" x="320" y="128" fill="#503120"></rect><rect id="rect67" width="64" height="4.4" x="128" y="128" fill="#503120"></rect><rect id="rect68" width="64" height="4.4" x="192" y="128" fill="#503120"></rect><rect id="rect69" width="64" height="4.4" x="64" y="64" fill="#503120"></rect><rect id="rect70" width="64" height="4.4" x="0" y="128" fill="#503120"></rect><rect id="rect71" width="64" height="4.4" x="64" y="192" fill="#65402a"></rect><rect id="rect72" width="64" height="4.4" x="256" y="192" fill="#503120"></rect><rect id="rect73" width="64" height="4.4" x="448" y="192" fill="#503120"></rect><rect id="rect74" width="64" height="4.4" x="384" y="256" fill="#503120"></rect><rect id="rect75" width="64" height="4.4" x="192" y="320" fill="#503120"></rect><rect id="rect76" width="64" height="4.4" x="128" y="256" fill="#503120"></rect><rect id="rect77" width="64" height="4.4" x="0" y="256" fill="#65402a"></rect><rect id="rect78" width="64" height="4.4" x="256" y="384" fill="#764d34"></rect><rect id="rect79" width="64" height="4.4" x="0" y="448" fill="#503120"></rect><rect id="rect80" width="64" height="4.4" x="320" y="448" fill="#764d34"></rect><rect id="rect81" width="64" height="4.4" x="320" y="320" fill="#65402a"></rect><rect id="rect82" width="64" height="4.4" x="384" y="384" fill="#65402a"></rect><script xmlns=""></script></svg>
    `;

    const robloxIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1333.35 1333.35" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M272.91 0L0 1060.43l1060.43 272.91L1333.34 272.9 272.91-.01zm316.86 536.5l207 53.25-53.28 207.02-207-53.28 53.28-207z" fill="#1a81e2ff" fill-rule="nonzero"/></svg>
    `;

    const discordIcon = `
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.634 8.31118C37.5747 6.90741 34.294 5.87318 30.8638 5.28084C30.8013 5.2694 30.7389 5.29797 30.7067 5.35511C30.2848 6.10554 29.8175 7.08454 29.4902 7.85403C25.8008 7.30169 22.1304 7.30169 18.5166 7.85403C18.1893 7.06744 17.705 6.10554 17.2811 5.35511C17.249 5.29988 17.1866 5.27131 17.1241 5.28084C13.6958 5.87129 10.4151 6.90552 7.35387 8.31118C7.32737 8.3226 7.30465 8.34167 7.28958 8.36641C1.06678 17.6631 -0.637901 26.7313 0.19836 35.6871C0.202144 35.7309 0.22674 35.7729 0.260796 35.7995C4.36642 38.8146 8.34341 40.645 12.2466 41.8582C12.309 41.8773 12.3752 41.8545 12.415 41.803C13.3383 40.5422 14.1613 39.2127 14.867 37.8146C14.9086 37.7327 14.8688 37.6356 14.7837 37.6032C13.4783 37.108 12.2352 36.5042 11.0395 35.8186C10.9449 35.7633 10.9373 35.628 11.0243 35.5633C11.2759 35.3747 11.5276 35.1785 11.7679 34.9805C11.8114 34.9443 11.872 34.9366 11.9231 34.9595C19.7786 38.546 28.2831 38.546 36.0459 34.9595C36.097 34.9348 36.1576 34.9424 36.203 34.9786C36.4433 35.1766 36.6949 35.3747 36.9484 35.5633C37.0354 35.628 37.0298 35.7633 36.9352 35.8186C35.7394 36.5175 34.4964 37.108 33.189 37.6013C33.1039 37.6337 33.0661 37.7327 33.1077 37.8146C33.8285 39.2107 34.6515 40.5402 35.5578 41.8011C35.5957 41.8545 35.6637 41.8773 35.7262 41.8582C39.6483 40.645 43.6252 38.8146 47.7309 35.7995C47.7668 35.7729 47.7895 35.7328 47.7933 35.689C48.7942 25.3352 46.117 16.3413 40.6964 8.3683C40.6832 8.34167 40.6605 8.3226 40.634 8.31118ZM16.04 30.234C13.675 30.234 11.7263 28.0627 11.7263 25.3961C11.7263 22.7296 13.6372 20.5583 16.04 20.5583C18.4617 20.5583 20.3916 22.7486 20.3538 25.3961C20.3538 28.0627 18.4428 30.234 16.04 30.234ZM31.9895 30.234C29.6245 30.234 27.6758 28.0627 27.6758 25.3961C27.6758 22.7296 29.5867 20.5583 31.9895 20.5583C34.4113 20.5583 36.3411 22.7486 36.3033 25.3961C36.3033 28.0627 34.4113 30.234 31.9895 30.234Z" fill="#5865F2"/></svg>
    `;

    const whatsappButton = new Button({
      label: "Comunidad de WhatsApp",
      icon: whatsappIcon,
      className: "whatsapp-button",
      onClick: () =>
        window.open("https://go.choxypop.com/wagroup", "_blank"),
    });

    const minecraftButton = new Button({
      label: "Realm de Minecraft",
      icon: minecraftIcon,
      className: "minecraft-button",
      onClick: () => window.open("https://minecraft.choxypop.com/", "_blank"),
    });

    const robloxButton = new Button({
      label: "Grupo de Roblox",
      icon: robloxIcon,
      className: "roblox-button",
      onClick: () =>
        window.open("https://roblox.choxypop.com/", "_blank"),
    });

    const discordButton = new Button({
      label: "Servidor de Discord",
      icon: discordIcon,
      className: "discord-button",
      onClick: () => window.open("https://discord.choxypop.com/", "_blank"),
    });

    const projectsBlock = new Block();
    projectsBlock.addButton(whatsappButton);
    projectsBlock.addButton(minecraftButton);
    projectsBlock.addButton(robloxButton);
    projectsBlock.addButton(discordButton);

    const projectsSection = new Section("Comunidad", "projects", {
      content: "Interactua con la comunidad. 😘",
      position: "right",
    });
    projectsSection.addBlock(projectsBlock);

    return projectsSection;
  }
}
