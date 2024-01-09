const analyzer = {  
  getWordCount: (text) => {
    const words = text.split(' ');
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
    return noSpaceCount;
  },
  getAverageWordLength: (text) => {    
    const words = text.split(' ');
    let totalWordLength = 0;
    for (let i = 0; i < words.length; i++) {
      totalWordLength += words[i].length;
    }
    const result = (totalWordLength / words.length).toFixed(2);

    return Number(result);
  },
  getNumberCount: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if(numbers){
      
      return numbers.length; 
    } else {
      return 0;
    }
  },
  getNumberSum: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if(numbers){
      let sum = 0; 
      for(let i = 0; i < numbers.length; i++){
        sum += Number(numbers[i]);
      }
      return sum; 
    } else {
      return 0;
    }
  },
};

export default analyzer;