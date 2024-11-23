enum OrderStatus {
    Pending = "Pendeng",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cencelled = "Cancelled"
}

function getOrderStatusMessage(status: OrderStatus): string{
    switch(status){
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

const oderStatus: OrderStatus = OrderStatus.Shipped; 
console.log(getOrderStatusMessage(oderStatus));
