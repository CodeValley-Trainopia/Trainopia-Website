import { LitElement, html, css } from 'lit';

export class Form extends LitElement {


    static get styles() {
    return css
    `

    `;
  }

  render() {
    return html
    `


    <style> 


    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <div class="container border-bottom border-5 border-primary bg-light pt-4 px-4 my-5">
        <form>
            <!-- Name input -->
            <div class="form-outline mb-4">
              <input type="text" id="form4Example1" class="form-control" />
              <label class="form-label" for="form4Example1">Name</label>
            </div>
          
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="form4Example2" class="form-control" />
              <label class="form-label" for="form4Example2">Email address</label>
            </div>
          
            <!-- Message input -->
            <div class="form-outline mb-4">
              <textarea class="form-control" id="form4Example3" rows="4"></textarea>
              <label class="form-label" for="form4Example3">Message</label>
            </div>
                   
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
        </form>
    </div>
    `;
  }
}
