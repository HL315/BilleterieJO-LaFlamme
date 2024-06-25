package fr.efrei.BilleterieJO.services;

import fr.efrei.BilleterieJO.models.Event;
import fr.efrei.BilleterieJO.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    public void purchaseTicket(Long eventId, int quantity) {
        Optional<Event> eventOptional = eventRepository.findById(eventId);
        if (eventOptional.isPresent()) {
            Event event = eventOptional.get();
            if (event.getAvailableTickets() >= quantity) {
                event.setAvailableTickets(event.getAvailableTickets() - quantity);
                eventRepository.save(event);
            } else {
                throw new IllegalArgumentException("Not enough tickets available");
            }
        } else {
            throw new IllegalArgumentException("Event not found");
        }
    }
}
