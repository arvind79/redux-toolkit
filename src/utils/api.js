

export const fetchProducts = async () => {
  // try {
    let data = await fetch("https://fakestoreapi.com/products")
    .then(data => data.json())
    .then(data => {
      return data;
    });

    return data;
  // } catch (error) {
  //   console.log("error while fetching data from API: ", error)
  // }
}