package fr.efrei.BilleterieJO.controllers;

import fr.efrei.BilleterieJO.models.*;
import fr.efrei.BilleterieJO.services.BasketService;
import fr.efrei.BilleterieJO.services.OrderService;
import fr.efrei.BilleterieJO.services.UserService;
import fr.efrei.BilleterieJO.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @Autowired
    private EventService eventService;

    @Autowired
    private BasketService basketService;

    @GetMapping
    public ResponseEntity<List<Order>> getOrderHistory(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        List<Order> orders = orderService.getOrdersByUserId(user.getId());
        return ResponseEntity.ok(orders);
    }

    @PostMapping("/purchase")
    public ResponseEntity<?> purchaseTicket(@RequestBody PurchaseRequest request, Principal principal) {
        User user = userService.findByUsername(principal.getName());
        Order order = new Order();
        order.setUser(user);
        order.setEvent(eventService.getEventById(request.getEventId()).orElseThrow(() -> new RuntimeException("Event not found")));
        order.setQuantity(request.getQuantity());
        orderService.saveOrder(order);
        return ResponseEntity.ok("Ticket purchased successfully");
    }

    @PostMapping("/checkout")
    public ResponseEntity<?> checkout(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        Basket basket = basketService.getBasketByUserId(user.getId());
        if (basket != null) {
            basketService.clearBasket(basket);
            return ResponseEntity.ok("Checkout successful");
        } else {
            return ResponseEntity.badRequest().body("Basket is empty");
        }
    }

    @GetMapping("/basket")
    public ResponseEntity<Basket> getBasket(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userService.findByUsername(userDetails.getUsername());
        Basket basket = basketService.getBasketByUser(user);
        return ResponseEntity.ok(basket);
    }

    @PostMapping("/add-to-basket")
    public ResponseEntity<?> addToBasket(@RequestBody BasketItem basketItem, @AuthenticationPrincipal UserDetails userDetails) {
        User user = userService.findByUsername(userDetails.getUsername());
        basketService.addToBasket(user.getId(), basketItem);
        return ResponseEntity.ok("Item added to basket");
    }

    @PostMapping("/confirm-basket")
    public ResponseEntity<?> confirmBasket(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userService.findByUsername(userDetails.getUsername());
        basketService.confirmBasket(user.getId());
        return ResponseEntity.ok("Basket confirmed");
    }
}

