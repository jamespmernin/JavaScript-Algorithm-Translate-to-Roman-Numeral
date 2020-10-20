//TRANSLATE TO ROMAN NUMERALS
// This entire solution comes from https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript

const translateToRoman = num => {
  if (isNaN(num))
    return NaN; // this takes care of any pesky inputs that aren't formatted correctly.
  var digits = String(+num).split(""),
    // this key contains all possible numeral combinations that will be needed
    key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", // _, 100, 200, 300, 400, 500, 600, 700, 800, 900
      "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", //      _,  10,  20,  30,  40,  50,  60,  70,  80,  90
      "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], //     _,   1,   2,   3,   4,   5,   6,   7,   8,   9
    roman = "",
    i = 3; // technically, the largest number that can be expressed in roman numerals is 3999, i is for each "thousands" place
  while (i--)
    roman = (key[+digits.pop() + (i * 10)] || "") + roman; // this takes care of each place in the numeral: thousands, hundreds, tens, ones
  return Array(+digits.join("") + 1).join("M") + roman; // this joins everything together before returning the solution
}

console.log(translateToRoman(12))

module.exports = {
  translateToRoman
}
