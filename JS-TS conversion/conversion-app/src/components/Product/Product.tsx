import React, { useState } from "react";
import ProductItem from "./ProductItem";

interface IProducts {
  products :
    {
      sno : string;
      name : string;
      price : number;
      quantity : number;
      image : string;
    }
  
}

const Product:React.FC<any> = () => {
  let [products, setProducts] = useState<any>([
    {
      sno: "0A1",
      name: "Red Onion",
      price: 20,
      quantity: 0,
      image: "https://www.chfmart.com/images/detailed/3/Onions_Red_Hero.jpg",
    },
    {
      sno: "0A2",
      name: "Cucumber",
      price: 25,
      quantity: 0,
      image:
        "https://exoticvegetablespune.com/wp-content/uploads/2020/11/CucumberSeedless-900x900-removebg-preview.png",
    },
    {
      sno: "0A3",
      name: "Carrot",
      price: 60,
      quantity: 0,
      image:
        "https://cdn.shopify.com/s/files/1/0475/8398/5816/products/1NjnqfBEDCZF8soVFB1u_0FH1FjKsrzLt_3a52a355-c738-41f7-bfd5-944049aa184a_1200x1200.jpg?v=1608550591",
    },
    {
      sno: "0A1",
      name: "Brinjal",
      price: 45,
      quantity: 0,
      image: "https://tiimg.tistatic.com/fp/1/008/019/grade-brinja-454.jpg",
    },
  ]);

  const incrQty = (index : number):void => {
    const updatedProduct = [...products];
    updatedProduct[index].quantity = updatedProduct[index].quantity + 1;
    setProducts(updatedProduct)
  }

  const decrQty = (index : number):void => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity =
      updatedProducts[index].quantity - 1 > 0
        ? updatedProducts[index].quantity - 1
        : 0;
    setProducts(updatedProducts);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {products.map((products : any, index : number) => {
            return (
              <ProductItem
                sno={products.sno}
                name={products.name}
                price={products.price}
                quantity={products.quantity}
                image={products.image}
                incrQty={() => incrQty(index)}
                decrQty={() => decrQty(index)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
