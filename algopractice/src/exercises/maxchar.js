// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let split = str.split('');
    let chars = {};
    for (let char of split) {
        chars[char] = chars[char] + 1 || 1;
    }
    return Object.keys(chars).reduce(function(a,b){return chars[a] > chars[b] ? a : b})
}

module.exports = maxChar;