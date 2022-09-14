import { AppShell } from './AppShell.js';

import { Navbar } from './Shared/Navbar.js';
import { Footer } from './Shared/Footer.js';

import { Index } from './Home/Index.js';
import { Service } from './Home/Service';
import { Services } from './Home/Services.js';
import { Jumbotron } from './Home/Jumbotron.js';
import { Testimonial } from './Home/Testimonial.js';
import { UpcomingEventCard } from './Home/UpcomingEventCard.js';
import { UpcomingEvents } from './Home/UpcomingEvents.js';
import { UpcomingEventFlipCard } from './Home/UpcomingEventFlipCard.js';

import { Event } from './Event/Event.js';
import { EventInfo } from './Event/EventInfo.js';
import { EventJumbotron } from './Event/EventJumbotron.js';
import { EventOutput } from './Event/EventOutput.js';
import { EventOutputCard } from './Event/EventOutputCard.js';
import { EventActions } from './Event/EventActions.js';

import { GalleryNavContent,GalleryContent } from './Gallery/Gallery.js';
import { Form } from './Contact/Form.js';

customElements.define('app-shell', AppShell);

customElements.define('index-comp', Index);

customElements.define('service-comp', Service);
customElements.define('services-comp', Services);
customElements.define('jumbotron-comp', Jumbotron);
customElements.define('navbar-comp', Navbar);
customElements.define('footer-comp', Footer);
customElements.define('testimonial-comp', Testimonial);
customElements.define('upcoming_event_card-comp', UpcomingEventCard);
customElements.define('upcoming_event_flip_card-comp', UpcomingEventFlipCard);
customElements.define('upcoming_events-comp', UpcomingEvents);

customElements.define('event-comp', Event);
customElements.define('event_info-comp', EventInfo);
customElements.define('event_jumbotron-comp', EventJumbotron);
customElements.define('event_output-comp', EventOutput);
customElements.define('event_output_card-comp', EventOutputCard);
customElements.define('event_actions-comp', EventActions);

customElements.define('contact_form-comp', Form);
customElements.define('gallery-nav', GalleryNavContent);
customElements.define('gallery-content', GalleryContent);