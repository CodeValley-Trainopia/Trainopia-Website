import { LitElement, html, css } from 'lit';
import { property } from 'lit-element';

export class UpcomingEventFlipCard extends LitElement {
    
    @property({type: String}) IsRTL: any;


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
        <style>
        @media (min-width: 1400px) {
          .scene {
            width: 400px;
            height: 400px;
          }
        }

        @media (max-width: 1400px) and (min-width: 300px) {
          .scene {
            width: 260px;
            height: 260px;
          }
        }

        
        .FlipCard {
          width: 100%;
          height: 100%;
          transition: transform 1s;
          transform-style: preserve-3d;
          cursor: pointer;
        }
        
        .bg_transparent {
          visibility: hidden;
        }

        .FlipCard.is-flipped { 
          background:transparent;         
          transform: rotateY(180deg);
        }
        
        .FlipCard__face {
          position: absolute;
          width: 100%;
          height: 100%;
          color: white;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .FlipCard__face--front {
          background:transparent;
        }
        
        .FlipCard__face--back {
          background:transparent;
          transform: rotateY(180deg);
        }   
        </style>
        <div class="scene scene--FlipCard">
            <div class="FlipCard" @click=${this.toggle}>
                <div class="FlipCard__face FlipCard__face--front" id="front"><slot name="front"></slot></div>
                <div class="FlipCard__face FlipCard__face--back"><slot name="back"></slot></div>
            </div>
        </div>
        `;
    }

    toggle(){
        var flipCard = this.renderRoot.querySelector('.FlipCard');        
        var frontFace = this.renderRoot.querySelector('#front');
        
        if(flipCard?.classList.contains('is-flipped')) {
          setTimeout(() => {
            frontFace?.classList.toggle('bg_transparent');      
          }, 500);
          flipCard?.classList.toggle('is-flipped');
        } else {
          flipCard?.classList.toggle('is-flipped');
          frontFace?.classList.toggle('bg_transparent');                    
        }
        
        
    }

}
