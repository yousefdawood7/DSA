export function longestCommonPrefix(strs: string[]): string {
  // prettier-ignore
  if (!strs.length)
    return "";

  // prettier-ignore
  if(strs.length === 1)
    return strs[0]

  const firstWord = strs[0];
  let prefixLetters = "";
  let currentSlice = "";

  for (let i = 0; i < firstWord.length; ++i) {
    let isCommonPrefix = true; // we using this flag to ensure the rest of the words has the same prefix
    currentSlice += firstWord[i];

    for (let j = 0; j < strs.length; ++j) {
      let slicedString = "";
      for (
        let k = 0;
        k < strs[j].length && k <= i;
        ++k // we want the slice of string's slice to be the as the currentSlice
      )
        slicedString += strs[j][k];

      // prettier-ignore
      if (currentSlice !== slicedString)
        isCommonPrefix = false;
    }
    /*
      if it's not a common prefix we return the last common prefix we had 
      (because at that point we will have the current common prefix)
    */
    // prettier-ignore
    if (!isCommonPrefix) 
        return prefixLetters
    prefixLetters += firstWord[i];
  }

  return prefixLetters;
}

// problem: https://leetcode.com/problems/longest-common-prefix/
