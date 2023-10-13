import React from "react";
import { useHistory } from "react-router-dom";
import "./Anasayfa.css";

const Anasayfa = () => {
  const history = useHistory();

  const handlePizzaOrder = () => {
    history.push("/order-pizza");
  };

  return (
    <div className="container">
      <div>
        <h1>Teknolojik Yemekler</h1>
        <p className="fırsat">fırsatı kaçırma</p>
        <p className="KodAciktirir">
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </p>
        <button id="aciktim" onClick={handlePizzaOrder}>
          ACIKTIM
        </button>
      </div>
      <div className="banner">
        {" "}
        <img
          id="banner"
          src="https://www.eauclairesbestpizza.com/wp-content/uploads/2022/06/pizza-6-speciality-1-1fx9ae.png"
          alt="Pizza"
        />
      </div>
    </div>
  );
};

export default Anasayfa;
