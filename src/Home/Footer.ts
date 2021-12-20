import { LitElement, html, css } from 'lit';

export class Footer extends LitElement {

  static get styles() {
    return css
    `
    :host {
        font-family: Rubik, Arial, sans-serif;
        font-weight: 400;
        font-size: 1rem;
        overflow-x: hidden;
        color: #607289;
    }
    
    h5 {
        font-size: 1rem;
        line-height: 1.375;
        font-family: Rubik, Arial, sans-serif;
        font-weight: 500;
        color: #030929;
    }
    
    a {
        color: #818494;
        font-weight: 500;
        text-decoration: none;
        background-color: transparent;
    }
    
    a:hover {
        color: #007bff;
        text-decoration: none;
    }
    
    footer {
        background: #ebf4fa;
    }
    `;
  }

  render() {
    return html
    `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <footer class="border-top border-5 border-primary">
        <div class="container pt-5 border-bottom">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                    <h5 class="mb-4 font-weight-bold text-uppercase">Company</h5>
                    <ul class="list-group">
                        <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                            <a href="../about-naologic.html"></i>About</a>
                        </li>
                        <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                            <a href="https://blog.naologic.com"></i>Blog</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                    <h5 class="mb-4 font-weight-bold text-uppercase">Connect</h5>
                    <ul class="list-group">
                        <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                            <a href="https://www.facebook.com/naologic/" target="_blank"><i class="fa fa-facebook mr-1"></i> Facebook</a>
                        </li>
                        <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                            <a href="https://www.youtube.com/channel/UCtHmuf2oQLnksokfz8GIbKA" target="_blank"><i class="fa fa-youtube mr-1"></i> YouTube</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-12">
                <div class="py-4 d-flex justify-content-center">
                    <div class="d-flex flex-column bd-highlight mb-3">
                        <div class="p-2 bd-highlight">CodeValley @ 2021</div>
                    </div>    
                    </div>
                </div>
            </div>
        </div>
    </footer>

    `;
  }
}
