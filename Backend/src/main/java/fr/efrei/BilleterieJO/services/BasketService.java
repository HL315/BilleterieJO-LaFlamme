package fr.efrei.BilleterieJO.services;

import fr.efrei.BilleterieJO.models.Basket;
import fr.efrei.BilleterieJO.models.BasketItem;
import fr.efrei.BilleterieJO.models.User;
import fr.efrei.BilleterieJO.repositories.BasketItemRepository;
import fr.efrei.BilleterieJO.repositories.BasketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BasketService {

    @Autowired
    private BasketRepository basketRepository;

    @Autowired
    private BasketItemRepository basketItemRepository;

    public Basket getBasketByUserId(Long userId) {
        return basketRepository.findByUserId(userId).orElse(new Basket());
    }

    public void clearBasket(Basket basket) {
        List<BasketItem> items = basket.getItems();
        basketItemRepository.deleteAll(items);
        basket.getItems().clear();
        basketRepository.save(basket);
    }

    public void confirmBasket(Long userId) {
        Basket basket = basketRepository.findByUserId(userId).orElseThrow(() -> new RuntimeException("Basket not found for user id: " + userId));

        basketRepository.save(basket);
    }

    public void addToBasket(Long userId, BasketItem basketItem) {
        Basket basket = basketRepository.findByUserId(userId).orElse(new Basket());
        basket.getItems().add(basketItem);
        basketRepository.save(basket);
    }

    public Basket getOrCreateBasket(User user) {
        Optional<Basket> basketOptional = basketRepository.findByUserId(user.getId());
        Basket basket = basketOptional.orElse(new Basket());
        basket.setUser(user);
        return basket;
    }

    public void addItemToBasket(Basket basket, BasketItem item) {
        basket.getItems().add(item);
        item.setBasket(basket);
        basketRepository.save(basket);
    }

    public Basket getBasketByUser(User user) {
        return basketRepository.findByUserId(user.getId()).orElse(null);
    }
}
