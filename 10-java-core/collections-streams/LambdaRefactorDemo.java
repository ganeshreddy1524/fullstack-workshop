package collections-streams;

import java.util.*;
import java.util.function.*;

public class LambdaRefactorDemo {

    public static void main(String[] args) {
        List<String> names = new ArrayList<>(Arrays.asList("Ganesh", "Virat", "Sachin", "Rohit"));
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

        
        // 1. Sort list of strings by length
        

        // Original (Anonymous Comparator)
        /*
        Collections.sort(names, new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return Integer.compare(s1.length(), s2.length());
            }
        });
        */

        //  Refactored (Lambda)
        // names.sort((s1, s2) -> Integer.compare(s1.length(), s2.length()));

        //  Refactored (Method Reference + Comparator.comparing)
        names.sort(Comparator.comparingInt(String::length));
        System.out.println("Sorted by length: " + names);


        
        // 2. Filter even numbers
        

        // Original (Loop based filtering)
        /*
        List<Integer> evens = new ArrayList<>();
        for (Integer n : numbers) {
            if (n % 2 == 0) {
                evens.add(n);
            }
        }
        */

        // Refactored (Stream + Predicate)
        Predicate<Integer> isEven = n -> n % 2 == 0;
        List<Integer> evens = numbers.stream()
                .filter(isEven)
                .toList();

        System.out.println("Even numbers: " + evens);


        
        // 3. Print each element
        

        //  Original (Enhanced for-loop)
        /*
        for (String s : names) {
            System.out.println(s);
        }
        */

        //  Refactored (Method Reference + Consumer)
        System.out.println("Names:");
        names.forEach(System.out::println);


        
        // 4. Create thread
        

        //  Original (Anonymous Runnable)
        /*
        Thread t = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("Running");
            }
        });
        t.start();
        */

        //  Refactored (Lambda)
        Thread t = new Thread(() -> System.out.println("Running"));
        t.start();


        
        // 5. Transform strings to uppercase
        

        //  Original (Loop + manual transformation)
        /*
        List<String> upper = new ArrayList<>();
        for (String s : names) {
            upper.add(s.toUpperCase());
        }
        */

        //  Refactored (Stream + Method Reference + Function)
        Function<String, String> toUpper = String::toUpperCase;
        List<String> upper = names.stream()
                .map(toUpper)
                .toList();

        System.out.println("Uppercase names: " + upper);
    }
}

