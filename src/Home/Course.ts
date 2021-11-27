import { LitElement, html, css } from 'lit';

export class Course extends LitElement {
    color: unknown;

    static get properties() {
        return {
            color: { type: String }
        };
    }

    static get styles() {
        return css
        `
        
        `;
    }

  render() {
    return html
    `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


        <div class="card mb-3 border-0">
            <div class="row ">
                <div class="col-md-6 col-sm-12">
                    <div class="card bg-${this.color} shadow bg-gradient border-5 border-top-0 border-start-0 border-end-0 border-secondary h-100">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 ">
                    <div class="card-body border-5">
                        <h5 class="card-title fw-thin display-1 text-${this.color}">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="row g-4">
                            <div class="col-lg-6">
                                <button type="button" class="btn btn-${this.color} shadow w-100">Primary</button>
                            </div>

                            <div class="col-lg-6">
                                <button type="button" class="btn btn-outline-${this.color} shadow w-100">Primary</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    `;
  }
}
