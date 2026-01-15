package io-concurrency.logs;

import java.nio.file.Path;
import java.util.List;
import java.util.Map;

public class LogAnalyzerTest {
    public static void main(String[] args) {
        LogAnalyzer analyzer = new LogAnalyzer();

        List<LogEntry> logs = analyzer.readLogs(
    Path.of("E:/revaturetraining/10-java-core/ioconcurrency/logs/app.log")
);


        Map<String, Long> counts = analyzer.countByLevel(logs);
        System.out.println("Counts: " + counts);

        List<LogEntry> errors = analyzer.getErrors(logs);
        System.out.println("Errors:");
        errors.forEach(e -> System.out.println(e.timestamp() + " - " + e.message()));

        analyzer.writeSummary(Path.of("summary.txt"), logs);
        System.out.println("Summary written to summary.txt");
    }
}

