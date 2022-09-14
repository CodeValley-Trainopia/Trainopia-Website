import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';


export class Index extends LitElement {

    @property({type: String}) IsRTL: any;

    First;

    static get properties() {
        return {
            First : { type: Boolean }
        };
    }

    constructor() {
        super();
        this.IsRTL="true";
        this.First = false;
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
        
        
        <style>
        .videoWrapper {
            position: relative;
            padding-bottom: 56.25%;
            /* 16:9 */
            padding-top: 25px;
            height: 0;
        }
        
        .videoWrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        </style>

        <div class="container-fluid border border-5 border-primary w-75 shadow" style="padding-right: 0px; padding-left: 0px;">
            <div class="videoWrapper">
                <iframe width="840" height="345" src="https://www.youtube.com/embed/n13nhRymvPQ?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <br>
        
        <upcoming_events-comp IsRTL=${this.IsRTL}></upcoming_events-comp>
    
        <br>
    
        <services-comp IsRTL=${this.IsRTL}></services-comp>
    
        <br>
    
        <testimonial-comp IsRTL=${this.IsRTL}></testimonial-comp>
    
        <br>
    
        <footer-comp IsRTL=${this.IsRTL}></footer-comp>
        `;
    }

    ToggleRTL() {
        if(this.renderRoot.querySelector('navbar-comp')?.getAttribute("First") == "False") return;

        this.IsRTL = this.renderRoot.querySelector('navbar-comp')?.getAttribute("RTL")
    }
}
