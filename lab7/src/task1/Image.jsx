import React, { useState } from "react";

export default function Image() {
  const [image, setWidth] = useState(500);
  const [display, setDisplay] = useState({ display: "inline-block" });

  const addImg = () => {
    if (display["display"] === "inline-block") {
      alert("Зображення на сторінці");
    } else {
      setWidth(500);
      setDisplay({ display: "inline-block" });
    }
  };
  const increaseImg = () => {
    if (image < 750) {
      setWidth(image + 50);
    } else if (display["display"] === "inline-block") {
      alert("Максимальний розмір");
    }
  };
  const reduceImg = () => {
    if (image > 100) {
      setWidth(image - 50);
    } else if (display["display"] === "inline-block") {
      alert("Мінімальний розмір");
    }
  };
  const deleteImg = () => {
    setDisplay({ display: "none" });
  };

  return (
    <>
      <a href="https://tourbaza.com/wp-content/uploads/2015/06/24.-%D0%9E%D0%B4%D0%B5%D1%81%D0%B0.-%D0%9E%D0%BF%D0%B5%D1%80%D0%BD%D0%B8%D0%B9-%D1%82%D0%B5%D0%B0%D1%82%D1%80.-e1434294812171.jpg">
        <img src="./odesa.jpg" alt="Одеса" width={image} style={display} />
      </a>

      <div className="image_change">
        <button onClick={addImg}>Додати</button>
        <button onClick={increaseImg}>Збільшити</button>
        <button onClick={reduceImg}>Зменшити</button>
        <button onClick={deleteImg}>Видалити</button>
      </div>
    </>
  );
}
