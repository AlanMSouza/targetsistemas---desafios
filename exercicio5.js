function inverterString(str) {
    let strInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
      strInvertida += str[i];
    }
    return strInvertida;
  }
  
  const str = "odepipelelaraP";
  const strInvertida = inverterString(str);
  console.log(strInvertida);
  