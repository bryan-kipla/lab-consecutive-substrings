function consecutiveSubstrings(str) {
  const result = [];

  for (let start = 0; start < str.length; start++) {
    let substring = '';
    for (let end = start; end < str.length; end++) {
      substring += str[end];
      result.push(substring);
    }
  }

  return result;
}

if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;