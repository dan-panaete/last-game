const URL = "https://670fe5b1a85f4164ef2c621e.mockapi.io/alimente"; // endpoint -> asa comunicam cu baza de date

export async function getAllProducts() {
    const response = await fetch(URL);
    const products = await response.json();
    return products;
}
