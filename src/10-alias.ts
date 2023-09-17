(() => {
    type UserId = string | number | boolean;
    let userId:UserId ;


    //Literal types
    type Sizes =  'S' | 'M' | 'L' | 'XL'
    let shirtSize:Sizes;
    shirtSize = "M";
    shirtSize = "L";
    shirtSize = "XL";
    //shirtSize = "z";
    function  greeting(myText:UserId,size:Sizes){
        if(typeof myText === 'string'){
            myText.toLowerCase()
        }
        console.log(myText)
    }

    greeting("QWHWIUH","M")
    greeting(1212.132334,"S")
})();