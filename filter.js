// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition

const numbers = [1, 3, 5, 7, 9];
const  players = [75, 65, 67, 55, 59]
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 2 === 1);
console.log(selected)
const friends = ['Tom', 'Lamia', 'jannat','moriom'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends)