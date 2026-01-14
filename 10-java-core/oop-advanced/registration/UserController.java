package oop-advanced.registration;


import java.util.*;

public class UserController {
    private final UserService userService = new UserService();

    public Result register(String name, String email, String password, int age) {
        try {
            User user = new User(name, email, password, age);
            userService.register(user);
            return new Result(true, "User registered successfully", null);

        } catch (ValidationException e) {
            return new Result(false, null, Arrays.asList(e.getMessage().split(", ")));

        } catch (DuplicateUserException e) {
            return new Result(false, null, Collections.singletonList(e.getMessage()));

        } catch (Exception e) {
            return new Result(false, null, Collections.singletonList("Unexpected error"));
        }
    }
}
