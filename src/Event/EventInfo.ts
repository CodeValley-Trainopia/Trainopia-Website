import { LitElement, html, css } from 'lit';

export class EventInfo extends LitElement {
    
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

        <div class="container">
            <div class="row ">
                <div class="col-md-6 col-sm-12 ">
                    <div class="card-body border-5">
                        <h5 class="card-title fw-thin display-4 text-primary">Caption</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="row my-5">
                            <div class="col-lg-6">
                                <button type="button" class="btn btn-primary shadow w-100 btn-lg">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="card bg-primary shadow bg-gradient h-100">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="container my-4">
                                    <div class="card bg-transparent border-0">
                                        <div class="card-header bg-light border-5 border-secondary">
                                            <div class="row">
                                                <div class="container d-flex align-items-center justify-content-center">
                                                    <h1 class="fs-1 fw-bolder text-muted">Service Details</h1><span class="text-light">---</span>
                                                    <span class="material-icons fs-1 text-muted ">
                                                        school
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="container mb-4">
                                    <div class="row g-0  border-bottom border-5 border-secondary">
                                        <div class="col-6">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item py-4">An item</li>
                                                <li class="list-group-item py-4">A second item</li>
                                                <li class="list-group-item py-4">A third item</li>
                                                <li class="list-group-item py-4">A fourth item</li>
                                                <li class="list-group-item py-4 ">And a fifth one</li>
                                            </ul>
                                        </div>
                                        <div class="col-6">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item py-4">An item</li>
                                                <li class="list-group-item py-4">A second item</li>
                                                <li class="list-group-item py-4">A third item</li>
                                                <li class="list-group-item py-4">A fourth item</li>
                                                <li class="list-group-item py-4 ">And a fifth one</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .c_card {
                transition: 1s ease-in-out;
            }
            
            .c_card:hover {
                z-index: 2;
                transform: scale(1.2);
            }
        </style>

        <br>

        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-2">
                    <p class="fs-1 fw-bold">Benefits</p>
                </div>
            </div>
            <br>
            <div class="row gap-5 align-items-center justify-content-center">
                <div class="col-md-3 col-sm-12 card shadow bg-danger bg-gradient text-light c_card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 card shadow bg-success bg-gradient text-light c_card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-12 card shadow bg-primary bg-gradient text-light c_card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>

        `;
    }
}
