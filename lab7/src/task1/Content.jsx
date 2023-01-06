import React from "react";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.setRandomColor = this.setRandomColor.bind(this);
  }

  getRandomColor() {
    return (
      "#" +
      Math.floor(Math.random() * 256).toString(16) +
      Math.floor(Math.random() * 256).toString(16) +
      Math.floor(Math.random() * 256).toString(16)
    );
  }
  setRandomColor(element) {
    element.target.style.background = this.getRandomColor();
    element.target.style.color = this.getRandomColor();
  }

  render() {
    return (
      <div>
        <ul>
          Хоббі
          <li>Перегляд фільмів</li>
          <li>Спорт</li>
          <li>Компьютерні ігри</li>
        </ul>
        <ol>
          Улюблені фільми
          <li>Shutter island</li>
          <li onClick={this.setRandomColor}>Inception</li>
          <li onClick={this.setRandomColor}>Sleepy hollow</li>
        </ol>
        <p>
          Оде́са — місто в Україні, Одеська область, Одеський район.
          Адміністративний центр області та району. Третє найбільше місто країни
          після Києва та Харкова. Розташоване на узбережжі Чорного моря.
          Найбільший морський торговий порт держави. Культурно-освітній,
          туристичний, торговий, транспортний центр. Складова Одеської міської
          територіальної громади. Населення — 1 010 537 осіб (2022). Основа
          економіки — транспортні перевезення, машинобудівна, хімічна,
          нафтопереробна, харчова та легка промисловості. Працюють 37 закладів
          вищої освіти, шість театрів, вісім кінотеатрів, філармонія, цирк,
          музеї, галереї тощо.
        </p>
        <p>
          Перші поселення на території Одеси засновані близько VII століття до
          н. е. — III століття н. е. давньогрецькими колоністами.
        </p>
      </div>
    );
  }
}
