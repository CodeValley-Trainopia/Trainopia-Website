import { LitElement, html, css } from 'lit';

export class EventJumbotron extends LitElement {
    
    createRenderRoot() {
        return this;
    }

    static get styles() {
        return css
        `
        .saturate {
            filter: saturate(3);
        }
        
        .grayscale {
            filter: grayscale(100%);
        }
        
        .contrast {
            filter: contrast(160%);
        }
        
        .brightness {
            filter: brightness(0.5);
        }
        
        .blur {
            filter: blur(3px);
        }
        
        .invert {
            filter: invert(100%);
        }
        
        .sepia {
            filter: sepia(100%);
        }
        
        .huerotate {
            filter: hue-rotate(180deg);
        }
        
        .rss.opacity {
            filter: opacity(50%);
        }
        `;
    }

    render() {
        return html
        `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">



        `;
    }
}
