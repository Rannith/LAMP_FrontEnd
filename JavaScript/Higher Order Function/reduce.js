const arr = [20,22,1,34,66,43,11];

const max = arr.reduce((value,index) => {
    return  Math.max(value,index);
});

console.log(max);