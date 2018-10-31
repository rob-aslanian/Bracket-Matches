const test = document.querySelector("#field"),
  getMsg = document.querySelector(".alert");

test.addEventListener("input", matchBrackets);

function matchBrackets(e) {
  let arr = e.target.value.split(""),
    correct = 0;

  if (arr.indexOf("(") !== -1 && arr.indexOf(")") !== -1) {
    let opBrIdxs = getAllIndexes(arr, "("),
      clBrIdxs = getAllIndexes(arr, ")");

    // If Count of open and close brackets not match
    if (opBrIdxs.length !== clBrIdxs.length)
      return (getMsg.textContent = "Bracket count not match");

    // Count how much time open bracket is less than close
    opBrIdxs.forEach((el, idx) => {
      if (el < clBrIdxs[idx]) correct++;
    });

    // If counts correct equal to open bracket indexes
    if (correct === opBrIdxs.length) {
      return (getMsg.textContent = "Brackets is match");
    } else {
      return (getMsg.textContent = "Brackets don't match");
    }
  } else {
    return (getMsg.textContent = "Brackets was not found");
  }
}

function getAllIndexes(arr, val) {
  var indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}
