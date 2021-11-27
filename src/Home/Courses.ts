import { LitElement, html, css } from 'lit';
import { Course } from './Course';

customElements.define('course-comp', Course);
export class Courses extends LitElement {

    static get styles() {
        return css
        `
        
        `;
    }

  render() {
    return html
    `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <div class="container">
        <div class="card border-0">
            <div class="card-header border-5">
                <div class="row">
                    <div class="container d-flex align-items-center justify-content-center">
                        <h1 class="fs-1 fw-bolder text-muted">Trainopia Courses</h1><span class="text-light">---</span>
                        <span class="material-icons fs-1 text-muted ">
                            school
                            </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="container">
        <ul class="list-group list-group-flush">

            <li class="list-group-item ">
                <course-comp color="primary"></course-comp>
            </li>
            <li class="list-group-item ">
                <course-comp color="success"></course-comp>
            </li>
            <li class="list-group-item ">
                <course-comp color="info"></course-comp>
            </li>
            <li class="list-group-item ">
            <course-comp color="warning"></course-comp>
        </li>
        </ul>
    </div>
    `;
  }
}
