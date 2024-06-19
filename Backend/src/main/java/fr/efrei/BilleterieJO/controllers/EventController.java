package fr.efrei.BilleterieJO.controllers;

import fr.efrei.BilleterieJO.models.Event;
import fr.efrei.BilleterieJO.models.PurchaseRequest;
import fr.efrei.BilleterieJO.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @PostMapping("/purchase")
    public ResponseEntity<?> purchaseTicket(@RequestBody PurchaseRequest request) {
        eventService.purchaseTicket(request.getEventId(), request.getQuantity());
        return ResponseEntity.ok("Ticket purchased successfully");
    }
}
