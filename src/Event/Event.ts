import { LitElement, html, css } from 'lit-element';
import { property } from 'lit-element';


export class Event extends LitElement {

    @property({type: String}) IsRTL: any;

    static get properties() {
        return {
        };
    }

    constructor() {
        super();
        this.IsRTL="true";
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
        <style>
            .brightness {
                filter: brightness(0.5);
            }
            
            @media(min-width: 1000px) {
                .o1 {
                    order: 2;
                }
                .o2 {
                    order: 1;
                }
            }
            
            @media(max-width: 760px) {
                .o1 {
                    order: 1;
                }
                .o2 {
                    order: 2;
                }
            }

        </style>


        <navbar-comp IsRTL=${this.IsRTL}></navbar-comp>
        
        <br>

        <event_jumbotron-comp></event_jumbotron-comp>
        
        
        <br>
        <br>
        <br>

        <event_info-comp></event_info-comp>
        

        <br>
        <br>
        <br>

        <event_output-comp></event_output-comp>
   
        <br>
        
        <event_actions-comp></event_actions-comp>
        
        <br>
        <br>
        <br>

        <footer-comp IsRTL=${this.IsRTL}></footer-comp>
        `;
    }
}
