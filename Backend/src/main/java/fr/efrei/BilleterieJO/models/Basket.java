package fr.efrei.BilleterieJO.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Basket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "basket", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BasketItem> items = new ArrayList<>();

    @OneToOne
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<BasketItem> getItems() {
        return items;
    }

    public void setItems(List<BasketItem> items) {
        this.items = items;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
