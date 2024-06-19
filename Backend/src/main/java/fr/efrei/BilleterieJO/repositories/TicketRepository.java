package fr.efrei.BilleterieJO.repositories;

import fr.efrei.BilleterieJO.models.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
}
