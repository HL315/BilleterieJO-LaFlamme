package fr.efrei.BilleterieJO.services;

import fr.efrei.BilleterieJO.models.Order;
import fr.efrei.BilleterieJO.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public void saveOrder(Order order) {
        orderRepository.save(order);
    }
}