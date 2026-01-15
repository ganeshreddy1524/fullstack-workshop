package io-concurrency.order;



import java.util.concurrent.CompletableFuture;

public class NotificationService {
    public CompletableFuture<Void> sendConfirmation(Order order) {
        return CompletableFuture.runAsync(() -> {
            try { Thread.sleep(400); } catch (InterruptedException ignored) {}
            System.out.println("Notification sent for order of product " + order.getProductId());
        });
    }
}
