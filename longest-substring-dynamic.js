function createMultDimArray(first, second) {
  var arr = new Array(first);
  for (var i = 0; i < first; i++) {
    arr[i] = new Array(second);
  }
  console.log(arr);
  return arr;
}


function substring(first, second) {

  const matchMatrix = createMultDimArray(first.length, second.length);
  var longest = 0;
  var longestSubstrings = {};

  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] == second[j]) {
        if (i == 0 || j == 0) {
          matchMatrix[i][j] = 1;
        } else {
          var value = matchMatrix[i - 1][j - 1];
          matchMatrix[i][j] = value + 1;
        }
        if (matchMatrix[i][j] > longest) {
          console.log("increased longest");
          longest = matchMatrix[i][j];
          longestSubstrings = {};
          longestSubstrings[first.substring(i - longest + 1, i + 1)] = true;
        } else if (matchMatrix[i][j] == longest) {
          console.log("found another longest");
          longest = matchMatrix[i][j];
          longestSubstrings[first.substring(i - longest + 1, i + 1)] = true;
        }


      } else {
        matchMatrix[i][j] = 0;
      }

    }
  }
  return Object.keys(longestSubstrings);
}
