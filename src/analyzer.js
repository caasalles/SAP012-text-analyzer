const analyzer = {
  getWordCount: (text) => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    return words.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const cleanText = text.replace(/[^\w\s]/g, '').replace(/\s+/g, '');
    return cleanText.length;
  },
  getAverageWordLength: (text) => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const totalWordLength = words.reduce((acc, word) => acc + word.length, 0);
    return words.length > 0 ? totalWordLength / words.length : 0;
  },
  getNumberCount: (text) => {
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.length : 0;
  },
  getNumberSum: (text) => {
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.reduce((acc, num) => acc + parseInt(num), 0) : 0;
  },
};

export default analyzer;
