import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { MainContex } from "../contexts/MainProvider";
import "../styles/ProductTable.css";
import StuffPagination from "./StuffPagination";
import {
  Button,
  Card,
  Carousel,
  Form,
  FormControl,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const ProductTable = () => {
  const {
    getProduct,
    deleteProduct,
    currentProducts,
    // productToEdite,
    // getProductToEdite,
    saveEditedProduct,
  } = React.useContext(MainContex);
  const params = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [editeItem, setEditeItem] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  // const [newItem, setNewItem] = useState();

  useEffect(() => {
    getProduct();
  }, []);
  if (!editeItem) {
    return <h2>Wait a moment!</h2>;
  }

  // const [productEdite, setProductEdite] = useState(productToEdite);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const key in editeItem) {
      if (!editeItem[key]) {
        alert("Ну ты что родной?");
        return;
      }
    }
    setShow(false);
    saveEditedProduct(editeItem);
    navigate("/market");
  };
  console.log(editeItem);
  if (!currentProducts) {
    return <h2>Получение данных...</h2>;
  }
  // if (!editeItem) {
  //   return <h2>Один момент</h2>;
  // }

  // currentProducts

  return (
    <>
      <div className="slider-main">
        {currentProducts.map((item) => (
          <React.Fragment>
            <div className="slider">
              <Carousel>
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="smth">
              <button
                className="btn-one"
                onClick={() => deleteProduct(item.id)}
              >
                Удалить
              </button>
              <button
                onClick={(e) => {
                  handleShow(e);
                  setEditeItem(item);
                }}
                className="btn-two"
              >
                Изменить
              </button>
            </div>
          </React.Fragment>
        ))}
        <div className="madal-main">
          <div className="modal__window">
            <Modal show={show} onHide={handleClose} animation={true}>
              <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Control
                  value={editeItem.name}
                  onChange={(e) =>
                    setEditeItem({ ...editeItem, name: e.target.value })
                  }
                  type="text"
                  placeholder="Enter email"
                />
                <Form.Control
                  value={editeItem.description}
                  onChange={(e) =>
                    setEditeItem({
                      ...editeItem,
                      description: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Enter email"
                />
                <Form.Control
                  value={editeItem.price}
                  onChange={(e) =>
                    setEditeItem({ ...editeItem, price: e.target.value })
                  }
                  type="text"
                  placeholder="Enter email"
                />
                <Form.Control
                  value={editeItem.image}
                  onChange={(e) =>
                    setEditeItem({ ...editeItem, image: e.target.value })
                  }
                  type="text"
                  placeholder="Enter email"
                />
              </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button> */}
                <Button type="submit" onClick={handleSubmit} variant="primary">
                  Сохранить
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
      {/* <div className="pagination">
        <StuffPagination />
      </div> */}
    </>
  );
};

export default ProductTable;
