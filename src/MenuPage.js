import React, { useState } from "react";
import "./MenuPage.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function MenuPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState([]);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const history = useHistory();

  const toorder = () => {
    if (!name || !selectedOption) {
      alert("Lütfen isminizi ve boyut seçiminizi yapın");
    } else {
      const data = {
        name: name,
        size: selectedOption,
        dough: selectedOption2,
        toppings: selectedOption3,
      };
      axios.post("https://reqres.in/api/orders", data).then((response) => {
        console.log(response);
        history.push("/LastPage");
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected option: ${selectedOption}`);
    console.log(`Selected option: ${selectedOption2}`);
    console.log(`Selected option: ${selectedOption3}`);
  };

  const options = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Dana Füme",
    "Ananas",
    "Mozarella",
  ];

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    if (value.length < 2) {
      setNameError("İsim en az 2 karakter olmalıdır"); // hata mesajı setState ile ayarlanıyor
    } else {
      setNameError(""); // hata mesajı temizleniyor
    }
  };

  const handleNameChange2 = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedOption3([...selectedOption3, value]);
    } else {
      setSelectedOption3(selectedOption3.filter((option) => option !== value));
    }
  };

  return (
    <div className="menu-page">
      <h3>POSİTİON ABSOLUTE ACI PİZZA</h3>
      <div className="menu-page-info">
        <span className="price">
          <p>85.50₺</p>
        </span>
        <span className="rate">
          <p>4.9</p>
          <p>(200)</p>
        </span>
      </div>
      <p>
        Lezzetli ve taze malzemelerle hazırlanmış pizza seçenekleriyle kendinizi
        İtalyan mutfağının eşsiz lezzetlerine doğru bir yolculuğa çıkarın. İnce
        hamuru, yoğun sosu ve zengin peynirleriyle hazırlanan pizzalarımız
        arasından seçim yaparken kendinizi kaybedeceksiniz. Çeşitli sebzeler,
        etler ve deniz ürünleriyle zenginleştirilen menümüzde her zevke hitap
        edecek bir seçenek bulabilirsiniz. Sıcak ve lezzetli pizzalarımızı
        dilimlerken, keyifli bir yemek deneyimi yaşayacaksınız.
      </p>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name-input">İsim:</label>
          <input
            type="text"
            id="name-input"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        {nameError && <div className="error">{nameError}</div>}
        <div className="option-select">
          <label htmlFor="size-dropdown">Boyut: </label>
          <select
            id="size-dropdown"
            value={selectedOption}
            onChange={(event) => setSelectedOption(event.target.value)}
          >
            <option value="">Lütfen bir boyut seçin</option>
            <option value="Küçük">Küçük</option>
            <option value="Orta">Orta</option>
            <option value="Büyük">Büyük</option>
          </select>
        </div>

        <div className="option-select">
          <label htmlFor="dough-dropdown">Hamur:</label>
          <select
            id="special-text"
            value={selectedOption2}
            onChange={(event) => setSelectedOption2(event.target.value)}
          >
            <option value="">Lütfen bir hamur seçin</option>
            <option value="Normal">Normal</option>
            <option value="İnce">İnce</option>
            <option value="Kalın">Kalın</option>
          </select>
        </div>
        <div>
          <label>Malzemeler:</label>
          <div className="topping-options">
            {options.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOption3.includes(option)}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <button type="button" onClick={toorder}>
          Sipariş Ver
        </button>
      </form>
    </div>
  );
}
