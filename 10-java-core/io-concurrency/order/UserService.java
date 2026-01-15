package io-concurrency.order;


import java.util.concurrent.CompletableFuture;

public class UserService {
    public CompletableFuture<User> getUser(Long id) {
        return CompletableFuture.supplyAsync(() -> {
            try { Thread.sleep(500); } catch (InterruptedException ignored) {}
            return new User(id, "User-" + id);
        });
    }
}

