function getStatus(status: "success" | "error" | "pending"): string {
    switch(status){
        case "success":
            return "Operation completed successfully.";
        case "error":
            return "An error occurred during the operation.";
        case "pending":
            return "The operation is still pending.";
        default:
            return "Unknown status."
    }
}

console.log(getStatus("success"));
console.log(getStatus("error"));
console.log(getStatus("pending"));

