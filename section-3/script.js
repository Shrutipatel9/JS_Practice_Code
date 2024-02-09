//CHALLENGE#1

const calcaAverage = (a,b,c) => (a+b+c)/2;
let scoreDolphine = calcaAverage(85,54,41);
let scoreKoalas = calcaAverage(23,34,27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win`);
    } else {
      console.log('No team wins...');
    }
  }
  checkWinner(scoreDolphine, scoreKoalas);

  //challenge#2
  // const calctip =(bill) => {
  //   return bill>=30 && bill<=300 ? bill*0.15 : bill*0.2;
  // }

  // const bill = [125,555,44];
  // const tip = [calctip(bill[0]),calctip(bill[1]),calctip(bill[2])];
  // const total = [bill[0]+tip[0],bill[1]+tip[1],bill[2]+tip[2]];
  // console.log(bill,tip,total);

  //CHALLENGE#3
  const mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass : 78,
    height : 1.69,
    markBMI : function(){
        this.bmi = Math.round(this.mass / this.height ** 2);
        return this.bmi;
      } 
  }
  const john = {
    firstName : 'John',
    lastName : 'Smith',
    mass : 92,
    height : 1.95,
    johnBMI : function(){
        this.bmi = Math.round(this.mass / this.height ** 2);
        return this.bmi;
      }
  }
john.johnBMI();
mark.markBMI();
console.log(mark.bmi,john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.firstName} ${mark.lastName} BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName} (${john.bmi})`)
}else{
    console.log(`${john.firstName} ${john.lastName} BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName} (${mark.bmi})`)

}

//CHALLENGE#4

const calctip =(bill) => {
  return bill>=30 && bill<=300 ? bill*0.15 : bill*0.2;
}
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i=0;i<bill.length;i++){
  tips.push(calctip(bill[i]));
  totals.push(tips[i]+bill[i]);
  
}
console.log(tips);
console.log(totals);

const calcAverage = function(arr) {
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    sum += arr[i];
  }
  return sum/arr.length;
}
console.log(calcAverage(tips));
console.log(calcAverage(totals));
console.log(calcAverage([2,4,2,4]));
