import axios from "axios";


class ProductService {
  async getProducts() {
    //logic to connect to BackEnd to retieve data
    const resp =  await axios.get("http://fsdi.azurewebsites.net/api/products");
    return resp.data;
  }
}

export default ProductService; 





//class ProductService {

       // getProducts() {
            //logic to connect to BackEnd to retrieve data
          //  return data;
      //  }
//}

//export default ProductService;