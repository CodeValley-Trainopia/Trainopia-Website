import { LitElement, html, css } from 'lit';

export class HowItWorksCard extends LitElement {
    
    // createRenderRoot() {
    //     return this;
    // }

    static get styles() {
        return css
        `
       

       
        `;
    }

    render() {
        return html
        `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <style>
        .inner-card img {
            transition: 1s ease-in-out;
        }
        
        .inner-card img:hover {
            
            transform: scale(1.5);
        }
        </style>
        
        <div class="card bg-transparent border-0 p-2" style="max-width: 18rem;">
            <div class="card-header border-5 mb-3">Header</div>
            
            <div class="card mb-3 border-0 bg-transparent inner-card">
                
                <img src="./assets/1.jpg" class="w-100 h-50 rounded-3" alt="..." style="object-fit: cover; object-position: 50% 20%;" />
                
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>  
        `;
    }
}
