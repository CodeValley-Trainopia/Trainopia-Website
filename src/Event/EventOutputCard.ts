import { LitElement, html, css } from 'lit';

export class EventOutputCard extends LitElement {
    
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
            @media(min-width: 1000px) {
                #cardText {
                    transform: translate(25%, -55%);
                    z-index: 2;
                    transition: 1s ease-in-out;
                }
                #cardText:hover,
                #cardImg:hover+#cardText {
                    transform: rotate(-10deg);
                }
            }
            
            @media(max-width: 1000px) {
                #cardText {
                    transform: translate(25%, -55%);
                }
            }
        </style>

        <div class="col">
            <div class="card border-0  bg-transparent">
                <img src="./assets/1.jpg" class="w-75 rounded-3" alt="..." style="object-fit: cover; object-position: 50% 20%;" />

                <div id="cardText" class="card-body bg-danger w-75 shadow bg-gradient border-bottom border-5 border-secondary text-light rounded-top mt-2">
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <ul>
                        <li>item - 01</li>
                        <li>item - 02</li>
                        <li>item - 03</li>
                        <li>item - 04</li>
                    </ul>
                </div>
            </div>
        </div>

        `;
    }
}
