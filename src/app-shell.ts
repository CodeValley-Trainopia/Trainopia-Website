import { EventJumbotron } from './Event/EventJumbotron.js';
import { Courses } from './Home/Courses.js';
import { Footer } from './Shared/Footer.js';
import { HowItWorks } from './Home/HowItWorks.js';
import { Jumbotron } from './Home/Jumbotron.js';
import { Navbar } from './Shared/Navbar.js';
import { Testimonial } from './Home/testimonial.js';
import { AppShell } from './AppShell.js';
import { Index} from './Home/Index.js';
import { FlipCard } from './Event/FlipCard.js';
import { Form } from './Contact/Form.js';

customElements.define('app-shell', AppShell);

customElements.define('index-maincomp', Index);
customElements.define('courses-comp', Courses);
customElements.define('howitworks-comp', HowItWorks);
customElements.define('jumbotron-comp', Jumbotron);
customElements.define('navbar-comp', Navbar);
customElements.define('footer-comp', Footer);
customElements.define('testimonial-comp', Testimonial);

customElements.define('event_jumbotron-comp', EventJumbotron);
customElements.define('event_flipcard-comp', FlipCard);

customElements.define('contact_form-comp', Form);
