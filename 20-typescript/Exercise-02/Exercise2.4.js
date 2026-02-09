var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Processing"] = 1] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 2] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 4] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["PATCH"] = "PATCH";
})(HttpMethod || (HttpMethod = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Critical"] = 4] = "Critical";
})(LogLevel || (LogLevel = {}));
function getOrderMessage(status) {
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
console.log(HttpMethod.POST); // "POST"
console.log(LogLevel.Error); // 3
