import { LitElement, html, css } from 'lit';
import { LookUp } from '../LocalizationLookUp';

export class HowItWorksCard extends LitElement {
    IsRTL: unknown;
    Header: unknown;
    Title: unknown;
    Text: unknown;
    
    static get properties() {
        return {
            IsRTL: { type: String },
            Header: { type: String },
            Title: { type: String },
            Text: { type: String }
        };
    }

    createRenderRoot() {
        return this;
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

        </style>
        
        <div class="card  border-2 border-primary p-2 text-primary" style="max-width: 18rem;">
            <div class="card-header border-5 mb-3" dir=${(this.IsRTL === "true")? "rtl": "ltr"}>${this.Header}</div>

            <event_flipcard-comp>
                <div slot="front"> 
                    <div class="card border-2 border-primary">
                        <img src="./assets/1.jpg" class="w-100 h-50 rounded-3" alt="..." style="object-fit: cover; object-position: 50% 20%;" />
                            
                        <div class="card-body" dir=${(this.IsRTL === "true")? "rtl": "ltr"}>
                            <h5 class="card-title">${this.Title}</h5>
                            <p class="card-text">${this.Text}</p>
                        </div>
                    </div>
                </div>
                <div slot="back"> 
                    <div class="card border-2 border-primary">
                        <img src="./assets/1.jpg" class="w-100 h-50 rounded-3" alt="..." style="object-fit: cover; object-position: 50% 20%;" />
                            
                        <div class="card-body" dir=${(this.IsRTL === "true")? "rtl": "ltr"}>
                            <h5 class="card-title">${this.Title}</h5>
                            <p class="card-text">${this.Text}</p>
                        </div>
                    </div>
                </div>
            </event_flipcard-comp>
                
        </div>  
        `;
    }
}
