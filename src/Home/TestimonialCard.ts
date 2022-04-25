import { LitElement, html, css } from 'lit';


export class TestimonialCard  extends LitElement {

    T_content: unknown;
    T_name: unknown;
    T_job: unknown;

    static get properties() {
        return {
            T_content: { type: String },
            T_title: { type: String },
            T_job: { type: String },
        };
    }
    
    static get styles() {
        return css
        `
        .testimonial{
            margin: 0 20px 40px;
        }
        .testimonial .testimonial-content{
            padding: 35px 25px 35px 50px;
            margin-bottom: 35px;
            background: #ebf4fa;
            border: 1px solid #f0f0f0;
            position: relative;
        }
        .testimonial .testimonial-content:after{
            content: "";
            display: inline-block;
            width: 20px;
            height: 20px;
            background: #ebf4fa;
            position: absolute;
            bottom: -10px;
            left: 22px;
            transform: rotate(45deg);
        }
        .testimonial-content .testimonial-icon{
            border-radius: 4px;
            width: 50px;
            height: 45px;
            background: #0d6efd;
            text-align: center;
            font-size: 22px;
            color: #ebf4fa;
            line-height: 42px;
            position: absolute;
            top: 37px;
            left: -19px;
        }
        .testimonial-content .testimonial-icon:before{
            content: "";
            border-bottom: 16px solid #0052cc;
            border-left: 18px solid transparent;
            position: absolute;
            top: -15px;
            left: 1px;
            border-radius: 0px 2px 0px 1px;
            z-index: -1;
        }
        .testimonial .description{
            font-size: 15px;
            font-style: italic;
            color: #8a8a8a;
            line-height: 23px;
            margin: 0;
        }
        .testimonial .title{
            display: block;
            font-size: 18px;
            font-weight: 700;
            color: #525252;
            text-transform: capitalize;
            letter-spacing: 1px;
            margin: 0 0 5px 0;
        }
        .testimonial .post{
            display: block;
            font-size: 14px;
            color: #0d6efd;
        }
        `;
    }


  render() {
    return html
    `    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />    
    <div class="testimonial">
        <div class="testimonial-content">
            <div class="testimonial-icon">
                <i class="fa fa-quote-left"></i>
            </div>
            <p class="description" dir="rtl">
                ${this.T_content}
            </p>
        </div>
        <h3 class="title" dir="rtl">${this.T_name}</h3>
        <span class="post" dir="rtl">${this.T_job}</span
    </div>
    `;
  }
}


