import { LitElement, html, css } from 'lit';
import { TestimonialCard } from './TestimonialCard';
import { LookUp } from '../LocalizationLookUp';

customElements.define('testimonial-card', TestimonialCard);

export class Testimonial  extends LitElement {

    IsRTL: unknown;

    static get properties() {
        return {
            IsRTL: { type: String }
        };
    }
    
    createRenderRoot() {
        return this;
    }

    static get styles() {
        return css`
        .demo {
            background: #ebf4fa; 
        }
        
        .owl-theme .owl-controls{
            margin-top: 20px;
        }
        .owl-theme .owl-controls .owl-page span{
            background: #ccc;
            opacity: 1;
            transition: all 0.4s ease 0s;
        }
        .owl-theme .owl-controls .owl-page.active span,
        .owl-theme .owl-controls.clickable .owl-page:hover span{
            background: #ff4242;
        }
        `;
    }


  render() {
    return html
    `    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />    

    <div class="demo">
        <div class="container">
            <div class="border-0">
                <div class="card-header border-5">
                    <div class="row">
                        <div class="container d-flex align-items-center justify-content-center">
                            <h1 class="fs-1 fw-bolder text-muted">${LookUp.LookUpTable.testimonials_title.ar}</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <br>

            <div class="row">
                <div class="col-md-12">
                    <div id="testimonial-slider" class="owl-carousel">
                        ${LookUp.LookUpTable.testimonials.map(
                            element => html`
                            <testimonial-card T_name=${element.name} T_content=${element.content} T_job=${element.job}></testimonial-card>
                            `
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  }
}
