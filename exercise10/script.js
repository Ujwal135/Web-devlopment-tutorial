temptext = document.querySelector(".text");

let warnings = [
  "Initializing Hacking....",
  "Reading Your Files...",
  "Password Fills Detected... ",
  "Sending all passwords and files to Server...",
  "cleaning Up...",
];

async function texter(warnings) {
  for (const element of warnings) {
    temptext.textContent = element;
    console.log(element);

    let warn = await new Promise((resolve) => setTimeout(resolve, 8000));
  }
}

texter(warnings);
