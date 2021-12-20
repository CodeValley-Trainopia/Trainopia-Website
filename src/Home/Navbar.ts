import { LitElement, html, css } from 'lit';
import { LookUp } from '../LocalizationLookUp';
import { property } from 'lit-element';

export class Navbar extends LitElement {
    @property({type: String}) IsRTL: any;

    static get properties() {
        return {
        };
    }

    constructor() {
        super();

        // default values can be set from the constructor
    }

    createRenderRoot() {
        return this;
    }

    static get styles() {
        return css
        `
        @media(min-width: 1000px) {
            :host(.dropdown-menu) {
                background: #ebf4fa;
            }
        }

        @media(max-width: 1000px) {
            :host(.dropdown-menu) {
                background: transparent;
                border: transparent;
            }
        }
        `;
    }

    render() {
        return html
        `

        <style>
        @media(min-width: 1000px) {
            navbar-comp .dropdown-menu {
                background: #ebf4fa;
            }
        }
        
        @media(max-width: 1000px) {
            navbar-comp .dropdown-menu {
                background: transparent;
                border: transparent;
            }
        }
        </style>

        <nav dir=${(this.IsRTL === "true")? "rtl": "ltr"} style="background: #ebf4fa;" class="navbar fixed-top navbar-expand-lg fs-6 fw-bold border-bottom border-5 border-primary">
            <div class="container-fluid">
                
                <span class="material-icons fs-1 text-muted" >
               public
                </span> <a class="navbar-brand  text-primary" href="#">${(this.IsRTL === "true")? LookUp.LookUpTable.title.ar: LookUp.LookUpTable.title.en}</a>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-primary"></i>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary text-muted" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary text-muted">Contact Us</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-primary  text-muted" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Events
                            </a>
                            <ul class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item fs-6 fw-bold text-primary text-muted" href="#">Event-1</a></li>
                                <li><a class="dropdown-item fs-6 fw-bold text-primary text-muted" href="#">Event-2</a></li>
                                <li><a class="dropdown-item fs-6 fw-bold text-primary text-muted" href="#">Event-3</a></li>
                            </ul>
                        </li>
                    </ul>
                    <button class="btn" type="button" @click=${this.changeIsRTL}>
                        <span class="material-icons fs-1 text-muted">
                        language
                        </span>
                    </button>
                </div>

                
            </div>
        </nav>

        <jumbotron-comp IsRTL=${(this.IsRTL === "true")? "true": "false"}></jumbotron-comp>
    
        <br>
    
        <howitworks-comp IsRTL=${(this.IsRTL === "true")? "true": "false"}></howitworks-comp>
    
        <br>
    
        <courses-comp IsRTL=${(this.IsRTL === "true")? "true": "false"}></courses-comp>
    
        <br>
    
        <testimonial-comp IsRTL=${(this.IsRTL === "true")? "true": "false"}></testimonial-comp>
    
        <br>
    
        <footer-comp IsRTL=${(this.IsRTL === "true")? "true": "false"}></footer-comp>
        `;
    }

    changeIsRTL(){
        console.log("hello");
        this.IsRTL = (this.IsRTL === "true")? "false": "true";
    }
}
