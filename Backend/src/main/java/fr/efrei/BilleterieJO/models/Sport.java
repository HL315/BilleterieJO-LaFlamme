package fr.efrei.BilleterieJO.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Sport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String image;

    @OneToMany(mappedBy = "sport")
    private List<Event> events;

    // Getters and setters
}
