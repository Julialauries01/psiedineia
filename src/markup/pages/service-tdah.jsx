import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic3 from "../../images/services/pic3.png";
import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";

class ServiceTdah extends Component {
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
                  <h1>TDAH</h1>
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
                        TDAH
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
                    <img src={servicesPic3} className="rounded" alt="" />
                  </div>

                  {/* SOBRE O SERVIÇO */}
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h2 className="title mb-15">
                        Compreendendo o TDAH e o Potencial da Terapia
                      </h2>

                      <p className="mb-0">
                        O Transtorno do Déficit de Atenção e Hiperatividade
                        (TDAH) é uma condição do neurodesenvolvimento
                        caracterizada por dificuldades persistentes de atenção,
                        organização, impulsividade e, em alguns casos,
                        hiperatividade. Esses aspectos podem impactar a vida
                        acadêmica, profissional, social e emocional.
                        <br />
                        <br />
                        Com acompanhamento psicológico adequado, é possível
                        desenvolver estratégias eficazes para melhorar o foco, a
                        autorregulação emocional, a autonomia e a qualidade de
                        vida.
                      </p>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-md-6 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>Melhora da atenção e da concentração</li>
                          <li>Organização e planejamento da rotina</li>
                          <li>Redução da impulsividade</li>
                          <li>Fortalecimento da autorregulação emocional</li>
                          <li>Apoio e orientação para a família</li>
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
                          <h6 className="title">Apoio Familiar</h6>
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
                      A Terapia Comportamental é uma abordagem baseada em
                      evidências científicas que auxilia pessoas com TDAH no
                      desenvolvimento de habilidades práticas para lidar com
                      desafios do cotidiano, promovendo autonomia, organização e
                      bem-estar.
                    </p>
                  </div>

                  {/* PERGUNTAS FREQUENTES */}
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">Perguntas Frequentes</h4>
                      <p className="mb-0">
                        Tire algumas das principais dúvidas sobre o
                        acompanhamento psicológico no TDAH.
                      </p>
                    </div>

                    <Accordion
                      defaultActiveKey="0"
                      className="accordion ttr-accordion1"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Como a terapia pode ajudar no TDAH?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            A terapia comportamental auxilia no desenvolvimento
                            de estratégias práticas para lidar com os sintomas
                            do TDAH, promovendo maior funcionalidade no dia a
                            dia:
                            <br />
                            <br />
                            <span className="aba-item">
                              <span className="aba-dot">•</span>
                              Melhora da atenção, organização e controle de
                              impulsos
                            </span>
                            <br />
                            <span className="aba-item">
                              <span className="aba-dot">•</span>
                              Apoio à Família: orientação para criação de
                              rotinas estruturadas, previsíveis e estratégias de
                              manejo comportamental.
                            </span>
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          O atendimento é individualizado?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Sim. O acompanhamento é personalizado, respeitando
                            as necessidades, desafios e potencialidades de cada
                            pessoa.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          O atendimento pode ser online?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Dependendo do caso, sim. O formato é avaliado com
                            cuidado para garantir que o acompanhamento seja
                            ético, eficaz e adequado às necessidades da pessoa e
                            da família.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

                    {/* CTA */}
                    <p className="mt-30">
                      Entre em contato para agendar uma avaliação inicial e
                      conversarmos sobre um plano terapêutico individualizado.
                    </p>

                    <li className="num-bx">
                      <a
                        href="https://wa.me/5516992091665?text=Olá!%20Gostaria%20de%20conversar%20sobre%20atendimento%20psicológico."
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
                        <li>
                          <Link to="/service-detail">
                            <span>Terapia Individual</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-detail">
                            <span>Ansiedade</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                        <li className="active">
                          <Link to="/service-tdah">
                            <span>TDAH</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-autism">
                            <span>Autismo</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-detail">
                            <span>Relacionamentos</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-detail">
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
                          <h5 className="title">Guia de Saúde Mental</h5>
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

export default ServiceTdah;
