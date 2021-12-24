import { LitElement, html, css } from 'lit-element';
import { property } from 'lit-element';


export class Index extends LitElement {

    @property({type: String}) IsRTL: any;

    static get properties() {
        return {

        };
    }

    constructor() {
        super();
        this.IsRTL="true"
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
        <navbar-comp @click=${this.ToggleRTL} IsRTL=${this.IsRTL}></navbar-comp>
        
        <br>
        
        <jumbotron-comp IsRTL=${this.IsRTL}></jumbotron-comp>
    
        <br>
    
        <howitworks-comp IsRTL=${this.IsRTL}></howitworks-comp>
    
        <br>
    
        <courses-comp IsRTL=${this.IsRTL}></courses-comp>
    
        <br>
    
        <testimonial-comp IsRTL=${this.IsRTL}></testimonial-comp>
    
        <br>
    
        <footer-comp IsRTL=${this.IsRTL}></footer-comp>
        `;
    }

    ToggleRTL() {
        this.IsRTL = this.renderRoot.querySelector('navbar-comp')?.getAttribute("RTL")
    }
}
