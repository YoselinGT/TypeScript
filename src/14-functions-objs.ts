(() => {
    type Sizes =  'S' | 'M' | 'L' | 'XL'
    const login = (data:{email: string, password: string}) => {
        console.log(data)
    }

    const data = {
        email: "yoselin@mail.com", password: "werty123"
    }

    login(data)

    const products = [];

    const addProduct = (data: {
        title: string,
        createAt: Date,
        stock: number,
        size?: Sizes
    }) => {
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