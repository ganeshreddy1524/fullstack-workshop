package io-concurrency.order;



public class Order {
    private Long userId;
    private Long productId;
    private int quantity;
    private double totalPrice;

    public Order(User user, Product product, int quantity) {
        this.userId = user.getId();
        this.productId = product.getId();
        this.quantity = quantity;
        this.totalPrice = quantity * product.getPrice();
    }

    public Long getUserId() { return userId; }
    public Long getProductId() { return productId; }
    public int getQuantity() { return quantity; }
    public double getTotalPrice() { return totalPrice; }
}

