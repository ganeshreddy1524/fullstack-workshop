package io-concurrency.config;



import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;

public class ConfigManager {

    public static void saveConfig(AppConfig config, Path file) {
        try (ObjectOutputStream oos = new ObjectOutputStream(Files.newOutputStream(file))) {
            oos.writeObject(config);
        } catch (IOException e) {
            System.err.println("Failed to save config: " + e.getMessage());
        }
    }

    public static AppConfig loadConfig(Path file) {
        try (ObjectInputStream ois = new ObjectInputStream(Files.newInputStream(file))) {
            return (AppConfig) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            System.err.println("Failed to load config: " + e.getMessage());
            return null;
        }
    }
}

