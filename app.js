import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

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


