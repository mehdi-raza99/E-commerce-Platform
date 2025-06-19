export function fetchProductByCategory(category) {
  console.log(category);

  fetch(`https://dummyjson.com/products/category/${category.name}`)
    .then((res) => res.json())
    .then((data) => data);
}
