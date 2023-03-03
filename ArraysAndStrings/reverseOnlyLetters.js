function ReverseOnlyLetters(s) {
  const e = /^[A-Za-z]*$/;

  let ans = s.split("");
  let right = ans.length - 1;
  let temp;
  let left = 0;

  while (left <= right) {
    if (e.test(ans[left]) && e.test(ans[right])) {
      temp = ans[right];
      ans[right] = ans[left];
      ans[left] = temp;
      right--;
      left++;
      continue;
    }

    if (!e.test(ans[left]) && e.test(ans[right])) {
      left++;
      continue;
    }

    if (!e.test(ans[right]) && e.test(ans[left])) {
      right--;
      continue;
    }

    if (!e.test(ans[left]) && !e.test(ans[right])) {
      right--;
      left++;
    }
  }
  return ans.join("");
}

// WORKS HERE
//console.log(ReverseOnlyLetters("ab-cd"));

// WORKS HERE
//console.log(ReverseOnlyLetters("a-bC-dEf-ghIj"));
// WORKS HERE
console.log(ReverseOnlyLetters("Test1ng-Leet=code-Q!"));

// "Qedo1ct-eeLg=ntse-T!"
//  Q && !  now check next
//
// WORKS HERE
console.log(ReverseOnlyLetters("-S2,_"));

console.log(ReverseOnlyLetters("?6C40E"));

// 4
// 0
// do they no test properly

// for (const [index, element] of foobar.entries()) {
//     console.log(index, element);
//   }
function LCSolution(s) {
  let ans = [];
  j = s.length - 1;
  const e = /^[A-Za-z]*$/;
  let list = s.split("");

  for (const [index, element] of list.entries()) {
    if (e.test(element)) {
      while (!e.test(s[j])) {
        j -= 1;
      }
      ans.push(s[j]);
      j -= 1;
    } else {
      ans.push(element);
    }
  }
  return ans.join("");
}
// Qedo1ct-eeLg=ntse-T!
console.log(ReverseOnlyLetters("Test1ng-Leet=code-Q!"));

/* 
Intuition

Write the characters of S one by one. When we encounter a letter, we want to write the next letter that occurs if we iterated through the string backwards.

So we do just that: keep track of a pointer j that iterates through the string backwards. When we need to write a letter, we use it.

write characters if they are special.
Otherwise iterate backwards until we get a regular character
and get that one
*/
