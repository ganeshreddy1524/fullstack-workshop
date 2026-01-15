package io-concurrency.config;


import java.io.ObjectOutputStream;
import java.io.ObjectInputStream;
import java.nio.file.Path;

public class ConfigTest {
    public static void main(String[] args) {

        // Save AppConfig
        AppConfig cfg = new AppConfig("MyApp", "1.0", 100, 30000);
        ConfigManager.saveConfig(cfg, Path.of("config.ser"));

        // Load AppConfig
        AppConfig loaded = ConfigManager.loadConfig(Path.of("config.ser"));
        System.out.println("Loaded: " + loaded);
        System.out.println("Last Loaded: " + loaded.getLastLoaded());

        // DatabaseConfig test (Externalizable)
        DatabaseConfig dbCfg = new DatabaseConfig("localhost", 3306, "root", "secret");
        Path dbPath = Path.of("dbconfig.ser");

        // manual serialization
        try (ObjectOutputStream out = new ObjectOutputStream(java.nio.file.Files.newOutputStream(dbPath))) {
            out.writeObject(dbCfg);
        } catch (Exception e) {
            e.printStackTrace();
        }

        // manual deserialization
        try (ObjectInputStream in = new ObjectInputStream(java.nio.file.Files.newInputStream(dbPath))) {
            DatabaseConfig loadedDb = (DatabaseConfig) in.readObject();
            System.out.println("Loaded DB Config: " + loadedDb);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

