import { LitElement, html, css } from 'lit';
import { HowItWorksCard } from './HowItWorksCard';

customElements.define('howitworkscard-comp', HowItWorksCard);

export class HowItWorks extends LitElement {
    
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

                <div class="card border-0">
                    <div class="card-header border-5">
                        <div class="row">
                            <div class="container d-flex align-items-center justify-content-center">
                                <h1 class="fs-1 fw-bolder text-muted">How it Works!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            
            <br>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <howitworkscard-comp></howitworkscard-comp>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <howitworkscard-comp></howitworkscard-comp>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <howitworkscard-comp></howitworkscard-comp>
                </div>
            </div>
        </div>

        `;
    }
}
