package fr.efrei.BilleterieJO.controllers;

import fr.efrei.BilleterieJO.models.Order;
import fr.efrei.BilleterieJO.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        return ResponseEntity.ok(orderService.saveOrder(order));
    }

    // Autres endpoints...
}
