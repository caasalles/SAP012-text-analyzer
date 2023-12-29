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
    let noSpaceCount = 0;
    for(let i = 0; i < cleanText.length; i++) {
      if (cleanText[i] !== '') {
        noSpaceCount++;
      }
    }
    return cleanText.length;
  },
  getAverageWordLength: (text) => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    if(words.length === 0) {
      return 0;
    }
    const totalWordLength = words.reduce((acc, word) => acc + word.length, 0);
    return totalWordLength / words.length
  },
  getNumberCount: (text) => {
    const numbers = text.match(/[-+]?\d*\.?\d+/g);
    return numbers ? numbers.filter(num => !isNaN(parseFloat(num))).length : 0;
  },
  getNumberSum: (text) => {
    const numbers = text.match(/[-+]?\d*\.?\d+/g);
    return numbers ? numbers.reduce((acc, num) => acc + (isNaN(parseFloat(num)) ? 0 : parseFloat(num)), 0) : 0;
  },
};

export default analyzer;
