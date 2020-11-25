class NumbersService {
  sort = (numberList) => {
    for (let i = 0; i < numberList.length - 1; i++) {
      for (let j = i + 1; j < numberList.length; j++) {
        if (numberList[j] < numberList[i]) {
          const temp = numberList[i];
          numberList[i] = numberList[j];
          numberList[j] = temp;
        }
      }
    }
    return numberList;
  };
}

module.exports = new NumbersService();
