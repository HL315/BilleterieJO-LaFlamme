package fr.efrei.BilleterieJO.repositories;

import fr.efrei.BilleterieJO.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}