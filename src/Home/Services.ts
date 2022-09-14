import { LitElement, html, css } from 'lit';
import { Data } from '../Data';

export class Services extends LitElement {
    IsRTL: unknown;
    
    createRenderRoot() {
        return this;
    }

    static get properties() {
        return {
            IsRTL: { type: String }
        };
    }

    static get styles() {
        return css
        `

        `;
    }

  render() {
    return html
    `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>
    ul {
        list-style-type:none;
    }
    </style>

    <div class="container">
        <div class="border-0">
            <div class="card-header border-5">
                <div class="row">
                    <div class="container d-flex align-items-center justify-content-center" dir=${(this.IsRTL === "true")? "rtl": "ltr"}>
                        <h1 class="fs-1 fw-bolder text-muted">
                            ${(this.IsRTL === "true")? Data.Localization.services_title.ar: Data.Localization.services_title.en}
                        </h1>
                        <span class="text-light">---</span>
                        <span class="material-icons fs-1 text-primary ">
                            school
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="container">
        <ul class="" dir=${(this.IsRTL === "true")? "rtl": "ltr"}>
            ${Data.Localization.services.map(
                element => html`
                    <li class="">
                        <service-comp color="${element.color}" IsRTL=${this.IsRTL}
                        Title=${(this.IsRTL === "true")? element.title.ar: element.title.en}                        
                        ButtonLeft_Text=${(this.IsRTL === "true")? element.buttonL.ar: element.buttonL.en}
                        ButtonRight_Text=${(this.IsRTL === "true")? element.buttonR.ar: element.buttonR.en}
                        ></service-comp>
                    </li>
                `
            )}
        </ul>
    </div>
    `;
  }
}
