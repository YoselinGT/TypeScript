(() => {
    let productoTitle = 'Mi producto';
    // productoTitle = null;
    // productoTitle = () => {}
    // productoTitle = 123;
    productoTitle = 'Mi otro titulo';

    console.log("productoTitle",productoTitle);

    const productDescription = "I'm Bla bla bla"
    console.log("productDescription",productDescription)

    const summary = `
            Multiples lineas
            title: ${productoTitle}
            descripcion: ${productDescription}
    `;

    console.log(summary);
})();