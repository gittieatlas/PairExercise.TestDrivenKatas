const wrap = (str, col) => {
  let wrappedStr = '';

  while (str.length) {
    const colChars = str.slice(0, col + 1);

    if (str.length <= col) {
      wrappedStr += str;
      return wrappedStr;
    } else if (colChars[col] === ' ' || colChars[col + 1] === ' ') {
      wrappedStr += colChars;
      wrappedStr += '\n';
      str = str.slice(col + 1);
    } else {
      const begOfWordIndex = colChars.lastIndexOf(' '); // last space thats in there

      wrappedStr += str.slice(0, begOfWordIndex);
      wrappedStr += '\n';
      str = str.slice(begOfWordIndex + 1);
    }
  }
  return wrappedStr;
};

console.log(
  wrap(
    'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
    20
  )
);
