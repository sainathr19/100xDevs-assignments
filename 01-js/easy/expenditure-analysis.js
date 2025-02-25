/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function calculateTotalSpentByCategory(transactions) {
  let ans = {};
  for (let i = 0; i < transactions.length; i++) {
    if (ans.hasOwnProperty(transactions[i].category)) {
      ans[transactions[i].category] += transactions[i].price;
    } else {
      ans[transactions[i].category] = transactions[i].price;
    }
  }
  let ans2 = [];
  Object.keys(ans).forEach((key) => {
    ans2.push({
      category: key,
      totalSpent: ans[key],
    });
  });
  return ans2;
}

module.exports = calculateTotalSpentByCategory;

//Solved
