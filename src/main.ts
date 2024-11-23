type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
};

type ProductUpdate = Partial<Product>;

type ProductSummary = Omit<Product, 'description'>;

const updateProduct = (id: number, updates: ProductUpdate): void => {
    console.log(`Оновлення продукту з ID: ${id}:`, updates);
};

const getProductSummary = (product: Product): ProductSummary => {
    const { description, ...summary } = product;
    return summary;
};

const product: Product = {
    id: 1,
    name: "Lenovo Yoga 32",
    description: "Full HD screen, RAM: 16GB",
    price: 1200
};

const updates: ProductUpdate = {
    price: 1400,
    name: "MacBookAir M3"
};

updateProduct(product.id, updates);

const productSummary: ProductSummary = getProductSummary(product);
console.log("Короткий опис продукту:", productSummary);


