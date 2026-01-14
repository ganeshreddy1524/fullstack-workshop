package oop-advanced.registration;


import java.util.*;
import java.util.regex.Pattern;

public class UserService {
    private final Map<String, User> database = new HashMap<>();

    public void register(User user) throws ValidationException, DuplicateUserException {
        List<String> validationErrors = validateUser(user);

        if (!validationErrors.isEmpty()) {
            throw new ValidationException(String.join(", ", validationErrors));
        }

        if (database.containsKey(user.getEmail())) {
            throw new DuplicateUserException("Email already registered");
        }

        
        try (FakeDBConnection conn = new FakeDBConnection()) {
            database.put(user.getEmail(), user);
        } catch (Exception e) {
            throw new RuntimeException("Unexpected DB resource closing");
        }
    }

    public User findByEmail(String email) throws DatabaseException {
        try (FakeDBConnection conn = new FakeDBConnection()) {
            return database.get(email);
        } catch (Exception e) {
            throw new DatabaseException("Failed to access the database");
        }
    }

    
    private List<String> validateUser(User user) {
        List<String> errors = new ArrayList<>();

        
        if (user.getName() == null || user.getName().length() < 2 || user.getName().length() > 50) {
            errors.add("Name must be 2-50 characters");
        }

     
        Pattern emailPattern = Pattern.compile("^[\\w.-]+@[\\w.-]+\\.\\w+$");
        if (!emailPattern.matcher(user.getEmail()).matches()) {
            errors.add("Invalid email");
        }

     
        String pwd = user.getPassword();
        if (pwd.length() < 8 || !pwd.matches(".*[A-Z].*") || !pwd.matches(".*\\d.*")) {
            errors.add("Password must be 8+ chars, contain uppercase and number");
        }

        
        if (user.getAge() < 13) {
            errors.add("Must be 13+");
        }

        return errors;
    }

   
    class FakeDBConnection implements AutoCloseable {
        @Override
        public void close() {
            
        }
    }
}
