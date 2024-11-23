"use strict";
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pendeng";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cencelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function getOrderStatusMessage(status) {
    switch (status) {
        case OrderStatus.Pending:
            return "Ваше замовдення в обробці";
        case OrderStatus.Shipped:
            return "Ваше замовлення відправлено";
        case OrderStatus.Delivered:
            return "Ваше замовлення доставлено";
        case OrderStatus.Cencelled:
            return "Ваше замовлення доставлено";
        default:
            return "Невідомий статус замовлення";
    }
}
var status = OrderStatus.Shipped;
console.log(getOrderStatusMessage(status));
