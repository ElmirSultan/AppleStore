import { useParams } from "react-router-dom";
import "./productpage.scss";
import Card from "../../components/ProductCard/Card";
import { useEffect } from "react";

const ProductPage = ({ products }) => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
  const { productCategory, productName } = useParams();
  

  const selectedProduct = products.find(
    (item) =>
      item.productCategory === decodeURIComponent(productCategory) &&
      item.productName === decodeURIComponent(productName)
  );
  return (
    <section className="product-page">
      {selectedProduct && (
        <div className="product">
          <h1>{selectedProduct.productName}</h1>
          <div className="product-box">
            <div className="left-side">
              <p>{selectedProduct.about ? selectedProduct.about : ""}</p>
            </div>
            <div className="right-side">
              <Card productItem={selectedProduct} />
             <div className="bottom">
             {selectedProduct.color ? (
                <p><span> Color :</span> {selectedProduct.color} </p>
              ) : (
                null
              )}

              {selectedProduct.cpu ? <p><span>CPU:</span> {selectedProduct.cpu} </p> : ""}
              {selectedProduct.batteryLife ? (
                <p><span>Batery Life:</span> {selectedProduct.batteryLife}</p>
              ) : null}
              {selectedProduct.usb ? <p><span>USB:</span> {selectedProduct.usb} </p> : null}
              {selectedProduct.weight ? <p><span>Weight:</span> {selectedProduct.weight}</p> : null}
              {selectedProduct.frontCamera ? (
                <p><span>Front camera:</span> {selectedProduct.frontCamera}</p>
              ) : null}
              {selectedProduct.backCamera ? (
                <p><span>Camera:</span> {selectedProduct.backCamera}</p>
              ) : null}
              {selectedProduct.storage ? (
                <p><span>Storage:</span> {selectedProduct.storage}</p>
              ) : null}
             </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductPage;
