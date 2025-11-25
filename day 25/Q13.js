function countCategories(categories) {

  // Step 1: Use reduce() to count occurrences
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Step 2 (Extra): Sort categories by count in descending order
  const sortedCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  return {
    count: categoryCount,
    sorted: sortedCategories
  };
}

// Example Input
const categories = [
  "electronics", "clothing", "electronics",
  "toys", "clothing", "toys", "toys"
];

console.log(countCategories(categories));
