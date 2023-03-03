function reverse(s) {
  let aSwitch = false;
  let inAWord = false;
  let tempAr = [];
  let ansAr = [];
  let charTest = /^[A-Za-z0-9]*$/;
  for (let i = 0; i < s.length; i++) {
    if (charTest.test(s[i]) && inAWord === false && tempAr.length > 0) {
      ansAr.unshift(tempAr.join(""));
      tempAr = [];
      inAWord = true;
    }

    if (charTest.test(s[i])) {
      inAWord = true;
      tempAr.push(s[i]);
    }

    if (s[i] === " ") {
      inAWord = false;
    }
  }

  if (tempAr.length !== 0) {
    ansAr.unshift(tempAr.join(""));
  }

  return ansAr.join(" ");
}

console.log(reverse("the sky is blue"));

console.log(reverse("a good   example"));

console.log(reverse("  hello world  "));

function shortReverse(s) {
  let ar = s.trim().split(" ");
  let resultAr = [];
  let hasSpace = false;

  for (let i = ar.length; i > 0; i--) {}
}
