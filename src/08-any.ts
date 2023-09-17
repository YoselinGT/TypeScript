(() => {
    let myDynamicVar: any;
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';

    myDynamicVar= "Hola"
    const rta = (myDynamicVar as string).toLowerCase()
    console.log(rta)

    myDynamicVar = 123;
    const rtanumber = (<number>myDynamicVar).toFixed()
    console.log(rtanumber)
})()