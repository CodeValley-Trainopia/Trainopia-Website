import { LitElement, html, css } from 'lit';

export class Card extends LitElement {

    
    static get properties() {
        return {

        };
    }

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
        .scene {
            width: 200px;
            height: 260px;
            border: 1px solid #CCC;
            margin: 40px 0;
            perspective: 600px;
          }
          
          .NewCard {
            position: relative;
            width: 100%;
            height: 100%;
            cursor: pointer;
            transform-style: preserve-3d;
            transform-origin: center right;
            transition: transform 1s;
          }
          
          .NewCard.is-flipped {
            transform: translateX(-100%) rotateY(-180deg);
          }
          
          .NewCard__face {
            position: absolute;
            width: 100%;
            height: 100%;
            line-height: 260px;
            color: white;
            text-align: center;
            font-weight: bold;
            font-size: 40px;
            backface-visibility: hidden;
          }
          
          .NewCard__face--front {
            background: red;
          }
          
          .NewCard__face--back {
            background: blue;
            transform: rotateY(180deg);
          }
          
        </style>
        
        <div class="scene scene--NewCard">
            <div class="NewCard">
                <div class="NewCard__face NewCard__face--front">front</div>
                <div class="NewCard__face NewCard__face--back">back</div>
            </div>
        </div>
        `;
    }
}
