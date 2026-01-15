package io-concurrency.order;



public class OrderResult {
    private boolean success;
    private Long orderId;
    private String error;

    public OrderResult(boolean success, Long orderId, String error) {
        this.success = success;
        this.orderId = orderId;
        this.error = error;
    }

    public boolean isSuccess() { return success; }
    public Long getOrderId() { return orderId; }
    public String getError() { return error; }
}

