import { LitElement, html, css } from "lit";

export class PolarisButton extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
      clicked: { type: Boolean, reflect: true },
      darkmode: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 12px 12px 0;
      }

      .link:hover,
      :host([darkmode][active]) .link {
        background-color: #cce9ff;
        border: 2px solid #cce9ff;
        color: #001e44;
      }

      /*   
      :host

      .link:active,
      .link.darkmode,
      :host([active] and [darkmode]) .link {
        background-color: #cce9ff;
        border: 2px solid #cce9ff;
        color: #001e44;
      }

      .link:darkmode, .link.darkmode
      :host([darkmode]){
        background-color: #001e44;
        border: 2px solid #ffffff;
        color: #cce9ff;
      }
*/
      .link:focus,
      :host([clicked]) .link {
        background-color: #4f637c;
        border: 2px solid #ffffff;
        color: #cce9ff;
      }

      .link,
      :host([darkmode]) .link {
        background-color: #001e44;
        border: 2px solid #ffffff;
        color: #cce9ff;
      }
      .link:hover,
      :host(:not([darkmode])[active]) .link {
        background-color: #005fa9;
        border: 2px solid #005fa9;
        color: #ffffff;
        border-radius: 5px;
        cursor: pointer;
      }

      .link {
        font-weight: bold;
        text-decoration: none;
        padding: 8px 4px;
        margin: 10px;
        font-size: 16px;
        border-radius: 5px;
        border-width: 2px;
        background-color: #ffffff;
        border: 2px solid #005fa9;
        color: #005fa9;
      }

      //@supports (darkmode: true) {
      //  .link:hover,
      //  :host([active]) {
      //    background-color: #001e44;
      //    border: 2px solid #ffffff;
      //    color: #cce9ff;
      //  }
      //  .link {
      //    background-color: #cce9ff;
      //    border: 2px solid #cce9ff;
      //    color: #001e44;
      //  }
      //}
    `;
  }

  constructor() {
    super();
    this.name = "Sportsball";
    this.link =
      "https://www.psu.edu/news/academics/story/penn-state-rises-world-university-rankings-places-20th-among-us-publics/";
  }

  render() {
    return html`<a class="link" href="${this.link}"
      ><slot>${this.name}</slot></a
    >`;
  }
}
