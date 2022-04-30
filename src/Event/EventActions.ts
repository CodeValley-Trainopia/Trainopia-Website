import { LitElement, html, css } from 'lit';

export class EventActions extends LitElement {
    
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
            <div class="d-grid gap-5 d-md-flex justify-content-md-center">

                <button class="btn btn-outline-success bg-gradient btn-lg fw-bolder fs-1 border-5" type="button">Apply Now!</button>
                <button class="btn btn-outline-primary bg-gradient btn-lg fw-bolder fs-1 border-5" type="button">Contact Us!</button>
            </div>
        </div>


        `;
    }
}
