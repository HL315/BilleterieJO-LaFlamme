package fr.efrei.BilleterieJO.services;

import fr.efrei.BilleterieJO.models.Order;
import fr.efrei.BilleterieJO.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    // Autres méthodes de gestion des commandes...
}
