// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist
var selectionSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    return arr
}

var mostSongsInPlaylist = function(arr) {
  // add your code here...
  let total = 0;

  arr = selectionSort(arr)

  for (let k = 0; k < arr.length; k++){
    if (total + arr[k] >= 60) {
      return k
    }
    total = total + arr[k]
  }

   return arr.length
};

