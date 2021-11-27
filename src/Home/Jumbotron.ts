import { LitElement, html, css } from 'lit';

export class Jumbotron extends LitElement {
    
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <style>
        .brightness {
            filter: brightness(0.5);
        }
        </style>
        
        <div class="position-relative">
            <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner" style="z-index: 0;">
                    <div class="carousel-item active">
                        <img src="./assets/1.jpg" class="brightness" alt="..." style="width: 100%; height: 550px; object-fit: cover; object-position: 50% 20%;" />
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/2.jpg" class="brightness" alt="..." style="width: 100%; height: 550px; object-fit: cover; object-position: 50% 20%;" />
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/3.jpg" class="brightness" alt="..." style="width: 100%; height: 550px; object-fit: cover; object-position: 50% 20%;" />
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row position-absolute top-50 start-0 translate-middle-y w-100">
                    <div class="col-sm-0 col-md-1">

                    </div>
                    <div class="col-sm-12 col-md-5">
                        <div class="container-fluid text-wrap text-light py-5">
                            <p class="display-5 fw-bold">Custom jumbotron</p>
                            <p class="fs-6 fw-normal">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                            <button class="btn btn-outline-primary btn-lg" type="button">Example button</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        `;
    }
}
