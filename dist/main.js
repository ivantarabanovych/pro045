"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var updateProduct = function (id, updates) {
    console.log("\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0443 \u0437 ID: ".concat(id, ":"), updates);
};
var getProductSummary = function (product) {
    var description = product.description, summary = __rest(product, ["description"]);
    return summary;
};
var product = {
    id: 1,
    name: "Lenovo Yoga 32",
    description: "Full HD screen, RAM: 16GB",
    price: 1200
};
var updates = {
    price: 1400,
    name: "MacBookAir M3"
};
updateProduct(product.id, updates);
var productSummary = getProductSummary(product);
console.log("Короткий опис продукту:", productSummary);
