

// sattel means resolve or reject
// resolve means promiss has setteld successfully
// reject means promise has not setteld.



async function getData2() {
  //api link
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // parsing variable X into var_data in json formet, we can parce in text formet also
  let data = await x.json();
  return data;
}

async function main() {
    
  console.log("Loading module  ");
  console.log("data processing ..");

  let data = await getData2();

  console.log(data);
  console.log("data processing done  .....  ");
}

main();
