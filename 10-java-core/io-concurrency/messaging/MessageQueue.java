package io-concurrency.messaging;


import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class MessageQueue {
    private final BlockingQueue<Message> queue = new LinkedBlockingQueue<>();

    public void publish(Message msg) {
        try {
            queue.put(msg);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

    public Message consume() {
        try {
            return queue.take();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return null;
        }
    }
}
