package fr.efrei.BilleterieJO.controllers;

import fr.efrei.BilleterieJO.models.Event;
import fr.efrei.BilleterieJO.models.PurchaseRequest;
import fr.efrei.BilleterieJO.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @CrossOrigin(origins = "http://localhost:3000") // Ajoutez cette annotation si nécessaire
    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Optional<Event> event = eventService.getEventById(id);
        return event.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @CrossOrigin(origins = "http://localhost:3000") // Ajoutez cette annotation si nécessaire
    @PostMapping("/purchase")
    public ResponseEntity<?> purchaseTicket(@RequestBody PurchaseRequest request) {
        try {
            eventService.purchaseTicket(request.getEventId(), request.getQuantity());
            return ResponseEntity.ok("Ticket purchased successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
