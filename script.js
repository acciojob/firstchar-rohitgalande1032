function firstChar(str) {
  if(str === " "){
    return `${" "}`;
  }
  
  if(str === ""){
    return `${''}`;
  }
  
  let str1 = str.trim();
  return str1[0]
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
