import { LitElement, html, css } from 'lit';
import { property } from 'lit-element';

export class FlipCard extends LitElement {
    
    @property({type: String}) IsRTL: any;


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
        <style>
        body { font-family: sans-serif; }

        .scene {
          width: 200px;
          height: 260px;
          border: 1px solid #CCC;
          margin: 40px 0;
          perspective: 600px;
        }
        
        .FlipCard {
          width: 100%;
          height: 100%;
          transition: transform 1s;
          transform-style: preserve-3d;
          cursor: pointer;
          position: relative;
        }
        
        .FlipCard.is-flipped {
          transform: rotateY(180deg);
        }
        
        .FlipCard__face {
          position: absolute;
          width: 100%;
          height: 100%;
          line-height: 260px;
          color: white;
          text-align: center;
          font-weight: bold;
          font-size: 40px;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .FlipCard__face--front {
          background: red;
        }
        
        .FlipCard__face--back {
          background: blue;
          transform: rotateY(180deg);
        }   
        </style>
        <div class="scene scene--FlipCard">
            <div class="FlipCard" @click=${this.toggle}>
                <div class="FlipCard__face FlipCard__face--front">front</div>
                <div class="FlipCard__face FlipCard__face--back">back</div>
            </div>
        </div>
      <p>Click FlipCard to flip.</p>

        `;
    }

    toggle(){
        var FlipCard = this.renderRoot.querySelector('.FlipCard');        
        FlipCard?.classList.toggle('is-flipped');
    }

}
