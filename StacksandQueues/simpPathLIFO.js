var simplifyPath = function (path) {
  let stack = [];
  // at the very end
  let currString = "";
  let slashCount = 0;
  let deletedChar = "";
  let charSlashCount = 0;
  for (let i = 0; i < path.length; i++) {
    // skip double slashes
    let c = path[i];
    if (c === "/" && stack[stack.length - 1] === "/") {
      continue;
    }

    stack.push(c);

    if (c === "/") {
      currString += c;
      charSlashCount++;
    } else {
      currString += c;
    }
    // //c ??

    if (charSlashCount === 2 || (charSlashCount === 1 && i === path.length - 1))
      if (currString == "/./") {
        currString = "";
        stack.pop();
        slashCount = 1;
        while (slashCount > 0 && stack.length > 0) {
          deletedChar = stack.pop();
          if (deletedChar === "/") {
            slashCount--;
          }
        }
        stack.push("/");
        charSlashCount = 1;
        currString = "/";
      } else if (currString == "/.." || currString == "/../") {
        currString = "";
        stack.pop();
        slashCount = 2;
        while (slashCount > 0 && stack.length > 0) {
          deletedChar = stack.pop();
          if (deletedChar === "/") {
            slashCount--;
          }
        }
        stack.push("/");
        charSlashCount = 1;
        currString = "/";
      } else if (charSlashCount === 2) {
        currString = "/";
        charSlashCount = 1;
      }
  }

  if (
    stack.length > 1 &&
    stack.join("").slice(stack.length - 2, stack.length) === "/."
  ) {
    stack = stack.slice(0, stack.length - 2);
  }

  // remove slash at the very end
  if (stack.length > 1 && stack[stack.length - 1] === "/") {
    stack.pop();
  }
  if (stack.length === 0) {
    stack.push("/");
  }
  // return the string
  return stack.join("");
};

// console.log(simplifyPath("/hello../world"));

console.log("Expected: /a/b/c", simplifyPath("/a//b////c/d//././/.."));

console.log("expected /hello../world ", simplifyPath("/hello../world/"));

console.log("expected: /hello..", simplifyPath("/hello../world/.."));

console.log("expected: /.hidden ", simplifyPath("/.hidden/."));

console.log("Expected: / actual: ", simplifyPath("/."));

console.log("Expected: / actual: ", simplifyPath("/./"));

console.log(
  "Expected: /qvzVS/oBx/lyLw",
  simplifyPath("/./qvzVS/oBx/vIN///../lyLw////")
);
// if dot look for exactly /./  /../ or /.. ?
// keep popping out to string build?
//
// "/hello../world"
// /.hidden/"));

// a/b/c
// "/a//b////c/d//././/.."

// /. how will I fix that case?

// Input:
// "/./"
// Output:
// "/."
// Expected:
// "/"
