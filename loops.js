function forLoop(array){
  for(let i = 0; i < 25; i++){
    if(i === 1){
      array.push('I am ' + i + ' strange loop.');
    }
    else{
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array
}

function whileLoop(n){
  let number = n;
  return number;
}

while (n > 0){
  --whileLoop();
  console.log(--whileLoop);
  if (n === 0){
    console.log('done');
  }
}

function doWhileLoop(array){
  var array = [];
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  return array;
}

do{
  --doWhileLoop()
}while(array.length > 0 && maybeTrue())
