import { LitElement, html, css } from 'lit';
import { Data } from '../Data';

export class EventOutput extends LitElement {
    
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
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-3">
                    <p class="fs-1 fw-bold">Sample Projects</p>
                </div>
            </div>
            <br>
            <div class="row gap-5 align-items-center justify-content-center">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    ${Data.Localization.services.map(
                        element => html`
                            
                            <event_output_card-comp></event_output_card-comp>
                            
                        `
                    )}
                </div>
            </div>
        </div>
        `;
    }
}
