package io-concurrency.order;



import java.util.concurrent.CompletableFuture;

public class OrderProcessor {

    private final UserService userService = new UserService();
    private final ProductService productService = new ProductService();
    private final InventoryService inventoryService = new InventoryService();
    private final PaymentService paymentService = new PaymentService();
    private final NotificationService notificationService = new NotificationService();

    public CompletableFuture<OrderResult> processOrder(Long userId, Long productId, int quantity) {

        // Fetch user & product in parallel
        CompletableFuture<User> userFuture = userService.getUser(userId);
        CompletableFuture<Product> productFuture = productService.getProduct(productId);

        return userFuture.thenCombine(productFuture, (user, product) -> {
            return new Order(user, product, quantity);
        })
        .thenCompose(order -> inventoryService.checkStock(order.getProductId(), order.getQuantity())
                .thenCompose(inStock -> {
                    if (!inStock) {
                        return CompletableFuture.failedFuture(
                                new RuntimeException("Product out of stock")
                        );
                    }
                    return paymentService.processPayment(order)
                            .thenCompose(success -> {
                                if (!success) {
                                    return CompletableFuture.failedFuture(
                                            new RuntimeException("Payment failed")
                                    );
                                }
                                return notificationService.sendConfirmation(order)
                                        .thenApply(v -> order);
                            });
                })
        )
        .thenApply(order -> new OrderResult(true, order.getProductId(), null))
        .exceptionally(ex -> new OrderResult(false, null, ex.getMessage()));
    }
}

