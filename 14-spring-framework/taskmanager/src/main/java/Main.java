import com.taskmanager.config.AppConfig;
import com.taskmanager.ui.ConsoleUI;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        System.out.println("Starting Task Manager with Spring...\n");

        /*
         * Create the Spring Application Context.
         *
         * This one line triggers:
         * 1. Reading AppConfig
         * 2. Component scanning
         * 3. Bean creation
         * 4. Dependency injection
         */
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        /*
         * Get the ConsoleUI bean from Spring.
         *
         * Spring has already:
         * - Created ConnectionManager
         * - Injected it into TaskRepository
         * - Created TaskRepository
         * - Injected it into TaskService
         * - Created TaskService
         * - Injected it into ConsoleUI
         * - Created ConsoleUI
         *
         * We just ask for ConsoleUI and everything is ready!
         */
        ConsoleUI ui = context.getBean(ConsoleUI.class);

        // Run the application1
        try {
            ui.run();
        } finally {
            // Properly close the context
            ((AnnotationConfigApplicationContext) context).close();
        }
    }
}