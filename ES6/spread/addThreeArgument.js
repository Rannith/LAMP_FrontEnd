var array = [22,45,21,67,32,1];

function addThreeArgument(arg1,arg2,arg3) {
    let sum = arg1+arg2+arg3;
    return sum;
}

const result = addThreeArgument(...array);

console.log(result);
