function pow(x, y) {
  if (y == 0) {
    return 1;
  } else if (y > 0) {
    let res = 1;
    for (let i = 1; i <= y; i++) {
      res = res * x;
    }
    return res;
  } else {
    let res = 1;
    for (let i = 1; i <= y * -1; i++) {
      res = res * x;
    }
    return 1 / res;
  }
}

console.log(pow(4, -2));
