import { parseISO } from "date-fns";

interface Event {
    event: Date;
    // Otros campos de tu objeto Event
}
export const eventsToDateEvents = (event: Event): Event => {
    event.event = parseISO(event.event.toISOString());
    return event;
  };