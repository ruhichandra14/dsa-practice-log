const isAveragePair = (arr, avg) => {
    if (!arr || !arr.length) return false;
    let left = 0; 
    let right = arr.length-1;

    while(left < right){
        let tempAvg = (arr[left] + arr[right])/2;
        if(tempAvg === avg){
            return true;
        }
        else if(tempAvg>avg){
            right--;
        }
        else {
            left++;
        }
    }
    return false;
}

console.log("1. ", isAveragePair([1, 2, 3], 2.5));
console.log("2. ", isAveragePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log("3. ", isAveragePair([], 4));