const generateNumbers = () => {
    let result = [];
    let list = Array.from({ length: 9 }, (_, i) => i + 1);
    for (let i = 0; i < list.length; i += 3) {
      result.push(list.slice(i, i + 3));
    }
    return result;
  };

  export default generateNumbers();