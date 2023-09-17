(() => {
    let myNull = null;
    let myUndefined = undefined;
    console.log("myNull",myNull)
    console.log("myUndefined",myUndefined)

    myNull = 21;
    console.log("myNull",myNull)
    myNull = "hola";
    console.log("myNull",myNull)

    let myNumber: number | null = null;
    myNumber = 12;
    console.log("myNumber",myNumber)


    let myString: string | undefined = undefined;
    myString = 'adsd'
    console.log("myString",myString)
    /* function hi(name: string | null){
        console.log("entramos")
        let hello = "Hola";
        if(name) {
            hello += 'name'
        } else {
            hello += 'nodoby'
        }

        console.log(hello)
    }*/

    function hi(name: string | null){
        console.log("entramos")
        let hello = "Hola";
        hello +=  name?.toLowerCase() || " nobody";

        console.log(hello)
    }

    hi(null)
    hi("Yoselin")
})();