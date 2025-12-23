import axios from "axios"


const getProductCard = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response.data.map(po =>po));


        return response.data
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }


}


const getProduct = async () => {
    try {
        const response = await axios.get("https://dummyjson.com/products?limit=10")
        
        // 

        return response.data.products
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }


}

// console.log();

// getProduct()
// getProductCard()

    

export default getProduct

export { getProductCard }
