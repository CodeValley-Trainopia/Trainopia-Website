import { LitElement, html, css } from "lit"
import { Data } from "../Data"
import { property } from "lit-element"

export class Navbar extends LitElement {
    @property({ type: String }) IsRTL: any
    @property({ type: String }) First: any

    static get properties() {
        return {}
    }

    constructor() {
        super()
        // default values can be set from the constructor
        this.setAttribute("First", "False")
    }

    createRenderRoot() {
        return this
    }

    static get styles() {
        return css`
            @media (min-width: 1000px) {
                :host(.dropdown-menu) {
                    background: #ebf4fa;
                }
            }

            @media (max-width: 1000px) {
                :host(.dropdown-menu) {
                    background: transparent;
                    border: transparent;
                }
            }
        `
    }

    render() {
        return html`

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
        nav {
            background: #ebf4fa;
        }

        </style>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <nav dir=${
            this.IsRTL === "true" ? "rtl" : "ltr"
        }  class="navbar fixed-top navbar-expand-lg fs-6 fw-bold border-bottom border-5 border-primary">
            <div class="container-fluid">
                
                <span class="material-icons fs-1 text-muted" >
               public
                </span> <a class="navbar-brand  text-primary" href="#">${
                    this.IsRTL === "true"
                        ? Data.Localization.menu_title.ar
                        : Data.Localization.menu_title.en
                }</a>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-primary"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="./index.html">${
                                this.IsRTL === "true"
                                    ? Data.Localization.menu_home.ar
                                    : Data.Localization.menu_home.en
                            }</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary text-muted" href="./gallery.html">${
                                this.IsRTL === "true"
                                    ? Data.Localization.menu_gallery.ar
                                    : Data.Localization.menu_gallery.en
                            }</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary text-muted" href="aboutus.html">${
                                this.IsRTL === "true"
                                    ? Data.Localization.menu_about.ar
                                    : Data.Localization.menu_about.en
                            }</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary text-muted" href="contactus.html">${
                                this.IsRTL === "true"
                                    ? Data.Localization.menu_contact.ar
                                    : Data.Localization.menu_contact.en
                            }</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary text-muted" href="services.html">${
                                this.IsRTL === "true"
                                    ? Data.Localization.menu_services.ar
                                    : Data.Localization.menu_services.en
                            }</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-primary  text-muted" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ${
                                this.IsRTL === "true"
                                    ? Data.Localization.menu_events.ar
                                    : Data.Localization.menu_events.en
                            }
                            </a>
                            <ul class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">                                
                                <li><a class="dropdown-item fs-6 fw-bold text-primary text-muted" href="./event.html">Event-1</a></li>
                                <li><a class="dropdown-item fs-6 fw-bold text-primary text-muted" href="./event.html">Event-2</a></li>
                                <li><a class="dropdown-item fs-6 fw-bold text-primary text-muted" href="./event.html">Event-3</a></li>
                            </ul>
                        </li>
                    </ul>
                    

                    
                </div>                
            </div>
        </nav>


        `
    }

    changeIsRTL() {
        this.setAttribute("First", "True")
        this.IsRTL = this.IsRTL === "true" ? "false" : "true"
        this.setAttribute("RTL", this.IsRTL)
        localStorage.setItem("RTL", this.IsRTL)
    }
}

/*
<button class="btn" type="button" @click=${this.changeIsRTL}>
    <span class="material-icons fs-1 text-muted">
    language
    </span>
</button>
*/
