(() => {
    let prices = [1,2,3,4,5,6,'hola',true]
    prices.push("Hola");
    prices.push(true);
    //prices.push({})
    prices.push(7)
    prices = [1,2,3]

    let mixed: (number | string | boolean)[] = ['hola', true];
    mixed.push(12);
    mixed.push("as")
    mixed.push(true)
    //mixed.push({})


    let numbers = [1,2,3,4,5,6,];
    numbers.map(item => item*2)
    console.log(numbers)
})();