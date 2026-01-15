package io-concurrency.download;



import java.util.concurrent.atomic.AtomicInteger;

public class DownloadTask implements Runnable {

    private final String url;
    private volatile int progress = 0; // thread-safe read via volatile
    private final AtomicInteger totalCounter; // shared counter for all tasks

    public DownloadTask(String url, AtomicInteger totalCounter) {
        this.url = url;
        this.totalCounter = totalCounter;
    }

    @Override
    public void run() {
        String fileName = url.substring(url.lastIndexOf('/') + 1);

        try {
            for (int percent : new int[]{0, 25, 50, 75, 100}) {
                this.progress = percent;
                System.out.printf("[%s] Downloading %s... %d%%%n",
                        Thread.currentThread().getName(), fileName, percent);

                // simulate network delay
                Thread.sleep(1000);
            }

            totalCounter.incrementAndGet(); // thread-safe increment
        } catch (InterruptedException e) {
            System.out.printf("[%s] Download interrupted: %s%n",
                    Thread.currentThread().getName(), fileName);
            Thread.currentThread().interrupt();
        }
    }

    public int getProgress() {
        return progress;
    }

    public String getUrl() {
        return url;
    }
}
