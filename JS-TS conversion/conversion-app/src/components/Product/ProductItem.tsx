import React from "react";

const ProductItem:React.FC<any> = (props) => {

  console.log(props);
  return (
    <>
      <div className="col-sm-3 mb-3">
        <div className="card shadow-lg">
          <img src={props.image} alt="" className="image-fluid" />
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                Name: <span className="fw-bold">{props.name}</span>
              </li>
              <li className="list-group-item">
                Price: <i className="bi bi-currency-rupee"></i>
                <span className="fw-bold">{props.price}</span>/kg
              </li>
              <li className="list-group-item">
                Quantity:
                <i
                  className="bi bi-dash-circle-fill m-2 text-danger"
                  onClick={props.decrQty}
                ></i>
                <span className="fw-bold">{props.quantity}</span>
                <i
                  className="bi bi-plus-circle-fill m-2 text-success"
                  onClick={props.incrQty}
                ></i>
              </li>
              <li className="list-group-item">
                Total:{" "}
                <span className="fw-bold">{props.price * props.quantity}</span>
              </li>
            </ul>
          </div>
          <button className="btn btn-success">
            <i className="bi bi-cart-plus-fill m-2 text-light"></i> Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
