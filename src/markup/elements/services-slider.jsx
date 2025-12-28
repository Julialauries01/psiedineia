import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Import Images
import lineCircleBlue from "../../images/shap/line-circle-blue.png";
import squareDotsOrange from "../../images/shap/square-dots-orange.png";
import waveBlue from "../../images/shap/wave-blue.png";
import squareRotate from "../../images/shap/square-rotate.png";

class ServicesSliderSection extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 591,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <>
        <section className="section-area section-sp1 service-wraper">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-7 mb-30">
              <div className="heading-bx">
                <h6 className="title-ext text-secondary">Serviços</h6>
                <h2 className="title">Atendimento presencial e online</h2>
                <p>As principais demandas tratadas na clínica</p>
              </div>
              <Link to="/services" className="btn btn-secondary btn-lg shadow">
                Todos os serviços
              </Link>
            </div>
            <div className="col-xl-8 mb-15">
              <Slider {...settings} className="service-slide slick-arrow-none">
                <div className="slider-item">
                  <div className="feature-container feature-bx2 feature1">
                    <div className="feature-box-xl icon mb-20 ">
                      <span className="icon-cell">
                        <i className="fas fa-puzzle-piece"></i>
                      </span>
                    </div>

                    <div className="icon-content">
                      <h3 className="ttr-title">Autismo</h3>
                      <p className="limit-text">
                        A psicologia oferece suporte essencial para pessoas com
                        Transtorno do Espectro Autista, ajudando no
                        desenvolvimento emocional, social e comunicativo.
                        Através de intervenções personalizadas, é possível
                        melhorar habilidades sociais, compreensão de emoções,
                        autonomia e qualidade de vida. O acompanhamento também
                        apoia as famílias, orientando sobre estratégias práticas
                        para o dia a dia.
                      </p>
                      <Link
                        to="/service-autism"
                        className="btn btn-primary light"
                      >
                        Ver mais
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="feature-container feature-bx2 feature2">
                    <div className="feature-box-xl icon mb-20">
                      <span className="icon-cell">
                        <i className="fas fa-brain"></i>
                      </span>
                    </div>

                    <div className="icon-content">
                      <h3 className="ttr-title">TDAH</h3>

                      <p className="limit-text">
                        A psicologia auxilia crianças, adolescentes e adultos
                        com Transtorno do Déficit de Atenção e Hiperatividade
                        (TDAH) a lidarem com dificuldades de atenção,
                        impulsividade e organização. Por meio de estratégias
                        terapêuticas personalizadas, é possível melhorar o foco,
                        a regulação emocional, a autoestima e a criação de
                        rotinas mais funcionais, promovendo mais equilíbrio na
                        vida pessoal, acadêmica e profissional.
                      </p>

                      <Link
                        to="/service-tdah"
                        className="btn btn-primary light"
                      >
                        Ver mais
                      </Link>
                    </div>
                  </div>
                </div>
<div className="slider-item">
  <div className="feature-container feature-bx2 feature3">
    <div className="feature-box-xl icon mb-20">
      <span className="icon-cell">
        <i className="fas fa-ribbon"></i>
      </span>
    </div>

    <div className="icon-content">
      <h3 className="ttr-title">Luto</h3>
      <p className="limit-text">
        O acompanhamento psicológico no processo de luto oferece acolhimento,
        escuta e suporte emocional para ajudar a lidar com a perda, reorganizar
        a vida e ressignificar sentimentos, respeitando o tempo e a vivência de
        cada pessoa.
      </p>
      <Link to="/service-luto" className="btn btn-primary light">
        Ver mais
      </Link>
    </div>
  </div>
</div>

<div className="slider-item">
  <div className="feature-container feature-bx2 feature2">
    <div className="feature-box-xl icon mb-20">
      <span className="icon-cell">
        <i className="fas fa-heartbeat"></i>
      </span>
    </div>

    <div className="icon-content">
      <h3 className="ttr-title">Ansiedade</h3>
      <p className="limit-text">
        A ansiedade pode se manifestar por sintomas físicos e emocionais,
        como tensão, inquietação e preocupação excessiva. A psicoterapia
        auxilia no controle dos sintomas e no resgate do equilíbrio emocional.
      </p>
      <Link to="/service-ansiedade" className="btn btn-primary light">
        Ver mais
      </Link>
    </div>
  </div>
</div>


              <div className="slider-item">
  <div className="feature-container feature-bx2 feature4">
    <div className="feature-box-xl icon mb-20">
      <span className="icon-cell">
        <i className="fas fa-sync-alt"></i>
      </span>
    </div>

    <div className="icon-content">
      <h3 className="ttr-title">TAG</h3>
      <p className="limit-text">
        O Transtorno de Ansiedade Generalizada é caracterizado por preocupações
        excessivas e persistentes. A psicoterapia auxilia no manejo da ansiedade,
        na redução dos sintomas e na melhoria da qualidade de vida.
      </p>
      <Link to="/service-tag" className="btn btn-primary light">
        Ver mais
      </Link>
    </div>
  </div>
</div>

              </Slider>
            </div>
          </div>
          <img className="pt-img1 animate-rotate" src={lineCircleBlue} alt="" />
          <img className="pt-img2 animate2" src={squareDotsOrange} alt="" />
          <img className="pt-img3 animate-wave" src={waveBlue} alt="" />
          <img className="pt-img4 animate1" src={squareRotate} alt="" />
        </section>
      </>
    );
  }
}

export default ServicesSliderSection;
