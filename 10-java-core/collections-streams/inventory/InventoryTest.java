package collections-streams.inventory;



import java.util.List;
import java.util.Queue;

public class InventoryTest {
    public static void main(String[] args) {
        Inventory inventory = new Inventory();

        inventory.addProduct(new Product("P001", "Laptop", "Electronics", 999.99, 50));
        inventory.addProduct(new Product("P002", "Mouse", "Electronics", 29.99, 5));
        inventory.addProduct(new Product("P003", "Desk", "Furniture", 299.99, 15));

       
        List<Product> electronics = inventory.getByCategory("Electronics");
        System.out.println("Electronics: " + electronics);

        
        List<Product> sorted = inventory.getAllSortedByPrice();
        System.out.println("Sorted by price: " + sorted);

    
        Queue<Product> lowStock = inventory.getLowStockAlerts();
        while (!lowStock.isEmpty()) {
            Product p = lowStock.poll();
            System.out.println("Low stock: " + p.getName());
        }

        
        inventory.updateProduct(new Product("P003", "Desk", "Furniture", 299.99, 8));

       
        Queue<Product> lowStockAfterUpdate = inventory.getLowStockAlerts();
        System.out.println("After update:");
        while (!lowStockAfterUpdate.isEmpty()) {
            Product p = lowStockAfterUpdate.poll();
            System.out.println("Low stock: " + p.getName());
        }
    }
}

