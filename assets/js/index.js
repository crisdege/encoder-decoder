// var word = "Hello World";
var word = document.getElementById("wordToEncode").value;

const mapWord = (word) => {
  const mappedArray = [];
  word
    // .trim()
    .toLowerCase()
    .split("")
    .forEach((char) => {
      const ascii = char.charCodeAt();
      if (ascii >= 97 && ascii <= 122) {
        mappedArray.push(ascii - 96);
      }
    });
  // return mappedArray;

  //math array========================================================
  var mathArray = [];
  for (i = 0; i < mappedArray.length; i++) {
    if (i === 0) {
      num = mappedArray[0] + mappedArray[0 + 1];
    } else if (i === mappedArray.length - 1) {
      num = mappedArray[i] + mappedArray[i - 1];
    } else {
      num = mappedArray[i] + mappedArray[i - 1] + mappedArray[i + 1];
    }
    mathArray.push(num);
  }
  // return mathArray;
  //====================================================================
  //math for changing math so that numbers can be changed into letters
  var encodedArray = [];
  for (i = 0; i < mathArray.length; i++) {
    if (mathArray[i] > 78) {
      num = mathArray[i] - 78;
    } else if (mathArray[i] > 52 && mathArray[i] < 78) {
      num = mathArray[i] - 52;
    } else if (mathArray[i] > 26 && mathArray[i] < 52) {
      num = mathArray[i] - 26;
    } else {
      num = mathArray[i];
    }
    encodedArray.push(num);
  }
  // return encodedArray;
  //breaks down the big array into a small array----------------------
  // var shortArrays = [],
  //   i,
  //   len;

  // for (i = 0, len = mappedArray.length; i < len; i += 3) {
  //   shortArrays.push(mappedArray.slice(i, i + 3));
  // }

  // for (i = 0, len = shortArrays.length; i < len; i++) {
  //   return shortArrays;
  // }
  //-----------------------------------------------------------------

  //changes number array into corresponding character-----------------
  const answer = encodedArray
    .toString()
    .split(",")
    .map((x) => +x + 96)
    .map(String.fromCharCode)
    .join("");
  return answer;
  //-----------------------------------------------------------------
};

function encodeFunction() {
  let word = document.getElementById("wordToEncode").value;

  document.getElementById("demo").innerHTML = mapWord(word);
  console.log(mapWord(word));
}

encodeFunction();
