function fizzBuzz(n: number): string[] {
  let div3,
    div5,
    res = [];

  do {
    div3 = n % 3 == 0 ? true : false;
    div5 = n % 5 == 0 ? true : false;

    switch (true) {
      case div3 && div5:
        res.unshift("FizzBuzz");
        break;
      case div3:
        res.unshift("Fizz");
        break;
      case div5:
        res.unshift("Buzz");
        break;
      default:
        res.unshift(n.toString());
    }

    n--;
  } while (n > 0);

  return res;
}
