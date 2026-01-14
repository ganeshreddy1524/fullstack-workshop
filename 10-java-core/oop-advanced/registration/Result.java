package oop-advanced.registration;


import java.util.List;

public class Result {
    private boolean success;
    private String message;
    private List<String> errors;

    public Result(boolean success, String message, List<String> errors) {
        this.success = success;
        this.message = message;
        this.errors = errors;
    }

    @Override
    public String toString() {
        return "Result{success=" + success +
                ", message='" + message + '\'' +
                ", errors=" + errors + '}';
    }
}

