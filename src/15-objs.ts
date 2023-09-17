(() => {
    type Sizes =  'S' | 'M' | 'L' | 'XL'
    type Product = {
        title: string,
        createAt: Date,
        stock: number,
        size?: Sizes
    }

    const products:Product[] = [];

    const addProduct = (data:Product ) => {
        products.push(data)
    }

    addProduct({
        title: "Pro 1",
        createAt: new Date,
        stock: 12,
        size: "M"});

    addProduct({
        title: "Pro 1",
        createAt: new Date,
        stock: 12});

    console.log(products)

})();