function getStringLength(value) {
  return value ? value.length : 0;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}

function getFirstChar(value) {
  return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value ? value.trim() : '';
}

function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}

function repeatString(str, times) {
  return str && times > 0 ? str.repeat(times) : '';
}

function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

function sumOfCodes(str) {
  if (!str) return 0;
  return Array.from(str).reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
}

function startsWith(str, substr) {
  return str.startsWith(substr);
}

function endsWith(str, substr) {
  return str.endsWith(substr);
}

function formatTime(minutes, seconds) {
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  return `${m}:${s}`;
}

function reverseString(str) {
  return str ? str.split('').reverse().join('') : '';
}

function orderAlphabetically(str) {
  return str ? str.split('').sort().join('') : '';
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

function countVowels(str) {
  if (!str) return 0;
  const matches = str.match(/[aeiouyAEIOUY]/g);
  return matches ? matches.length : 0;
}

function isPalindrome(str) {
  if (!str) return false;
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return normalized === normalized.split('').reverse().join('');
}

function findLongestWord(sentence) {
  if (!sentence) return '';
  const words = sentence.split(/\s+/);
  return words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ''
  );
}

function reverseWords(str) {
  if (!str) return '';
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function invertCase(str) {
  if (!str) return '';
  return str
    .split('')
    .map((ch) => {
      if (ch >= 'a' && ch <= 'z') return ch.toUpperCase();
      if (ch >= 'A' && ch <= 'Z') return ch.toLowerCase();
      return ch;
    })
    .join('');
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.replace(/^Hello, /, '').replace(/!$/, '');
}

function unbracketTag(str) {
  return str.replace(/^<|>$/g, '');
}

function extractEmails(str) {
  return str.split(';');
}

function encodeToRot13(str) {
  return str.replace(/[A-Za-z]/g, function (c) {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
}

function getCardId(value) {
  const suits = ['♣', '♦', '♥', '♠'];
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  const suit = value.slice(-1);
  const rank = value.slice(0, -1);
  return suits.indexOf(suit) * ranks.length + ranks.indexOf(rank);
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
