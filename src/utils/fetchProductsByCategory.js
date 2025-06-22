export async function fetchProductByCategory({ category }) {

  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data = await response.json();
    return data.products; // Return the fetched data
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow the error for further handling
  }
}
