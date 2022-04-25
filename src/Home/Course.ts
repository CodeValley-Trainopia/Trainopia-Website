import { LitElement, html, css } from 'lit';
import { property } from 'lit-element';

export class Course extends LitElement {
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


        <div class="mb-3 border-0" dir=${(this.IsRTL === "true")? "rtl": "ltr"}>
            <div class="row ">                
                <div class="col-md-6 col-sm-12">
                    <div class="card-body border-5"  dir=${(this.IsRTL === "true")? "rtl": "ltr"}>
                        <h5 class="card-title fw-thin display-1 text-${this.Color}">${this.Title}</h5>
                        <div class="row g-4">
                            <div class="col-lg-6">
                                <button type="button" class="btn btn-${this.Color} shadow w-100">${this.ButtonLeft_Text}</button>
                            </div>

                            <div class="col-lg-6">
                                <button type="button" class="btn btn-outline-${this.Color} shadow w-100">${this.ButtonRight_Text}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="card bg-${this.Color} shadow bg-gradient border-5 border-top-0 border-start-0 border-end-0 border-secondary h-100">
                    </div>
                </div>
            </div>
        </div>

    `;
  }
}
