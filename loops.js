

function forLoop(array){ for (let i = 0; i < 25 ;i++)

    array.push(`I am ${i} strange loops.`)
    return array

}


function whileLoop(n){ while(n > 0)
  console.log(--n)
  return 'done'
}


function doWhileLoop(array){
  do { function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
  array.pop()
} while (maybeTrue());

  } while (array.length > 0 && maybeTrue(false));
  return array
}
