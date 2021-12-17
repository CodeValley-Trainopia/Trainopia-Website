import { LitElement, html, css } from 'lit';
import { LookUp } from '../LocalizationLookUp';

export class Navbar extends LitElement {
    IsRtl: boolean;

    static get properties() {
        return {
            IsRtl: { type: Boolean }
        };
    }

    constructor() {
        super();

        this.IsRtl = false;
        // default values can be set from the constructor
        // this.dir = "rtl";
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

        <nav dir=${(this.IsRtl)? "rtl": "ltr"} style="background: #ebf4fa;" class="navbar fixed-top navbar-expand-lg fs-6 fw-bold border-bottom border-5 border-primary">
            <div class="container-fluid">
                
                <span class="material-icons fs-1 text-muted" >
               public
                </span> <a class="navbar-brand  text-primary" href="#">${LookUp.LookUpTable.title.ar}</a>
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
                            <a class="nav-link text-primary text-muted" href="./events.html">Events</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary text-muted" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary text-muted">Disabled</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-primary  text-muted" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                            </a>
                            <ul class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item fs-6 fw-bold text-primary text-muted" href="#">Action</a></li>
                                <li><a class="dropdown-item fs-6 fw-bold text-primary text-muted" href="#">Another action</a></li>
                                <li><a class="dropdown-item fs-6 fw-bold text-primary text-muted" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        `;
    }
}
