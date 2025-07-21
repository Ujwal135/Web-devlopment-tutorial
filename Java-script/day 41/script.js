// java-script has Asynchronous Nature of

console.log("ujjwal is hacker"); // first print statement

console.log("pariniti is Hecker"); // second print statement

setTimeout(() => {
  console.log("This is 1st time out ");
}, 2000);

setTimeout(() => {
  console.log("This is 2nd time out ");
}, 1000);

console.log("The end "); // "This should be last "

// Callbacks in javascript

const callbacks = (arg) => {
  console.log(arg);
};

const loadScript = (src, callbacks) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callbacks("Ujjwal");
  document.head.append(sc)
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js",callbacks)

    // const loadScript1 =(src) =>{
    //     let ac = document.createElement("script");
    //     ac.src =src;
    //     ac.onload = "ujjwal1232"
    //     document.head.append(ac)
    // }
    // loadScript1("promises.js")