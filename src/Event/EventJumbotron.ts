import { LitElement, html, css } from 'lit';

export class EventJumbotron extends LitElement {
    
    createRenderRoot() {
        return this;
    }

    static get styles() {
        return css
        `
        .saturate {
            filter: saturate(3);
        }
        
        .grayscale {
            filter: grayscale(100%);
        }
        
        .contrast {
            filter: contrast(160%);
        }
        
        .brightness {
            filter: brightness(0.5);
        }
        
        .blur {
            filter: blur(3px);
        }
        
        .invert {
            filter: invert(100%);
        }
        
        .sepia {
            filter: sepia(100%);
        }
        
        .huerotate {
            filter: hue-rotate(180deg);
        }
        
        .rss.opacity {
            filter: opacity(50%);
        }
        `;
    }

    render() {
        return html
        `

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

        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content bg-dark">
    
                    <div class="modal-body">
                        <div class="videoWrapper">
                            <iframe src="https://www.youtube.com/embed/n13nhRymvPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>

        <div class="position-relative">

            <img src="./assets/1.jpg" class="brightness" alt="..." style="width: 100%; height: 550px; object-fit: cover; object-position: 50% 20%;" />

            <div class="container">
                <div class="row position-absolute top-50 start-0 translate-middle-y w-100">
                    <div class="col-sm-12 col-md-1">

                    </div>
                    <div class="col-sm-12 col-md-5 o2">
                        <div class="container-fluid text-wrap text-light py-5">
                            <p class="display-5 fw-bold">
                                Let’s Start from Scratch!
                            </p>
                            <p class="fs-6 fw-normal">
                                Drag and Drop coding blocks to build your own games, and animations while learning all about coding.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 o1">
                        <div class="d-flex align-items-center justify-content-center h-100">
                            <button class="bg-primary bg-gradient  btn rounded-circle" data-bs-toggle="modal" data-bs-target="#staticBackdrop">

                                    <span class="display-3 material-icons text-light">
                                        play_circle_filled
                                    </span>
                                </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        `;
    }
}
