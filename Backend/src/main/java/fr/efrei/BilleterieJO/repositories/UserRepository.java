package fr.efrei.BilleterieJO.repositories;

import fr.efrei.BilleterieJO.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}

