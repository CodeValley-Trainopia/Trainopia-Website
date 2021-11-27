import { LitElement, html, css } from 'lit';

export class Navbar extends LitElement {
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

        <nav style="background: #ebf4fa;" class="navbar fixed-top navbar-expand-lg fs-6 fw-bold">
            <div class="container-fluid">
                <a class="navbar-brand  text-primary" href="./test.html">
                <span class="material-icons fs-1 text-muted ">
               public
                </span> <a class="navbar-brand  text-primary" href="#">Trainopia</a>
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
                            <a class="nav-link text-primary text-muted" href="#">Features</a>
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
