// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
   let newStr = "";
   
   let arr = [...str];

   console.log(arr)

   for (let i = arr.length - 1; i >= 0; i--){
    newStr = newStr.concat(arr[i]);
   }
   
   return newStr
};

reverse("Hello");