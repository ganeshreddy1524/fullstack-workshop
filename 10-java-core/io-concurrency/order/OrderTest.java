package io-concurrency.order;


public class OrderTest {
    public static void main(String[] args) throws Exception {

        OrderProcessor processor = new OrderProcessor();

        long start = System.currentTimeMillis();

        processor.processOrder(1L, 100L, 2)
                .thenAccept(result -> {
                    if (result.isSuccess()) {
                        System.out.println("Order completed! OrderID: " + result.getOrderId());
                    } else {
                        System.out.println("Order failed: " + result.getError());
                    }
                }).join(); // Wait for completion

        long end = System.currentTimeMillis();
        System.out.println("Completed in " + (end - start) + " ms");
    }
}
