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
        .scene {
          width: 260px;
          height: 260px;
        }
        
        .FlipCard {
          width: 100%;
          height: 100%;
          transition: transform 1s;
          transform-style: preserve-3d;
          cursor: pointer;
        }
        
        .FlipCard.is-flipped { 
          background:white;         
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
          background:white;
        }
        
        .FlipCard__face--back {
          background:white;
          transform: rotateY(180deg);
        }   
        </style>
        <div class="scene scene--FlipCard">
            <div class="FlipCard" @click=${this.toggle}>
                <div class="FlipCard__face FlipCard__face--front"><slot name="front"></slot></div>
                <div class="FlipCard__face FlipCard__face--back"><slot name="back"></slot></div>
            </div>
        </div>
        `;
    }

    toggle(){
        var FlipCard = this.renderRoot.querySelector('.FlipCard');        
        FlipCard?.classList.toggle('is-flipped');
    }

}
