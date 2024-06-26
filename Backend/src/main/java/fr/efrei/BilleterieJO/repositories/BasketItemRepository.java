package fr.efrei.BilleterieJO.repositories;

import fr.efrei.BilleterieJO.models.BasketItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BasketItemRepository extends JpaRepository<BasketItem, Long> {
}