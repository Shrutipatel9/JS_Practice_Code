// //CHALLENGE#1

const marksW = 78;
const marksH = 1.69;
const jonesW = 92;
const jonesH = 1.95;
const jonesBMI =  Math.round(jonesW / jonesH ** 2);
const marksHBMI =  Math.round(marksW /  marksH ** 2);
//const markHigherBMI = marksHBMI > jonesBMI;
//console.log(markHigherBMI);


//CHALLENGE#2
if(marksHBMI > jonesBMI){
    console.log(`Mark's BMI (${marksHBMI}) is higher than John's (${jonesBMI})!`)
}else{
    console.log(`John's BMI ${jonesBMI} is higher than Mark's ${marksHBMI}!`)
}


//CHALLENGE#3
const sDolphines = (96+108+89)/3;
const sKoalas = (88+91+110)/3;
console.log(`koalas : ${sKoalas} and Dolphines : ${sDolphines}`);

if(sDolphines > sKoalas){
    console.log(`Dolphines are winners`);
}
else if(sKoalas > sDolphines){
    console.log(`Koalas are winners`);
}
else{
    console.log(`It's draw`);
}

//BONAS
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(`koalas : ${scoreKoalas} and Dolphines : ${scoreDolphins}`);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins win the trophy`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log(`Koalas win the trophy`);
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log(`Both win the trophy!`);
} else {
  console.log(`No one wins the trophy`);
}


//CHALLENGE#4
 const bill = 430
// const bill = prompt('Enter the bill amount :');
const tip = bill>=50 && bill<=300 ? bill*15/100 : bill*0.2;
 console.log(`The bill was ${bill}, the tip was ${tip} and the total amount is ${bill+tip}`);
