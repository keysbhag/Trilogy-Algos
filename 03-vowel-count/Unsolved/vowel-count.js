// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        console.log(str[i].toLowerCase());
        switch (str[i].toLowerCase()) {
          case "a":
            count++;
            break;
          case "e":
            count++;
            break;
          case "i":
            count++;
            break;
          case "o":
            count++;
            break;
          case "u":
            count++;
            break;
        }
    }
    return count;
};

vowelCount("Yolo");