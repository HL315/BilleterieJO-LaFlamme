package fr.efrei.BilleterieJO;

import fr.efrei.BilleterieJO.models.Order;
import fr.efrei.BilleterieJO.services.OrderService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class OrderServiceTest {

    @Autowired
    private OrderService orderService;

    @Test
    public void testSaveOrder() {
        Order order = new Order();
        order.setMontant(100);
        order.setDate(LocalDate.now());

        Order savedOrder = orderService.saveOrder(order);

        assertThat(savedOrder).isNotNull();
        assertThat(savedOrder.getId()).isNotNull();
    }
}
