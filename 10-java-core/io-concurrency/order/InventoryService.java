package io-concurrency.order;


import java.util.concurrent.CompletableFuture;

public class InventoryService {
    public CompletableFuture<Boolean> checkStock(Long productId, int quantity) {
        return CompletableFuture.supplyAsync(() -> {
            try { Thread.sleep(200); } catch (InterruptedException ignored) {}
            return quantity <= 10; // simulate stock
        });
    }
}

