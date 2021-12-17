import { LitElement, html, css } from 'lit';
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
        <navbar-comp IsRtl='false'></navbar-comp>

        <jumbotron-comp></jumbotron-comp>
    
        <br>
    
        <howitworks-comp></howitworks-comp>
    
        <br>
    
        <courses-comp></courses-comp>
    
        <br>
    
        <testimonial-comp></testimonial-comp>
    
        <br>
    
        <footer-comp></footer-comp>
        
        `;
    }
}
