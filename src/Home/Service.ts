import { LitElement, html, css } from 'lit';
import { property } from 'lit-element';
import { Data } from '../Data';

export class Service extends LitElement {
    IsRTL: unknown;
    Color: unknown;
    Title: unknown;
    ButtonRight_Text: unknown;
    ButtonLeft_Text: unknown;

    static get properties() {
        return {
            Color: { type: String },
            IsRTL: { type: String },
            Title: { type: String },
            ButtonRight_Text: { type: String },
            ButtonLeft_Text: { type: String }
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
        .shadow3D { 
            color: white; 
            font: bold 52px Helvetica, Arial, Sans-Serif;
            text-shadow: 1px 1px #000, 
                         2px 2px #000, 
                         3px 3px #000;
            transition: all 0.12s ease-out;
         }
         .shadow3D:hover {
            position: relative; 
            top: -3px; 
            left: -3px; 
            text-shadow: 1px 1px #000, 
                         2px 2px #000, 
                         3px 3px #000, 
                         4px 4px #000, 
                         5px 5px #000, 
                         6px 6px #000;
         }
        </style>

        <div class="mb-3 border-0" dir=${(this.IsRTL === "true")? "rtl": "ltr"}>
            <div class="row ">                
                <div class="col-md-6 col-sm-12">
                    <div class="h-100 bg-${this.Color} rounded-3 p-5 shadow bg-gradient border-5 border-top-0 border-start-0 border-end-0 border-secondary">
                        <div class="">
                            <div class="card-body border-5"  dir=${(this.IsRTL === "true")? "rtl": "ltr"}>
                                <h5 class="card-title fw-bolder display-1 text-white lh-lg shadow3D">
                                    ${(String(this.Title)).split('<br>').map(line => 
                                        html` ${line} <br>`
                                    )}
                               </h5>
                               <p class="text-white fw-light fs-4">
                                    ${Data.Localization.upcoming_events[0].text.ar}
                               </p>
                            </div>
                        </div>
                        <div class="">
                            <div class="row g-4">
                                <div class="col-lg-6">
                                    <button type="button" class="btn btn-dark shadow w-100 text-white fw-bolder fs-4">${this.ButtonLeft_Text}</button>
                                </div>
                                
                                <div class="col-lg-6">
                                    <button type="button" class="btn btn-light shadow w-100 text-dark fw-bolder fs-4">${this.ButtonRight_Text}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="card bg-${this.Color} shadow bg-gradient border-5 border-top-0 border-start-0 border-end-0 border-${this.Color}  h-100">
                        <img src="./assets/1.jpg" class="w-100 h-100 rounded-2" alt="..." style="object-fit: cover; object-position: 50% 20%;" />                                                

                    </div>
                </div>
            </div>
        </div>

    `;
  }
}
