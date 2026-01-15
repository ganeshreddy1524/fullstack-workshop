package io-concurrency.order;



import java.util.concurrent.CompletableFuture;

public class ProductService {
    public CompletableFuture<Product> getProduct(Long id) {
        return CompletableFuture.supplyAsync(() -> {
            try { Thread.sleep(300); } catch (InterruptedException ignored) {}
            return new Product(id, "Product-" + id, 99.99);
        });
    }
}

