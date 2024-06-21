const hasEqualFrequency = (num1, num2) => {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length !== str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
        if (!str2.includes(str1[i])) {
            return false
        }
    }
    return true;
}

console.log("1. ", hasEqualFrequency(22, 222));
console.log("2. ", hasEqualFrequency(34, 14));
console.log("3. ", hasEqualFrequency(182, 281));
console.log("4. ", hasEqualFrequency(358967, 678935));