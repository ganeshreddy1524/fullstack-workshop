package io-concurrency.config;



import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.time.LocalDateTime;

public class AppConfig implements Serializable {
    private static final long serialVersionUID = 1L;

    private String appName;
    private String version;
    private int maxConnections;
    private int timeout;

    private transient LocalDateTime lastLoaded;

    public AppConfig(String appName, String version, int maxConnections, int timeout) {
        this.appName = appName;
        this.version = version;
        this.maxConnections = maxConnections;
        this.timeout = timeout;
        this.lastLoaded = LocalDateTime.now();
    }

    public String getAppName() { return appName; }
    public String getVersion() { return version; }
    public int getMaxConnections() { return maxConnections; }
    public int getTimeout() { return timeout; }
    public LocalDateTime getLastLoaded() { return lastLoaded; }

    /**
     * Custom deserialization to restore lastLoaded time
     */
    private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {
        in.defaultReadObject(); // read non-transient fields
        this.lastLoaded = LocalDateTime.now(); // set on deserialization
    }

    @Override
    public String toString() {
        return "AppConfig{" +
                "appName='" + appName + '\'' +
                ", version='" + version + '\'' +
                ", maxConnections=" + maxConnections +
                ", timeout=" + timeout +
                ", lastLoaded=" + lastLoaded +
                '}';
    }
}
