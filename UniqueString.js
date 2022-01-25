function makeUnique(str) {
  return String.prototype.concat(...new Set(str));
}

console.log(makeUnique("abcabc"));
console.log(makeUnique("lalalala"));
