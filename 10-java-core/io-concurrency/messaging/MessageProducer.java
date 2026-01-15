package io-concurrency.messaging;



import java.util.concurrent.ExecutorService;

public class MessageProducer {

    private final MessageQueue queue;

    public MessageProducer(MessageQueue queue) {
        this.queue = queue;
    }

    public void produceMessages(int count, ExecutorService executor) {
        for (int i = 0; i < count; i++) {
            int finalI = i;
            executor.submit(() -> {
                Message msg = new Message(finalI, "Message-" + finalI, finalI % 10);
                queue.publish(msg);
            });
        }
        System.out.println("Produced " + count + " messages");
    }
}
