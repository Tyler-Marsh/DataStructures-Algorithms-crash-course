// ffs terrible fucking guide

var simplifyPath = function (path) {
  let stack = ["/"];
  let dotCount = 0;
  let currChar = "";
  let currDeleted;
  let slashCount = 0;
  let leadwithDot = false;
  let 
  for (let i = 1; i < path.length; i++) {
    currChar = path[i];
    stack.push(currChar);
    if (
      stack.length > 2 &&
      stack[stack.length - 2] === "/" &&
      currChar === "/"
    ) {
      stack.pop();
    }
    // /hello../world
    if (currChar === "." &&  ) {
      dotCount += 1;
    }
    if (dotCount === 2 && currChar !== "/" && currChar !== ".") {
      dotCount = 0;
    }

    if (
      currChar === "/" ||
      (i === path.length - 1 && currChar === ".") ||
      currChar === "/"
    ) {
      if (dotCount === 1 && prevChar === ".") {
        currDeleted = stack.pop();
        currDeleted = stack.pop();
        dotCount = 0;
        continue;
      }

      if (dotCount === 2) {
        slashCount = 2;
        if (currChar === "/") {
          slashCount++;
        }
        while (slashCount > 0 && stack.length > 1) {
          currDeleted = stack.pop();
          if (currDeleted === "/") {
            slashCount--;
          }
        }
        if (stack.length > 1) {
          stack.push("/");
        }

        dotCount = 0;
      }
      if (dotCount > 2) {
        dotCount = 0;
      }
    }

    prevChar = currChar;
  }

  if (stack[stack.length - 1] === "/") stack.pop();
  if (stack.length === 0) stack.push("/");
  if (stack.length === 2 && currChar === ".") stack.pop();

  return stack.join("");
  // automatically start with a '/' because prompt said that's what it'll come with
  // solve for
  // case    /./
  // case  /../
  // case  //// skip and just keep /
  // case /.. and it ends
};

// let path = "/home/";

// let path1 = "/../home/.."; // should be  / ?

// let path2 = "/home/./foo/";

// console.log("Expected: /, actual: ", simplifyPath(path1));

// console.log("Expected: /home/foo , actual: ", simplifyPath(path2));

// console.log(
//   "Expected : /a/b/c, actual: ",
//   simplifyPath("/a//b////c/d//././/..")
// );

//console.log("Expected: /..hidden, actual: ", simplifyPath("/..hidden/"));

// console.log("Expected: /.hidden, actual: ", simplifyPath("/.hidden/"));

// console.log("Expected: /c", simplifyPath("/a/./b/../../c/"));

// console.log("Expected: /", simplifyPath("/."));

// "/hello../world"
console.log("Expected: ", simplifyPath("/hello../world"));
// "/..hidden/"
// expected /..hidden
/* 
Input:
"/.hidden/"
Output:
"/.hidde"
Expected:
"/.hidden"

*/
