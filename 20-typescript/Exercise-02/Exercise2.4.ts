enum OrderStatus {
    Pending,
    Processing,
    Shipped,
    Delivered,
    Cancelled
}


enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}


enum LogLevel {
    Debug = 0,
    Info = 1,
    Warning = 2,
    Error = 3,
    Critical = 4
}

function getOrderMessage(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.Pending:
            return "Your order has been placed.";
        case OrderStatus.Processing:
            return "Your order is being processed.";
        case OrderStatus.Shipped:
            return "Your order is on its way!";
        case OrderStatus.Delivered:
            return "Your order has been delivered.";
        case OrderStatus.Cancelled:
            return "Your order has been cancelled.";
        default:
            return "Unknown order status.";
    }
}

console.log(getOrderMessage(OrderStatus.Shipped));
// Your order is on its way!

console.log(HttpMethod.POST);   // "POST"
console.log(LogLevel.Error);    // 3