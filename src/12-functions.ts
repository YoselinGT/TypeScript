(() => {

    type Sizes =  'S' | 'M' | 'L' | 'XL'
    function createProductoToJson(
        title: string,
        createAt: Date,
        stock: number,
        size: Sizes
    ){
        return {
            title,
            createAt,
            stock,
            size
        }

    }

    const  createProductoToJsonDos = (
        title: string,
        createAt: Date,
        stock: number,
        size?: Sizes
    ) => {
        return {
            title,
            createAt,
            stock,
            size
        }

    }

    const producto1 = createProductoToJson("P1",new Date(),12,"S")
    const producto2 = createProductoToJsonDos("P1",new Date(),12,"S")
    const producto3 = createProductoToJsonDos("P1",new Date(),12)
    console.log(producto3)
})();