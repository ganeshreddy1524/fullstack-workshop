package io-concurrency.order;



import java.util.concurrent.CompletableFuture;

public class PaymentService {
    public CompletableFuture<Boolean> processPayment(Order order) {
        return CompletableFuture.supplyAsync(() -> {
            try { Thread.sleep(1000); } catch (InterruptedException ignored) {}
            return true; // simulate success
        });
    }
}
