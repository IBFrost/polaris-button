import { LitElement, html, css } from "lit";

export class PolarisButton extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
      touch: { type: Boolean, reflect: true },
      dark: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        --color1: #005fa9;
        --color2: #ffffff;
        --color3: #005fa9;
        font-size: 1rem;
        text-transform: uppercase;
        line-height: 1.125rem;
        font-weight: 700;
        letter-spacing: 0.03rem;
        margin-top: 0;
        padding: 0.75rem 1rem 0.75rem 1.5rem;
        display: inline-block;
        font-family: Roboto;
        margin: 0 12px 12px 0;  
      }

      :host([dark]) .link {
        --color1: #cce9ff;
        --color2: #001e44;
        --color3: #ffffff;
      }

      :host .link {
        background-color: var(--color2);
        border: 2px solid var(--color3);
        color: var(--color1);
      }

      .link:hover,
      :host([active]) .link {
        background-color: var(--color1);
        border: 2px solid var(--color1);
        color: var(--color2);
        cursor: pointer;
      }

      /* State 3: Clicked */
      .link:focus,
      :host([touch]) .link {
        background-color: #4f637c;
        border: 2px solid #ffffff;
        color: #cce9ff;
      }

      .link {
        //text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
        padding: 12px 16px;
        border-radius: 5px;
        border-width: 2px;
        background-color: var(--color2);
        border: 2px solid var(--color3);
        color: var(--color2);
        transition: background-color 0.15s, border 0.15s, color 0.15s;
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
    return html`<a class="link" href="${this.link}"
      ><slot>${this.name}</slot></a
    >`;
  }
}
