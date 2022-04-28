import { AppShell } from './AppShell.js';
import { Index} from './Home/Index.js';
import { Navbar } from './Shared/Navbar.js';
import { Footer } from './Shared/Footer.js';
import { Jumbotron } from './Home/Jumbotron.js';
import { Testimonial } from './Home/testimonial.js';
import { Form } from './Contact/Form.js';
import { Service } from './Home/Service';
import { Services } from './Home/Services.js';
import { EventJumbotron } from './Event/EventJumbotron.js';
import { UpcomingEventCard } from './Event/UpcomingEventCard.js';
import { UpcomingEvents } from './Event/UpcomingEvents.js';
import { UpcomingEventFlipCard } from './Event/UpcomingEventFlipCard.js';

customElements.define('app-shell', AppShell);

customElements.define('index-comp', Index);

customElements.define('service-comp', Service);
customElements.define('services-comp', Services);
customElements.define('jumbotron-comp', Jumbotron);
customElements.define('navbar-comp', Navbar);
customElements.define('footer-comp', Footer);
customElements.define('testimonial-comp', Testimonial);

customElements.define('event_jumbotron-comp', EventJumbotron);
customElements.define('upcoming_event_card-comp', UpcomingEventCard);
customElements.define('upcoming_event_flip_card-comp', UpcomingEventFlipCard);
customElements.define('upcoming_events-comp', UpcomingEvents);

customElements.define('contact_form-comp', Form);
