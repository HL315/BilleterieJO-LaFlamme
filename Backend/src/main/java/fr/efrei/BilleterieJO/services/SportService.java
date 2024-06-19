package fr.efrei.BilleterieJO.services;

import fr.efrei.BilleterieJO.models.Sport;
import fr.efrei.BilleterieJO.repositories.SportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SportService {
    @Autowired
    private SportRepository sportRepository;

    public List<Sport> getAllSports() {
        return sportRepository.findAll();
    }

    public Sport getSportById(Long id) {
        return sportRepository.findById(id).orElseThrow(() -> new RuntimeException("Sport not found"));
    }
}
