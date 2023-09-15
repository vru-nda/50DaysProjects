const resultEle = document.getElementById('result');
const lengthEle = document.getElementById('length');
const uppercaseEle = document.getElementById('uppercase');
const lowercaseEle = document.getElementById('lowercase');
const symbolsEle = document.getElementById('symbols');
const numbersEle = document.getElementById('numbers');
const clipboardBtn = document.getElementById('clipboard');
const generateBtn = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateBtn.addEventListener('click', () => {
  const length = +lengthEle.value;
  const hasLower = lowercaseEle.checked;
  const hasUpper = uppercaseEle.checked;
  const hasNumber = numbersEle.checked;
  const hasSymbol = symbolsEle.checked;

  resultEle.innerText = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasSymbol,
    hasNumber
  );
});

clipboardBtn.addEventListener('click', () => {
  // if (resultEle.innerText !== '') {
  //   navigator.clipboard.writeText(resultEle.innerText);
  // }
  const textarea = document.createElement('textarea');
  const password = resultEle.innerText;

  if (!password) return;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard! ');
});

function generatePassword(length, lower, upper, symbol, number) {
  let generatedPass = '';

  const typesCount = lower + upper + number + symbol;
  const typeArr = [{lower}, {upper}, {number}, {symbol}].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return '';
  }

  for (i = 0; i < length; i += typesCount) {
    typeArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPass += randomFunc[funcName]();
    });
  }
  return generatedPass.slice(0, length);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>,./';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
