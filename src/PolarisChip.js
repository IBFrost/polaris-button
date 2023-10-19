import { LitElement, html, css } from "lit";

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 12px 12px 0;
      }

      .link:hover,
      :host([active]) .link {
        background-color: #e4e5e7;
        border: 2px solid #e4e5e7;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
      }
      .link {
        font-weight: bold;
        text-decoration: none;
        padding: 8px 4px;
        border: 1px solid #444;
        color: #444;
        font-size: 16px;
      }
    `;
  }

  constructor() {
    super();
    this.name = "Sportsball";
    this.link =
      "https://www.psu.edu/news/academics/story/penn-state-rises-world-university-rankings-places-20th-among-us-publics/";
  }

  render() {
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></a>`;
  }
}
