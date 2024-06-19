package fr.efrei.BilleterieJO.services;

import fr.efrei.BilleterieJO.models.Event;
import fr.efrei.BilleterieJO.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public void purchaseTicket(Long eventId, int quantity) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new IllegalArgumentException("Event not found"));

        if (event.getAvailableTickets() < quantity) {
            throw new IllegalArgumentException("Not enough tickets available");
        }

        event.setAvailableTickets(event.getAvailableTickets() - quantity);
        eventRepository.save(event);
    }
}
