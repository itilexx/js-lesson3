for (let i = 1; i<= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }else if(i%3===0){
        console.log('Fizz');
    }else if (i%5 === 0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}


//Dop dz

const arr = ['milk', 'beer', 'beer', 'milk', 'milk'];
let i = 0;

while (i < arr.length) {
  if (arr[i] === 'milk') {
    console.log('good');
  } else if (arr[i] === 'beer') {
    console.log('bad');
  }
  i++;
}