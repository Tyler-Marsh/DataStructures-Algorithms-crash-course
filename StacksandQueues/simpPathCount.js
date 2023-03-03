var simplifyPath = function (path) {
  let stack = ["/"];
  let currChar = "";
  let realCharsAfterSlash = 0;
  let dotsAfterSlash = 0;

  for (let i = 1; i < path.length; i++) {
    currChar = path[i];
    stack.push(currChar);

    if (currChar !== "." && currChar !== "/") {
      realCharsAfterSlash++;
      dotsAfterSlash = 0;
    }
    if (realCharsAfterSlash < 1 && currChar === ".") {
      dotsAfterSlash++;
    }

    if (currChar === "/" && realCharsAfterSlash > 0) {
      realCharsAfterSlash = 0;
      dotsAfterSlash = 0;
    }

    if 
  }
};
// "/hello../world"
