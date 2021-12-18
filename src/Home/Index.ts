import { LitElement, html, css } from 'lit-element';
import { LookUp } from '../LocalizationLookUp';
import { property } from 'lit/decorators.js';


export class Index extends LitElement {

    static get properties() {
        return {

        };
    }

    constructor() {
        super();
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
        <navbar-comp></navbar-comp>
        
        `;
    }
}
