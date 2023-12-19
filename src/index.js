import analyzer from './analyzer.js';

const metricas = (text) => {
  const wordCount = analyzer.getWordCount(text);
  const characterCount = analyzer.getCharacterCount(text);
  const averageWordLength = analyzer.getAverageWordLength(text);
  const numberCount = analyzer.getNumberCount(text);
  const numberSum = analyzer.getNumberSum(text);
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);

  document.querySelector('[data-testid="word-count"]').textContent = `Contagem de Palavras: ${wordCount}`;
  document.querySelector('[data-testid="character-count"]').textContent = `Contagem de Caracteres: ${characterCount}`;
  document.querySelector('[data-testid="character-no-spaces-count"]').textContent = `Contagem Sem Espaços/Pontuações: ${characterCountExcludingSpaces}`;
  document.querySelector('[data-testid="number-count"]').textContent = `Contagem de Números: ${numberCount}`;
  document.querySelector('[data-testid="number-sum"]').textContent = `Soma Total dos Números: ${numberSum}`;
  document.querySelector('[data-testid="word-length-average"]').textContent = `Comprimento Médio das Palavras: ${averageWordLength.toFixed(2)}`;
};

const textarea = document.querySelector('textarea[name="user-input"]');
textarea.addEventListener('input', () => {
  const text = textarea.value;
  metricas(text);
});

const button = document.getElementById('reset-button');
button.addEventListener('click', () => {
  textarea.value = '';
  metricas('');
});