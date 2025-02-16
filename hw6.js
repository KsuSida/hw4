function checkProbabilityTheory() {
  let quantity = Math.floor(Math.random() * 100) + 1; // Returns a random integer from 1 to 100:
  let evenNum = 0;
  let oddNum = 0;
  let evenPercentage;
  let oddPercentage;
  let result;
  let num = [];
  for (let i = 0; i < quantity; i++) {
    num.push(Math.floor(Math.random() * (1000 - 100 + 1) + 100));
  }
  for (let a = 0; a < num.length; a++) {
    num[a] % 2 == 0 ? evenNum++ : oddNum++;
  }
  evenPercentage = (evenNum / quantity) * 100;
  oddPercentage = (oddNum / quantity) * 100;
  result = `${evenPercentage}% : ${oddPercentage}%`;
  console.log(quantity);
  console.log(evenNum);
  console.log(oddNum);
  console.log(result);
}

checkProbabilityTheory();
checkProbabilityTheory();
checkProbabilityTheory();
checkProbabilityTheory();
checkProbabilityTheory();
