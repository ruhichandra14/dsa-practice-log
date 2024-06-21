const areThereDuplicates = (...args) => {
    let obj = {};
    for(let i=0; i<args.length; i++){
        if(!obj[args[i]]){
            obj[args[i]] = 1;
        }
        else {
            return true;
        }
    }
    return false;
}

console.log("1. ", areThereDuplicates(2, 22));
console.log("2. ", areThereDuplicates(1, 2, 2));
console.log("3. ", areThereDuplicates("a", "b", "c", "a"));
console.log("4. ", areThereDuplicates(1, 2, 3, 4, 5));