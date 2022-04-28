import { LitElement, html, css } from 'lit';
import { Data } from '../Data';


export class UpcomingEvents extends LitElement {
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
        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <div class="container">

            <div class="border-0" dir=${(this.IsRTL === "true")? "rtl": "ltr"}>
                <div class="card-header border-5">
                    <div class="row">
                        <div class="container d-flex align-items-center justify-content-center">
                            <h1 class="fs-1 fw-bolder text-muted">
                                ${(this.IsRTL === "true")? Data.Localization.upcoming_events_title.ar: Data.Localization.upcoming_events_title.en}                               
                            </h1>
                            <span class="text-light">---</span>
                            <span class="material-symbols-outlined fs-1 text-danger">
                                event
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <br>
            <div class="row">
                ${Data.Localization.upcoming_events.map(
                    element => html`
                    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                        <upcoming_event_card-comp IsRTL=${(this.IsRTL === "true")? "true": "false"} 
                        Header=${(this.IsRTL === "true")? element.header.ar: element.header.en}
                        Title=${(this.IsRTL === "true")? element.title.ar: element.title.en}
                        Text=${(this.IsRTL === "true")? element.text.ar: element.text.en}
                        ></upcoming_event_card-comp>
                    </div>                    
                    `
                )}            
            </div>
        </div>

        `;
    }
}
