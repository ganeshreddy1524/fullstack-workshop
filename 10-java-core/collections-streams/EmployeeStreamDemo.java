package collections-streams;

import java.util.*;
import java.util.stream.Collectors;

public class EmployeeStreamDemo {

    record Employee(
            Long id,
            String name,
            String department,
            double salary,
            int yearsOfService,
            List<String> skills
    ) {}

    public static void main(String[] args) {

        List<Employee> employees = List.of(
                new Employee(1L, "Alice", "Engineering", 85000, 5, List.of("Java", "Python")),
                new Employee(2L, "Bob", "Engineering", 75000, 3, List.of("Java", "JavaScript")),
                new Employee(3L, "Charlie", "Sales", 65000, 7, List.of("Communication", "CRM")),
                new Employee(4L, "Diana", "Engineering", 95000, 8, List.of("Java", "Kotlin", "Go")),
                new Employee(5L, "Eve", "HR", 55000, 2, List.of("Recruiting", "Communication")),
                new Employee(6L, "Frank", "Sales", 70000, 4, List.of("Negotiation", "CRM"))
        );

      
        List<Employee> engineeringSorted = employees.stream()
                .filter(e -> e.department().equalsIgnoreCase("Engineering"))
                .sorted(Comparator.comparingDouble(Employee::salary).reversed())
                .toList();

        
        List<String> upperNames = employees.stream()
                .map(e -> e.name().toUpperCase())
                .toList();

        
        Map<String, List<Employee>> byDepartment = employees.stream()
                .collect(Collectors.groupingBy(Employee::department));

       
        double totalSalary = employees.stream()
                .mapToDouble(Employee::salary)
                .sum();

        
        Map<String, Double> avgSalaryByDept = employees.stream()
                .collect(Collectors.groupingBy(
                        Employee::department,
                        Collectors.averagingDouble(Employee::salary)
                ));

        
        Optional<Employee> highestPaid = employees.stream()
                .max(Comparator.comparingDouble(Employee::salary));

        
        Set<String> uniqueSkills = employees.stream()
                .flatMap(e -> e.skills().stream())
                .collect(Collectors.toSet());

       
        Map<Boolean, List<Employee>> partitioned = employees.stream()
                .collect(Collectors.partitioningBy(e -> e.salary() > 70000));

        
        int totalYears = employees.stream()
                .map(Employee::yearsOfService)
                .reduce(0, Integer::sum);

     
        List<String> highPayDepts = employees.stream()
                .collect(Collectors.groupingBy(
                        Employee::department,
                        Collectors.averagingDouble(Employee::salary)
                ))
                .entrySet().stream()
                .filter(e -> e.getValue() > 70000)
                .map(Map.Entry::getKey)
                .toList();

        
        System.out.println("Engineering sorted: " + engineeringSorted);
        System.out.println("Upper names: " + upperNames);
        System.out.println("Group by department: " + byDepartment);
        System.out.println("Total salary expense: " + totalSalary);
        System.out.println("Average salary by dept: " + avgSalaryByDept);
        highestPaid.ifPresent(e -> System.out.println("Highest paid: " + e));
        System.out.println("Unique skills: " + uniqueSkills);
        System.out.println("Partitioned (salary > 70000): " + partitioned);
        System.out.println("Total years of service: " + totalYears);
        System.out.println("Departments with avg salary > 70000: " + highPayDepts);
    }
}

