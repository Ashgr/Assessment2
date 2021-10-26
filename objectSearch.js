const contains = (obj, value) =>{
    for(var key in obj){
        var currentValue = obj[key];
        // console.log(currentValue)
        if(typeof currentValue === 'object'){
            return contains(obj[key], value);
        }
        else if(currentValue == value)
            return true;
    }
    return false;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2',
                    }
                }
            }
        },
    },

}
console.log(contains(nestedObject, 44));

