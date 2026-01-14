package oop-advanced.annotations;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

public class Validator {

    public static List<String> validate(Object obj) {
        List<String> errors = new ArrayList<>();
        
        Class<?> clazz = obj.getClass();
        
        for (Field field : clazz.getDeclaredFields()) {
            field.setAccessible(true);
            try {
                Object value = field.get(obj);

                // Check @NotNull
                if (field.isAnnotationPresent(NotNull.class)) {
                    NotNull notNull = field.getAnnotation(NotNull.class);
                    if (value == null) {
                        errors.add(notNull.message());
                    }
                }

                // Check @Validate
                if (field.isAnnotationPresent(Validate.class) && value != null) {
                    Validate validate = field.getAnnotation(Validate.class);

                    if (value instanceof Integer) {
                        int intValue = (Integer) value;
                        if (intValue < validate.min() || intValue > validate.max()) {
                            errors.add(validate.message());
                        }
                    }
                }

            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        
        return errors;
    }
}
