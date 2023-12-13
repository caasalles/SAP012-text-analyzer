// index.js
import analyzer from './analyzer.js';

// Escutar eventos do DOM e invocar os métodos do objeto `analyzer`
function analyzeText() {
    const text = document.querySelector('textarea[name="user-input"]').value;

    // Funções do módulo analyzer para obter as métricas
    const wordCount = analyzer.getWordCount(text);
    const charCount = analyzer.getCharacterCount(text);
    const charCountNoSpace = analyzer.getCharacterCountExcludingSpaces(text);
    const numCount = analyzer.getNumberCount(text);
    const numSum = analyzer.getNumberSum(text);
    const avgWordLength = analyzer.getAverageWordLength(text);

    // Atualizar os elementos HTML com os resultados
    document.querySelector('[data-testid="word-count"]').innerText = `Contagem de Palavras: ${wordCount}`;
    document.querySelector('[data-testid="character-count"]').innerText = `Contagem de Caracteres: ${charCount}`;
    document.querySelector('[data-testid="character-no-spaces-count"]').innerText = `Contagem Sem Espaços/Pontuações: ${charCountNoSpace}`;
    document.querySelector('[data-testid="number-count"]').innerText = `Contagem de Números: ${numCount}`;
    document.querySelector('[data-testid="number-sum"]').innerText = `Soma Total dos Números: ${numSum}`;
    document.querySelector('[data-testid="word-length-average"]').innerText = `Comprimento Médio das Palavras: ${avgWordLength.toFixed(2)}`;
}

function clearText() {
    document.querySelector('textarea[name="user-input"]').value = '';
    analyzeText();
}
