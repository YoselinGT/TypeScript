(() => {
    let userId: string | number;
    userId = 1212;
    userId = 'qwe'

    function  greeting(myText: string | number){
        if(typeof myText === 'string'){
            myText.toLowerCase()
        } else {
            myText.toFixed(1)
        }

        console.log(myText)
    }

    greeting("QWHWIUH")
    greeting(1212.132334)
})();