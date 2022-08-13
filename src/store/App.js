import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "./actions/product.action";


function App() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.products)
  console.log(products)

  useEffect(() => {
    dispatch(getProductsAction())
  }, [dispatch])

  return (
    <div className="container mx-auto">
      {
        products.map((product, index) => {
          return (
            <img key={index} src={product.image} className="my-5" />
          )
        })
      }
    </div>

  );
}

export default App;
