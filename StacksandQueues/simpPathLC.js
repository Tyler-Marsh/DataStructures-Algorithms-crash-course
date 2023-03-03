var simplifyPath = function (path) {
  let components = path.split("/");
  let stack = [];
  for (const part of components) {
    if (part === "." || part === "") {
      continue;
    } else if (part === "..") {
      if (stack.length !== 0) {
        stack.pop();
      }
    } else {
      // Finally, a legitimate directory name, so we add it
      // to our stack
      stack.push(part);
    }
  }
  let returnStack = [];
  for (let i = 0; i < stack.length; i++) {
    returnStack.push("/");
    returnStack.push(stack[i]);
  }
  return returnStack.length > 0 ? returnStack.join("") : "/";
};

// console.log("Expected: / actual: ", simplifyPath("/."));

// console.log("Expected: / actual: ", simplifyPath("/./"));

// console.log(
//   "Expected: /qvzVS/oBx/lyLw",
//   simplifyPath("/./qvzVS/oBx/vIN///../lyLw////")
// );

console.log("Expected: /c, actual: ", simplifyPath("/a/./b/../../c/"));
