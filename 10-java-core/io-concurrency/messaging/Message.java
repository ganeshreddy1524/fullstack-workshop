package io-concurrency.messaging;



public record Message(long id, String content, int priority) {}

