import analyzer from './analyzer.js';

let metricas = (text) => {
    const wordCount = analyzer.getWordCount(text);
    const characterCount = analyzer.getCharacterCount(text);
    const averageWordLength = analyzer.getAverageWordLength(text);
    const numberCount = analyzer.getNumberCount(text);
    const numberSum = analyzer.getNumberSum(text);
    const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);

    document.querySelector('[data-testid="word-count"]').innerText = `Contagem de Palavras: ${wordCount}`;
    document.querySelector('[data-testid="character-count"]').innerText = `Contagem de Caracteres: ${characterCount}`;
    document.querySelector('[data-testid="character-no-spaces-count"]').innerText = `Contagem Sem Espaços/Pontuações: ${characterCountExcludingSpaces}`;
    document.querySelector('[data-testid="number-count"]').innerText = `Contagem de Números: ${numberCount}`;
    document.querySelector('[data-testid="number-sum"]').innerText = `Soma Total dos Números: ${numberSum}`;
    document.querySelector('[data-testid="word-length-average"]').innerText = `Comprimento Médio das Palavras: ${averageWordLength.toFixed(2)}`;
};

let textarea = document.querySelector('textarea[name="user-input"]');
textarea.addEventListener('input', () => {
    const text = textarea.value;
    metricas(text);
});

let button = document.getElementById('reset-button');
button.addEventListener('click', () => {
    textarea.value = '';
    metricas('');
});