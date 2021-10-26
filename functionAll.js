const all = (array, checkCondition) =>{
    for(let i = 0 ; i<array.length ;i++){
        if(!checkCondition(array[i]))
            return false;
    }
    return true;
}

// check if every element in the array less than 100
console.log(all([12, 15, 52 , 88, 100],(number)=>{
    return number < 100;
}))