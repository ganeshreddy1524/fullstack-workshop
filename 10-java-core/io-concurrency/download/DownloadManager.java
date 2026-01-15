package io-concurrency.download;



import java.util.List;
import java.util.ArrayList;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

public class DownloadManager {

    private final ExecutorService executor;
    private final AtomicInteger totalDownloaded = new AtomicInteger(0);

    public DownloadManager(int threads) {
        this.executor = Executors.newFixedThreadPool(threads);
    }

    public Future<String> download(String url) {
        Callable<String> task = () -> {
            DownloadTask downloadTask = new DownloadTask(url, totalDownloaded);

            Future<?> future = executor.submit(downloadTask);

            try {
                // wait max 30 seconds for completion
                future.get(30, TimeUnit.SECONDS);
                return "downloads/" + url.substring(url.lastIndexOf('/') + 1);
            } catch (TimeoutException e) {
                future.cancel(true);
                throw new RuntimeException("Download timed out: " + url);
            }
        };

        return executor.submit(task);
    }

    public void downloadAll(List<String> urls) {
        List<Future<String>> futures = new ArrayList<>();

        for (String url : urls) {
            futures.add(download(url));
        }

        // Wait for all downloads
        for (Future<String> f : futures) {
            try {
                f.get();
            } catch (Exception e) {
                System.out.println("Download failed: " + e.getMessage());
            }
        }

        System.out.println("Downloaded " + totalDownloaded.get() + " files total");

        shutdown();
    }

    private void shutdown() {
        executor.shutdown();
        try {
            if (!executor.awaitTermination(5, TimeUnit.SECONDS)) {
                executor.shutdownNow();
            }
        } catch (InterruptedException e) {
            executor.shutdownNow();
            Thread.currentThread().interrupt();
        }
    }
}
