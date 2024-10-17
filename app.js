



import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

import type { Event } from 'types.ts';

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
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: 'dayGridMonth',
      displayEventTime: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek',
      },
  
      events,
  
    });
  
    calendar.render();
    
});

const getEvents = (): Event[] => {
    const scripts = document.querySelectorAll<HTMLScriptElement>('[data-element="event-data"]');
    console.log({ scripts });
    const events = [...scripts].map((script) => {
      const event: Event = JSON.parse(script.textContent!);
      event.start = new Date(event.start);
      event.end = new Date(event.end);
  
      return event;
    });
  
    return events;
  };
