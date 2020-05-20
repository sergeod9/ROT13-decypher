function rot13(str) {
  //ascii capital alphabet 65 - 90
  const upperRegex = /[A-Z]/;
  let deciphered = "";
  
  for (let i = 0; i < str.length; i++){
    const shift13 = 13;
    let asciiCode = upperRegex.test(str[i]) ? str.charCodeAt(i) : null;
    if (asciiCode){
      let zeroedShift = asciiCode - shift13 - 65;
      if(zeroedShift < 0){
        zeroedShift = 26 + zeroedShift;
      }
      deciphered += String.fromCharCode(zeroedShift + 65);
    }
    else{
      deciphered += str[i];
    }

  }
   return deciphered;
}

//TEST
rot13("SERR PBQR PNZC");
