import { EventJumbotron } from './Event/EventJumbotron.js';
import { Courses } from './Home/Courses.js';
import { Footer } from './Home/Footer.js';
import { HowItWorks } from './Home/HowItWorks.js';
import { Jumbotron } from './Home/Jumbotron.js';
import { Navbar } from './Home/Navbar.js';
import { Testimonial } from './Home/testimonial.js';
import { AppShell } from './AppShell.js';

customElements.define('app-shell', AppShell);

customElements.define('courses-comp', Courses);
customElements.define('howitworks-comp', HowItWorks);
customElements.define('jumbotron-comp', Jumbotron);
customElements.define('navbar-comp', Navbar);
customElements.define('footer-comp', Footer);
customElements.define('testimonial-comp', Testimonial);


customElements.define('event_jumbotron-comp', EventJumbotron);
