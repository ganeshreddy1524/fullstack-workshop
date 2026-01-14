package collections-streams.inventory;



import java.util.*;
import java.util.stream.Collectors;

public class Inventory {
    private List<Product> productList = new ArrayList<>();
    private Set<String> categories = new HashSet<>();
    private Map<String, Product> productMap = new HashMap<>();
    private Queue<Product> lowStockQueue = new ArrayDeque<>();

    public void addProduct(Product product) {
        productList.add(product);
        productMap.put(product.getId(), product);
        categories.add(product.getCategory());

        if (product.getQuantity() < 10) {
            lowStockQueue.offer(product);
        }
    }

    public void updateProduct(Product updated) {
        Product existing = productMap.get(updated.getId());
        if (existing != null) {
           
            existing.setName(updated.getName());
            existing.setCategory(updated.getCategory());
            existing.setPrice(updated.getPrice());
            existing.setQuantity(updated.getQuantity());

            categories.add(existing.getCategory());

           
            if (existing.getQuantity() < 10 && !lowStockQueue.contains(existing)) {
                lowStockQueue.offer(existing);
            }
        }
    }

    public void deleteProduct(String id) {
        Product removed = productMap.remove(id);
        if (removed != null) {
            productList.remove(removed);
            categories.remove(removed.getCategory());
            lowStockQueue.remove(removed);
        }
    }

    public Product findById(String id) {
        return productMap.get(id);
    }

    public List<Product> getByCategory(String category) {
        return productList.stream()
                .filter(p -> p.getCategory().equalsIgnoreCase(category))
                .collect(Collectors.toList());
    }

    public List<Product> getAllSortedByPrice() {
        return productList.stream()
                .sorted(Comparator.comparingDouble(Product::getPrice))
                .collect(Collectors.toList());
    }

    public Queue<Product> getLowStockAlerts() {
        return new ArrayDeque<>(lowStockQueue);
    }
}

