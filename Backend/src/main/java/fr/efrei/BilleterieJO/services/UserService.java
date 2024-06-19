package fr.efrei.BilleterieJO.services;

import fr.efrei.BilleterieJO.models.User;
import fr.efrei.BilleterieJO.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Autres méthodes de gestion des utilisateurs...
}
