import React, { useState } from "react";
import * as ProductService from './services/service'

const WatchCart = () => {
  const [watches, setWatches] = useState(ProductService.getAllWatches());

  const incrQty = (id) => {
    const updatedWatch = [...watches];
    updatedWatch[id].quantity = updatedWatch[id].quantity + 1;
    setWatches(updatedWatch);
  };

  const dectQty = (id) => {
    const updatedWatch = [...watches];
    updatedWatch[id].quantity =
      updatedWatch[id].quantity - 1 > 0 ? updatedWatch[id].quantity - 1 : 0;
    setWatches(updatedWatch);
  };

  const actDelete = (id) => {
    const remainingWatches = watches.filter((watch) => watch.id !== id);
    setWatches(remainingWatches);
  };

  const grandTotal = () => {
    let total = 0;
    for (let watch of watches) {
      total += watch.quantity * watch.price;
    }
    return total;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="m-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              dolor autem ullam eaque quisquam minus, ex, pariatur assumenda
              dolores earum, reprehenderit voluptatibus tempora adipisci
              incidunt porro quasi odit perspiciatis distinctio molestiae
              accusamus veritatis eveniet quibusdam laudantium! Molestiae, optio
              harum laudantium magni reprehenderit corrupti perferendis rerum
              non atque hic, dolor nemo.
            </p>
            {watches.length > 0 ? (
              <table className="table table-striped text-center">
                <thead className="bg-success text-white">
                  <th>S.No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qunatity</th>
                  <th className="col-md-2">Total</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  {watches.map((watch, id) => {
                    return (
                      <tr key={watch.id}>
                        <td>{watch.id}</td>
                        <td>
                          <img
                            src={watch.imageURL}
                            alt=""
                            height="50"
                            width="50"
                          />
                        </td>
                        <td>{watch.name}</td>
                        <td>
                          <i className="bi bi-currency-rupee"></i>
                          {watch.price.toFixed(2)}
                        </td>
                        <td>
                          <i
                            className="bi bi-dash-circle-fill m-2 text-danger"
                            onClick={() => dectQty(id)}
                          ></i>
                          {watch.quantity}
                          <i
                            className="bi bi-plus-circle-fill m-2 text-success"
                            onClick={() => incrQty(id)}
                          ></i>
                        </td>
                        <td>
                          <i className="bi bi-currency-rupee"></i>
                          {(watch.quantity * watch.price).toFixed(2)}
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => actDelete(watch.id)}
                          >
                            <i className="bi bi-trash3"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={4}></td>
                    <td className="fw-bold text-bg-dark text-white">
                      Grand Total:{" "}
                    </td>
                    <td className="fw-bold text-bg-dark text-white">
                      <i className="bi bi-currency-rupee"></i>
                      {grandTotal().toFixed(2)}
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="container">
                <p className="h3 text-center m-5">
                  {" "}
                  <i className="bi bi-emoji-dizzy-fill text-danger me-2"></i>
                  Gosh! No items available at the moment. Please check back
                  later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchCart;
