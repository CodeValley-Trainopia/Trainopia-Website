import { LitElement, html, css } from 'lit';
import { Course } from './Course';
import { LookUp } from '../LocalizationLookUp';

customElements.define('course-comp', Course);
export class Courses extends LitElement {
    IsRTL: unknown;
    
    createRenderRoot() {
        return this;
    }

    static get properties() {
        return {
            IsRTL: { type: String }
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
    <div class="container">
        <div class="card border-0">
            <div class="card-header border-5">
                <div class="row">
                    <div class="container d-flex align-items-center justify-content-center" dir=${(this.IsRTL === "true")? "rtl": "ltr"}>
                        <h1 class="fs-1 fw-bolder text-muted">${(this.IsRTL === "true")? LookUp.LookUpTable.courses_title.ar: LookUp.LookUpTable.courses_title.en}</h1><span class="text-light">---</span>
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
        <ul class="list-group list-group-flush" dir=${(this.IsRTL === "true")? "rtl": "ltr"}>

            <li class="list-group-item">
                <course-comp color="primary" IsRTL=${this.IsRTL}
                Title=${(this.IsRTL === "true")? LookUp.LookUpTable.course_1.title.ar: LookUp.LookUpTable.course_1.title.en}
                Text=${(this.IsRTL === "true")? LookUp.LookUpTable.course_1.text.ar: LookUp.LookUpTable.course_1.text.en}
                ButtonLeft_Text=${(this.IsRTL === "true")? LookUp.LookUpTable.course_1.buttonL.ar: LookUp.LookUpTable.course_1.buttonL.en}
                ButtonRight_Text=${(this.IsRTL === "true")? LookUp.LookUpTable.course_1.buttonR.ar: LookUp.LookUpTable.course_1.buttonR.en}
                ></course-comp>
            </li>
            <li class="list-group-item">
                <course-comp color="success" IsRTL=${this.IsRTL}
                Title=${(this.IsRTL === "true")? LookUp.LookUpTable.course_2.title.ar: LookUp.LookUpTable.course_2.title.en}
                Text=${(this.IsRTL === "true")? LookUp.LookUpTable.course_2.text.ar: LookUp.LookUpTable.course_2.text.en}
                ButtonLeft_Text=${(this.IsRTL === "true")? LookUp.LookUpTable.course_2.buttonL.ar: LookUp.LookUpTable.course_2.buttonL.en}
                ButtonRight_Text=${(this.IsRTL === "true")? LookUp.LookUpTable.course_2.buttonR.ar: LookUp.LookUpTable.course_2.buttonR.en}
                ></course-comp>
            </li>
            <li class="list-group-item">
                <course-comp color="info" IsRTL=${this.IsRTL}
                Title=${(this.IsRTL === "true")? LookUp.LookUpTable.course_3.title.ar: LookUp.LookUpTable.course_3.title.en}
                Text=${(this.IsRTL === "true")? LookUp.LookUpTable.course_3.text.ar: LookUp.LookUpTable.course_3.text.en}
                ButtonLeft_Text=${(this.IsRTL === "true")? LookUp.LookUpTable.course_3.buttonL.ar: LookUp.LookUpTable.course_3.buttonL.en}
                ButtonRight_Text=${(this.IsRTL === "true")? LookUp.LookUpTable.course_3.buttonR.ar: LookUp.LookUpTable.course_3.buttonR.en}
                ></course-comp>
            </li>
            <li class="list-group-item">
            <course-comp color="warning" IsRTL=${this.IsRTL}
                Title=${(this.IsRTL === "true")? LookUp.LookUpTable.course_4.title.ar: LookUp.LookUpTable.course_4.title.en}
                Text=${(this.IsRTL === "true")? LookUp.LookUpTable.course_4.text.ar: LookUp.LookUpTable.course_4.text.en}
                ButtonLeft_Text=${(this.IsRTL === "true")? LookUp.LookUpTable.course_4.buttonL.ar: LookUp.LookUpTable.course_4.buttonL.en}
                ButtonRight_Text=${(this.IsRTL === "true")? LookUp.LookUpTable.course_4.buttonR.ar: LookUp.LookUpTable.course_4.buttonR.en}
                ></course-comp>
        </li>
        </ul>
    </div>
    `;
  }
}
