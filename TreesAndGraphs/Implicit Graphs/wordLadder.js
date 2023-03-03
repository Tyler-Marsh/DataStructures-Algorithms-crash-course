/* 
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// if im doing bfs maybe it could be dfs
var ladderLength = function (beginWord, endWord, wordList) {
  let alphabet = [];
  for (i = 0; i < 26; i++) {
    alphabet.push((i + 10).toString(36));
  }
  const wordSet = new Set(wordList);
  let queue = [beginWord];
  let steps = 1;

  while (queue.length) {
    const nextQueue = [];

    // loop over each word in the queue
    for (let word of queue) {
      if (word === endWord) {
        return steps;
      }

      // loop over each char of the word
      for (let i = 0; i < word.length; i++) {
        // and replace the char with letters from [a - z]
        for (const letter of alphabet) {
          const newWord = word.slice(0, i) + letter + word.slice(i + 1);

          // if the new word exist in the word list add it to the queue
          if (wordSet.has(newWord)) {
            nextQueue.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }
    queue = nextQueue;
    steps++;
  }
  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);

// for (const change of [-1, 1]) {
//     let x = (+num + change + 10) % 10
//     ans.push(node.slice(0, i) + x + node.slice(i + 1));
// }

// for c in "ACGT":
//                 for i in range(len(node)):
//                     neighbor = node[:i] + c + node[i + 1:]
//                     if neighbor not in seen and neighbor in bank:
//                         queue.append((neighbor, steps + 1))
//                         seen.add(neighbor)
