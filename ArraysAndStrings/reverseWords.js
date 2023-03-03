function reverseWords(s) {
  function trim(s) {
    let left = 0;
    let right = s.length - 1;

    while (left <= right && s[left] == " ") {
      left += 1;
    }

    while (left <= right && s[right] == " ") {
      right -= 1;
    }
    output = [];
    while (right >= left) {
      // only add a space if the next isn't also a space
      if (s[right] !== " ") {
        output.push(s[right]);
      } else if (s[right] === " " && s[right - 1] !== " ") {
        output.push(s[right]);
      }
      right -= 1;
    }
    return output;
  }

  function reverseWords(l) {
    n = l.length;
    let trail = l.length;
    let lead = l.length;
    let outputArray = [];
    while (trail > -1 && lead > -1) {
      if (l[lead - 1] === " ") {
        outputArray.push(l.slice(lead, trail).join(""));
        lead--;
        while (trail > lead) {
          trail--;
        }

        outputArray.push(" ");
      }

      if (lead === 0) {
        outputArray.push(l.slice(lead, trail).join(""));
        while (trail > lead) {
          trail--;
        }
        lead--;
      }

      if (l[lead] !== " ") {
        lead--;
      }
      if (l[lead] === " " && lead === trail) {
        lead--;
      }
    }
    return outputArray;
  }

  let o = trim(s);
  o = reverseWords(o);

  return o.join("");
}

console.log(reverseWords("God Ding"));

console.log(reverseWords("Let's take LeetCode contest"));
