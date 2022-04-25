import { LitElement, html, css } from 'lit';
import { HowItWorksCard } from './HowItWorksCard';
import { LookUp } from '../LocalizationLookUp';

customElements.define('howitworkscard-comp', HowItWorksCard);

export class HowItWorks extends LitElement {
    IsRTL: unknown;

    static get properties() {
        return {
            IsRTL: { type: String }
        };
    }

    // createRenderRoot() {
    //     return this;
    // }

    static get styles() {
        return css
        `
       
        `;
    }

    render() {
        return html
        `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        

        <div class="container">

                <div class="border-0" dir=${(this.IsRTL === "true")? "rtl": "ltr"}>
                    <div class="card-header border-5">
                        <div class="row">
                            <div class="container d-flex align-items-center justify-content-center">
                                <h1 class="fs-1 fw-bolder text-muted">${(this.IsRTL === "true")? LookUp.LookUpTable.events_title.ar: LookUp.LookUpTable.events_title.en}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            
            <br>
            <div class="row">
                ${LookUp.LookUpTable.events.map(
                    element => html`
                    <div class="col-lg-3 col-md-4 col-sm-12 d-flex align-items-center justify-content-center">
                        <howitworkscard-comp IsRTL=${(this.IsRTL === "true")? "true": "false"} 
                        Header=${(this.IsRTL === "true")? element.event_card_header.ar: element.event_card_header.en}
                        Title=${(this.IsRTL === "true")? element.event_card_title.ar: element.event_card_title.en}
                        Text=${(this.IsRTL === "true")? element.event_card_text.ar: element.event_card_text.en}
                        ></howitworkscard-comp>
                    </div>                    
                    `
                )}            
            </div>
        </div>

        `;
    }
}
