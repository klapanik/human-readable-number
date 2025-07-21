function getOneSymbolNumber(number) {
  const basicOneSymbolNumbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  return basicOneSymbolNumbers[+number];
}

function getTwoSymbolsNumber(number) {
  const stringedNumber = number.toString();

  const basicTwoSymbolsNumbers = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    '',
    'fifteen',
  ];

  const multiplesOfTen = ['twenty', 'thirty', 'forty', 'fifty'];

  const firstSymbol = stringedNumber[0];
  const secondSymbol = stringedNumber[1];

  if (+firstSymbol === 1) {
    if (
      +number === 10 ||
      +number === 11 ||
      +number === 12 ||
      +number === 13 ||
      +number === 15
    ) {
      return basicTwoSymbolsNumbers[+secondSymbol];
    }
    if (+number === 18) {
      return `${getOneSymbolNumber(secondSymbol)}een`;
    }

    return `${getOneSymbolNumber(secondSymbol)}teen`;
  }

  let firstWord = '';

  if (
    +firstSymbol === 2 ||
    +firstSymbol === 3 ||
    +firstSymbol === 4 ||
    +firstSymbol === 5
  ) {
    firstWord = multiplesOfTen[+firstSymbol - 2];
  } else if (+firstSymbol === 8) {
    firstWord = `${getOneSymbolNumber(firstSymbol)}y`;
  } else {
    firstWord = `${getOneSymbolNumber(firstSymbol)}ty`;
  }

  if (+secondSymbol === 0) {
    return firstWord;
  }

  return `${firstWord} ${getOneSymbolNumber(secondSymbol)}`;
}

function getThreeSymbolsNumber(number) {
  const stringedNumber = number.toString();

  const firstSymbol = stringedNumber[0];
  const secondSymbol = stringedNumber[1];
  const thirdSymbol = stringedNumber[2];

  if (+secondSymbol === 0 && +thirdSymbol === 0) {
    return `${getOneSymbolNumber(firstSymbol)} hundred`;
  }
  if (+secondSymbol === 0 && +thirdSymbol !== 0) {
    return `${getOneSymbolNumber(firstSymbol)} hundred ${getOneSymbolNumber(thirdSymbol)}`;
  }
  return `${getOneSymbolNumber(firstSymbol)} hundred ${getTwoSymbolsNumber(secondSymbol + thirdSymbol)}`;
}

module.exports = function toReadable(number) {
  const stringedNumber = number.toString();

  switch (stringedNumber.length) {
    case 1:
      return getOneSymbolNumber(number);

    case 2:
      return getTwoSymbolsNumber(number);

    case 3:
      return getThreeSymbolsNumber(number);

    default:
      throw new Error('Number must be between 0 and 999');
  }
};
