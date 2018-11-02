// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     })
// expensese.forEach(expense => {
//     database.ref('expenses').push({
//         description: expense.description,
//         note: expense.note,
//         amount: expense.amount,
//         createdAt: expense.createdAt
//     });
// });

// database.ref().set({
//     name: 'Ahmed Soliman',
//     age: 30,
//     isSingle: false,
//     location: {
//         city: 'San Francisco',
//         country: 'US'
//     }
// }).then(() =>  console.log('set values in DB'))
//   .catch((e) => console.log('Error: ', e));  

// database.ref('location/city').remove()
//     .then(() => console.log('removed: '))
//     .catch((e) => console.log('error: ', e));

// database.ref('name').update({ first: 'Ahmed', last: 'Soliman' })
//     .then(() => console.log('updated name'))
//     .catch((e) => console.log('Error: ', e));

// database.ref()
//     .once('value')
//     .then((snapshot) => console.log(snapshot.val()))
//     .catch((e) => console.log('Error: ', e));

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// const printData = ( data ) => {
//     console.log(`${data.name.first}, is ${data.age} years old!`)
// };

// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     printData(data);
// });

// setTimeout(() => {
//     database.ref('age').set(35);
// }, 3000)