function isAnagram(s: string, t: string): boolean {
  // prettier-ignore
  if (s.length !== t.length)
    return false;

  const lettersMap = new Map<string, number>();

  [...s].forEach((letter) => {
    if (lettersMap.has(letter))
      return lettersMap.set(letter, lettersMap.get(letter)! + 1);
    lettersMap.set(letter, 1);
  }); // O(n)

  for (let i = 0; i < t.length; ++i) {
    // prettier-ignore
    if (!lettersMap.has(t[i])) 
      return false;

    lettersMap.set(t[i], lettersMap.get(t[i])! - 1);
  }

  // prettier-ignore
  for (const [, counter] of lettersMap)
    if (counter !== 0) return false;
  return true;
}

/*
  TIME COMPLEXITIES ==> O(n)
  SPACE COMPLEXITY ==> O(n)
*/

function isAnagram2(s: string, t: string): boolean {
  // prettier-ignore
  if (s.length !== t.length)
    return false;

  const firstArray = [...s].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  const secondArray = [...t].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  // prettier-ignore
  if(firstArray.join() === secondArray.join())
    return true
  return false;
}

/*
  TIME COMPLEXITIES ==> TODO
  SPACE COMPLEXITY ==> O(1)
*/
