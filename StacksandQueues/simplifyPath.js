//path consists of English letters, digits, period '.', slash '/' or '_'.
/* 
The canonical path should have the following format:
The path starts with a single slash '/'.
Any two directories are separated by a single slash '/'.
The path does not end with a trailing '/'.
The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
Return the simplified canonical path.
*/
// / a / . b/ ../
// / a / .
var simplifyPath = function (path) {
  let stack = [];
  let currPathUnit = [];
  let dotCount = 0;
  let currIndex;
  let numToPop = 0;
  let countSlashes = 0;
  let currDeleted = "";
  let curr = "";
  // when i = 12 there is an issue;
  for (let i = 0; i < path.length; i++) {
    // 1. remove double slashes because they don't mean anything

    curr = path[i];

    // Don't push a second consecutive slash
    if (path.length - 1 === i) {
      stack.push(path[i]);
    }
    if (path[i] === "/" || i === path.length - 1) {
      //   if (stack[stack.length - 1] === "/") {
      //     continue;
      //   }

      if (stack[stack.length - 1] !== "." && stack[stack.length - 1] !== "/") {
        stack.push("/");
        continue;
      }

      // handle ./
      // and ../?
      currIndex = stack.length - 1;
      if (i === path.length - 1) {
        currIndex = stack.length - 2;
      }
      if (stack[currIndex] === ".") {
        while (stack[currIndex] === ".") {
          currIndex--;
          dotCount++;
        }

        if (dotCount === 1) {
          countSlashes = 1;
          dotCount = 0;
          while (countSlashes > 0 && stack.length > 0) {
            currDeleted = stack.pop();
            if (currDeleted === "/") {
              countSlashes--;
            }
          }
          if (stack[stack.length - 1] !== "/") {
            stack.push("/");
          }
        }
        // counted the dots
        // if it is a 3 + do nothing and put in the stack
        if (dotCount > 2) {
          dotCount = 0;
        } else if (dotCount === 2) {
          // must remove all the way until 2nd /
          // or on the last char of the stack
          /* WHY COUNT SLASHES?*/
          while (dotCount > 0) {
            stack.pop();
            dotCount--;
          }
          countSlashes = 2;
          // while countSlashes > 0///
          // what if it is just a slash?
          while (countSlashes > 0 && stack.length > 1) {
            currDeleted = stack.pop();
            if (currDeleted === "/") {
              countSlashes--;
            }
          }
          if (stack[stack.length - 1] !== "/") {
            stack.push("/");
          }
        }

        // only 1 dot???
        // only relevant if it is the first char? or second char
        // then get rid of the rest
        else {
          if (stack.length === 1) {
            stack = ["/"];
          }
          dotCount = 0;
        }
      }
    } else {
      stack.push(path[i]);
    }
  }

  // check for if

  while (stack[stack.length - 1] === "." && stack.length > 0) {
    stack.pop();
  }

  if (stack[stack.length - 1] === "/" && stack.length !== 1) {
    stack.pop();
  }
  return stack.join("");
};

let path = "/home/";

let path1 = "/../";

let path2 = "/home//foo/";

// console.log("Expected: /home, actual: ", simplifyPath(path));

console.log("Expected: /,  actual: ", simplifyPath(path1));

// console.log("Expected: /home//foo/,  actual: ", simplifyPath(path2));

// console.log(
//   "Expected: /MyProjects/NextBlog, actual: ",
//   simplifyPath("./MyProjects/Algos/../NextBlog")
// );

// console.log(
//   "Expected: /MyProjects/NextBlog, actual: ",
//   simplifyPath("./MyProjects/Algos/./NextBlog")
// );

// console.log("/ ", simplifyPath("/../"));

// console.log("expected: /c", simplifyPath("/a/./b/../../c/"));
// // ./../ === a path backwards

// // just remove

// // while loop a couple characters back when a dot is found?
// //?
// // ['/', 'a', '/', '.', '.', '/']

// console.log("Expected: /c, actual: ", simplifyPath("/a/../../b/../c//.//"));

// "/a//b////c/d//././/.."

// make the /. just remove itself entirely
// console.log(
//   "Expected: /a/b/c, actual: ",
//   simplifyPath("/a//b////c/d//././/..")
// );
