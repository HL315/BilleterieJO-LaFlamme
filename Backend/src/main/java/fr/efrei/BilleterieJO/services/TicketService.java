package fr.efrei.BilleterieJO.services;

import fr.efrei.BilleterieJO.models.Ticket;
import fr.efrei.BilleterieJO.repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    public Ticket saveTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    // Autres méthodes de gestion des billets...
}
