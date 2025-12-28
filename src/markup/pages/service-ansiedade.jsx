import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

import bnrImg1 from "../../images/banner/img1.jpg";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic5 from "../../images/services/pic5.png";
import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";

class ServiceAnsiedade extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          {/* BANNER */}
          <div className="banner-wraper">
            <div
              className="page-banner"
              style={{ backgroundImage: `url(${bnrImg1})` }}
            >
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h1>Ansiedade</h1>
                  <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>{" "}
                          Home
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Ansiedade
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <img className="pt-img2 animate2" src={circleDots} alt="" />
              <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
            </div>
          </div>

          {/* SECTION */}
          <section className="section-area section-sp1">
            <div className="container">
              <div className="row">
                {/* COLUNA PRINCIPAL */}
                <div className="col-lg-8 mb-30">
                  <div className="ttr-media mb-30">
                    <img src={servicesPic5} className="rounded" alt="" />
                  </div>

                  {/* SOBRE O SERVIÇO */}
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h2 className="title mb-15">
                        Tratamento Psicológico para Ansiedade
                      </h2>

                      <p className="mb-0">
                        A ansiedade é uma reação natural do organismo diante de
                        situações desafiadoras, mas quando se torna excessiva,
                        constante ou desproporcional, pode impactar
                        significativamente a saúde emocional, o corpo e a
                        qualidade de vida.
                        <br />
                        <br />O acompanhamento psicológico ajuda a compreender
                        os gatilhos da ansiedade, desenvolver estratégias de
                        enfrentamento e promover maior equilíbrio emocional no
                        dia a dia.
                      </p>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-md-6 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>Redução de sintomas físicos e emocionais</li>
                          <li>Identificação de gatilhos da ansiedade</li>
                          <li>
                            Desenvolvimento de estratégias de enfrentamento
                          </li>
                          <li>Melhora da qualidade do sono</li>
                          <li>Fortalecimento da autorregulação emocional</li>
                        </ul>
                      </div>

                      <div className="col-md-6 mb-30">
                        <div className="skillbar-box mb-30">
                          <h6 className="title">Atendimento Individualizado</h6>
                          <div className="skillbar appear">
                            <p
                              className="skillbar-bar"
                              style={{ width: "100%" }}
                            ></p>
                            <span className="skill-bar-percent">100%</span>
                          </div>
                        </div>

                        <div className="skillbar-box mb-30">
                          <h6 className="title">Base Científica</h6>
                          <div className="skillbar appear">
                            <p
                              className="skillbar-bar"
                              style={{ width: "100%" }}
                            ></p>
                            <span className="skill-bar-percent">100%</span>
                          </div>
                        </div>

                        <div className="skillbar-box mb-0">
                          <h6 className="title">Promoção do Bem-estar</h6>
                          <div className="skillbar appear">
                            <p
                              className="skillbar-bar"
                              style={{ width: "95%" }}
                            ></p>
                            <span className="skill-bar-percent">95%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* TEXTO */}
                    <p className="mt-30">
                      A psicoterapia auxilia no desenvolvimento de habilidades
                      para lidar com pensamentos acelerados, preocupações
                      excessivas e sensações de insegurança, promovendo maior
                      autonomia emocional e qualidade de vida.
                    </p>
                  </div>

                  {/* PERGUNTAS FREQUENTES */}
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">Perguntas Frequentes</h4>
                      <p className="mb-0">
                        Dúvidas comuns sobre o tratamento psicológico da
                        ansiedade.
                      </p>
                    </div>

                    <Accordion
                      defaultActiveKey="0"
                      className="accordion ttr-accordion1"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Quando a ansiedade precisa de terapia?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Quando a ansiedade começa a interferir na rotina,
                            nos relacionamentos, no trabalho ou na saúde física,
                            a terapia é indicada para ajudar no manejo e
                            controle dos sintomas.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          A ansiedade tem tratamento?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Sim. Com acompanhamento psicológico adequado, é
                            possível reduzir os sintomas, compreender padrões de
                            pensamento e desenvolver estratégias eficazes para
                            lidar com a ansiedade.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          O atendimento pode ser online?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Sim. O atendimento online é uma opção eficaz e
                            segura, desde que avaliado de forma ética e adequada
                            às necessidades de cada pessoa.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

                    {/* CTA */}
                    <p className="mt-30">
                      Se a ansiedade tem impactado sua vida, buscar ajuda é um
                      passo importante. O cuidado psicológico pode trazer mais
                      equilíbrio, segurança e bem-estar emocional.
                    </p>

                    <li className="num-bx">
                      <a
                        href="https://wa.me/5516992091665?text=Olá!%20Gostaria%20de%20conversar%20sobre%20atendimento%20psicológico%20para%20ansiedade."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas btn btn-primary shadow">
                          Vamos conversar?
                        </i>
                      </a>
                    </li>
                  </div>
                </div>

                {/* SIDEBAR */}
                <div className="col-lg-4">
                  <aside className="sticky-top pb-1">
                    <div className="widget">
                      <ul className="service-menu">
                        <li className="active">
                          <Link to="/service-detail">
                            <span>Terapia Individual</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>

                        <li>
                          <Link to="/service-ansiedade">
                            <span>Ansiedade</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-tdah">
                            <span>TDAH</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-autism">
                            <span>Autismo (Apoio Familiar)</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-luto">
                            <span>Luto</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span>Depressão</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="widget">
                      <div className="brochure-bx">
                        <h5 className="title-head">Download</h5>
                        <Link to="#" className="download-link">
                          <img src={pdf} alt="" />
                          <h5 className="title">Guia sobre Ansiedade</h5>
                          <span>Download</span>
                        </Link>
                        <Link to="#" className="download-link">
                          <img src={doc} alt="" />
                          <h5 className="title">Informações da Profissional</h5>
                          <span>Download</span>
                        </Link>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default ServiceAnsiedade;
