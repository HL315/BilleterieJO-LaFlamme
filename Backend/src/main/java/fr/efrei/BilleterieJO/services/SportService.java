package fr.efrei.BilleterieJO.services;

import fr.efrei.BilleterieJO.models.Sport;
import fr.efrei.BilleterieJO.repositories.SportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SportService {
    @Autowired
    private SportRepository sportRepository;

    public List<Sport> getAllSports() {
        List<Sport> sports = sportRepository.findAll();
        sports.forEach(sport -> {
            System.out.println("Sport: " + sport.getName());
            sport.getEvents().forEach(event -> System.out.println("Event: " + event.getName()));
        });
        return sports;
    }


    public Sport getSportById(Long id) {
        Optional<Sport> sport = sportRepository.findById(id);
        if (sport.isPresent()) {
            System.out.println("Fetched sport from DB: " + sport.get());
        }
        return sport.orElseThrow(() -> new RuntimeException("Sport not found"));
    }
}
