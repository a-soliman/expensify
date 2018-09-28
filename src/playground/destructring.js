// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const {name: publisherName = 'self-published'} = book.publisher;
// console.log(publisherName);

const item = ['Coffee', '$2.00', '$2.50', '$2.75'];
const [itemName, small_price, medium_price, large_price ] = item;

console.log(`a smaill ${itemName} costs ${small_price}`);