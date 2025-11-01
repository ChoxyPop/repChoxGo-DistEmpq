import CardHeader from "../statical/CardHeader.js";
import DecorativeElement from "../decorative/DecorativeElement.js";
import MainSection from "../sections/MainSection.js";
import ProjectsSection from "../sections/ProjectsSection.js";
import SocialMediaSection from "../sections/SocialMediaSection.js";
import CodeSection from "../sections/CodeSection.js";
import MiscSection from "../sections/MiscSection.js";

export default class Card {
  constructor(name = null) {
    this.name = name;
    this.header = new CardHeader(
      "https://raw.githubusercontent.com/ChoxyPop/contenido/f46b9427a46c6a8c3237854283f60579470fc3e0/profile.webp",
      "Foto de perfil de ChoxyPop",
      "Creando",
      "ChoxyPop",
      "Femboy de minicomics, memes y videojuegos."
    );

    this.decorativeElement = new DecorativeElement("animated-line");

    this.mainSection = MainSection.create();
    this.projectsSection = ProjectsSection.create();
    this.socialMediaSection = SocialMediaSection.create();
    this.codeSection = CodeSection.create();
    this.miscSection = MiscSection.create();
  }

  render() {
    const cardElement = document.createElement("div");
    cardElement.className =
      "card animate-in flex flex-col flex-nowrap align-content-center justify-content-start";

    if (this.name) {
      cardElement.setAttribute("name", this.name);
    }

    const animatedLineContainer = document.createElement("div");
    animatedLineContainer.className = "animated-line-container";

    cardElement.appendChild(this.header.render());
    cardElement.appendChild(animatedLineContainer);
    animatedLineContainer.appendChild(this.decorativeElement.render());
    cardElement.appendChild(this.mainSection.render());
    cardElement.appendChild(this.projectsSection.render());
    cardElement.appendChild(this.socialMediaSection.render());
    cardElement.appendChild(this.codeSection.render());
    cardElement.appendChild(this.miscSection.render());

    return cardElement;
  }
}
