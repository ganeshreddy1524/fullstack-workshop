package io-concurrency.messaging;



public class MessageConsumer implements Runnable {

    private final MessageQueue queue;

    public MessageConsumer(MessageQueue queue) {
        this.queue = queue;
    }

    @Override
    public void run() {
        while (!Thread.currentThread().isInterrupted()) {
            Message msg = queue.consume();
            if (msg == null) continue;

            // Simulate processing (cheap)
            try { Thread.sleep(1); } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}

