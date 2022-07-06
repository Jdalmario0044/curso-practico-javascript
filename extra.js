let numbers= [7,6,44,101,55,60,82,1,57,6];
numbers.sort( (a,b) => {
    if (a==b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;
});

console.log(numbers);