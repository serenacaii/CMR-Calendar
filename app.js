<script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@6.1.15/index.global.min.js"></script>

import { Calendar } from '@fullcalendar/core'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import dayGridPlugin from '@fullcalendar/daygrid'

"use strict";
window.Webflow ||=[];
window.Webflow.push(()=>{
    alert("poopsti");
    console.log("pain");
    document.body.style.backgroundColor = "red";
    const calendarElement = document.querySelector<HTMLDivElement>('[data-element="calendar"]');
    if (!calendarElement) return;
  
    const events = getEvents();
    console.log({ events });
  
    const calendar = new Calendar(calendarElement, {
        plugins: [ googleCalendarPlugin ],
        googleCalendarApiKey: 'AIzaSyDdtDvEJIckRjndvDW2Tfe8HTAfb-N72ds',
        events: {
          googleCalendarId: 'siditj1n00ctlfb9f5legqc87o@group.calendar.google.com'
        }
  
    });
  
    calendar.render();
    
});


