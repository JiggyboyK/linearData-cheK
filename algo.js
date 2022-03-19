let set1 = [12,13,6,10];
let  set2 = [13,10,16,15];


function totalSum(arr){
    let sum = 0;
  for ( let i = 0; i < arr.length; i++){
      sum += arr[i]
  }
  return sum;
}

console.log(totalSum(set1))
console.log(totalSum(set2))