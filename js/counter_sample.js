let theCounterStartAt = 0
while (theCounterStartAt <=50) {
    console.log('We are counting to 50 and we are at : ' + theCounterStartAt);
    theCounterStartAt = (theCounterStartAt + 5);
}
console.log ('The count has completed and we have arrived at 50!');

// do {
//     console.log('----------------------------------------');
//     console.log(`We are counting to 50 and wea are at: ${theCounterStartAt}`);
//         theCounterStartAt++;
//     console.log(`We are counting to 50 and wea are at: ${theCounterStartAt}`)
// } while (theCounterStartAt <= 50);

for (let tank = 0; tank <= 50; tank+=5) {
    console.log('--------------------------')
      //  if(tank)
    console.log('counting in a for loop ' + tank);
}