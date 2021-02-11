// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str){
    let reversed = '';
    for (let char of str){
        reversed = char + reversed
    };
    return reversed;
}

// USING REVERSE HELPER
// return str
//         .split('')
//         .reverse()
//         .join('')

// USING A FOR LOOP
// let reversed = '';
// for (let char of str) {
//     reversed = char + reversed;
// }
// return reversed;

// USING THE REDUCE HELPER

// return str.split('').reduce((rev,char) => char + rev, '')