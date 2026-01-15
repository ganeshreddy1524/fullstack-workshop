package io-concurrency.messaging;



import java.time.Duration;
import java.time.Instant;
import java.util.concurrent.*;

public class MessageProcessor {

    private final MessageQueue queue = new MessageQueue();

    public void runBenchmark() throws Exception {
        System.out.println("--- Platform Threads (100 consumers) ---");
        runConsumers(100, Executors.newFixedThreadPool(100));

        System.out.println("\n--- Virtual Threads (1000 consumers) ---");
        runConsumers(1000, Executors.newVirtualThreadPerTaskExecutor());
    }

    private void runConsumers(int consumers, ExecutorService consumerExec) throws Exception {
        ExecutorService producerExec = Executors.newVirtualThreadPerTaskExecutor();
        int messageCount = 10000;

        Instant start = Instant.now();

        // Start consumers
        for (int i = 0; i < consumers; i++) {
            consumerExec.submit(new MessageConsumer(queue));
        }

        // Produce messages
        new MessageProducer(queue).produceMessages(messageCount, producerExec);

        producerExec.shutdown();
        producerExec.awaitTermination(5, TimeUnit.SECONDS);

        // Wait for queue to drain
        while (!queueIsEmpty()) {
            Thread.sleep(10);
        }

        consumerExec.shutdownNow();

        Instant end = Instant.now();
        long ms = Duration.between(start, end).toMillis();

        System.out.println("Processed " + messageCount + " messages in " + ms + " ms");
        System.out.println("Average: " + (ms * 1.0 / messageCount) + " ms per message");
    }

    private boolean queueIsEmpty() {
        // not ideal, but simple for demonstration
        try {
            return queue.consume() == null;
        } catch (Exception e) {
            return false;
        }
    }
}

