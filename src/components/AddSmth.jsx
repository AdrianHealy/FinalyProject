import React, { useContext, useState } from "react";
import { MainContex } from "../contexts/MainProvider";
import "../styles/AddSmth.css";
import Card from "./Card";

const AddSmth = () => {
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

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="Название"> Название </label> */}
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
          {/* <label htmlFor="Описание"> Описание</label> */}
          <input
            type="text"
            placeholder="Описание"
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
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
          {/* <label htmlFor="Цена"> Цена</label> */}
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
  );
};

export default AddSmth;
