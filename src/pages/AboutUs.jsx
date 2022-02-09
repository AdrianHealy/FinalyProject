import React, { useContext, useEffect, useState } from "react";
import AddSmth from "../components/AddSmth";
import "../styles/AboutUs.css";
import ImageAbout from "../image/image4.jpg";

import { MainContex } from "../contexts/MainProvider";

const AboutUs = () => {
  const { getProduct, product } = React.useContext(MainContex);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const { addProduct } = useContext(MainContex);

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const key in newProduct) {
      if (!newProduct[key]) {
        alert("Заполните все поля!");
        return;
      }
    }
    addProduct(newProduct);
    setNewProduct({
      name: "",
      description: "",
      price: "",
      image: "",
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) {
    return <h2>Получение данных...</h2>;
  }
  return (
    <>
      <div className="page-body">
        <div className="page-body-container">
          <div className="left-side">
            <div className="add-form">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Название"
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                    value={newProduct.name}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Описание"
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        description: e.target.value,
                      })
                    }
                    value={newProduct.description}
                  />
                </div>
                <div>
                  {/* <label htmlFor="Фото"> Картинка</label> */}
                  <input
                    type="text"
                    placeholder="Ссылка на картинку"
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, image: e.target.value })
                    }
                    value={newProduct.image}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Цена"
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, price: e.target.value })
                    }
                    value={newProduct.price}
                  />
                </div>
                <button type="submit">Нажни на меня</button>
              </form>
            </div>
          </div>
          <div className="right-side">
            <img id="logo-about" src={ImageAbout} alt="#" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
