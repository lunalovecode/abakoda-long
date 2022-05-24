var n = parseInt(readline(), 10);
var a = [2, 3];
function findNextTerm(num) {
    /*
    if (num === 0 || num === 1) {
        return a[num];
    } else {
        return (2 * findNextTerm(num - 1)) - findNextTerm(num - 2) + 2;
        
    }
    */
    return Math.pow(num, 2) + 2;
}

print(findNextTerm(n));