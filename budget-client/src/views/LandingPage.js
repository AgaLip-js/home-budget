import React from "react";
import img1 from "../assets/pictures/undraw_Savings.svg";
import img2 from "../assets/pictures/undraw_finance2.svg";
import img3 from "../assets/pictures/undraw_personal.svg";
import img4 from "../assets/pictures/money4.png";
import img5 from "../assets/pictures/undraw_dashboard.svg";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const LandingPage = () => {
  return (
    <div className="landing-page_wrapper">
      <Navbar aos="fade-down" />
      <div className="firstContainer-LP" data-aos="fade-up">
        <p className="firstText-LP">
          Zdobądź pełną kontrolę nad Twoimi pieniędzmi
        </p>
        <img src={img1} alt={img1} className="firstImage-LP" />
      </div>
      <div className="secondContainer-LP" data-aos="fade-down">
        <img src={img2} alt={img2} className="secondImage-LP" />
        <p className="secondText-LP">
          Aplikacja do zarządzania domowym budżetem pozwoli Ci w pełni
          kontrolować twoje wydatki. Nawet nie wiesz ile można zaoszczędzić!
        </p>
      </div>
      <div className="thirdContainer-LP" data-aos="fade-down">
        <img src={img4} alt={img4} className="sectionImage-LP" />
        <img src={img5} alt={img5} className="sectionImage-LP" />
        <img src={img3} alt={img3} className="sectionImage-LP" />
        <div className="section-LP">
          <div>
            <h2 className="resumeTitle-LP">Podsumowanie</h2>
            <p className="thirdText-LP">
              Twój rzeczywisty stan finansów, przedstawiający sumę przychodów i
              wydatków.
            </p>
          </div>
        </div>
        <div className="section-LP">
          <div>
            <h2 className="resumeTitle-LP">Analiza wydatków</h2>
            <p className="thirdText-LP">
              Raporty przedstawiające bilans na dany dzień. Dodawaj swoje
              wydatki i porównuj z zaplanowanym budżetem.
            </p>
          </div>
        </div>
        <div className="section-LP">
          <div>
            <h2 className="resumeTitle-LP">Planowanie budżetu</h2>
            <p className="thirdText-LP">
              Zaplanuj swój budżet i miej większą kontrolę nad własnymi
              finansami.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
