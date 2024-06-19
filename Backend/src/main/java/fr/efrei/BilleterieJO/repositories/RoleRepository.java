package fr.efrei.BilleterieJO.repositories;

import fr.efrei.BilleterieJO.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
