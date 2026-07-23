import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

import bnrImg1 from "../../images/banner/img1.jpg";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic5 from "../../images/services/pic5.png";

class ServiceDepressao extends Component {
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
                  <h1>Depressão</h1>
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
                        Depressão
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
                        Tratamento Psicológico para Depressão
                      </h2>

                      <p className="mb-0">
                        A depressão é uma condição de saúde mental que pode
                        afetar o humor, os pensamentos, a energia e a forma como
                        a pessoa se relaciona consigo mesma e com o mundo.
                        <br />
                        <br />O acompanhamento psicológico oferece um espaço
                        seguro e acolhedor para compreender emoções,
                        ressignificar experiências e fortalecer recursos
                        internos, promovendo mais equilíbrio emocional e
                        qualidade de vida.
                      </p>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-md-6 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>Redução do sofrimento emocional</li>
                          <li>Compreensão dos pensamentos depressivos</li>
                          <li>Fortalecimento da autoestima</li>
                          <li>
                            Reconstrução da motivação e do sentido de vida
                          </li>
                          <li>Promoção do bem-estar emocional</li>
                        </ul>
                      </div>

                      <div className="col-md-6 mb-30">
                        <div className="skillbar-box mb-30">
                          <h6 className="title">Escuta Qualificada</h6>
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
                          <h6 className="title">Cuidado Emocional Contínuo</h6>
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
                      A psicoterapia não tem como objetivo forçar mudanças
                      rápidas, mas ajudar a pessoa a construir, passo a passo,
                      novas formas de lidar com suas emoções, pensamentos e
                      desafios, respeitando seu tempo e sua história.
                    </p>
                  </div>

                  {/* PERGUNTAS FREQUENTES */}
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">Perguntas Frequentes</h4>
                      <p className="mb-0">
                        Dúvidas comuns sobre o tratamento psicológico da
                        depressão.
                      </p>
                    </div>

                    <Accordion
                      defaultActiveKey="0"
                      className="accordion ttr-accordion1"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Quando a depressão precisa de acompanhamento?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Quando sentimentos de tristeza, desânimo ou falta de
                            interesse persistem e começam a afetar a rotina, os
                            relacionamentos ou o bem-estar, buscar
                            acompanhamento psicológico é um passo importante.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          A depressão tem tratamento?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Sim. Com acompanhamento psicológico adequado, é
                            possível reduzir o sofrimento emocional, desenvolver
                            novos recursos internos e promover melhora da
                            qualidade de vida.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          O atendimento pode ser online?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Sim. O atendimento online pode ser eficaz e seguro,
                            desde que avaliado de forma ética e adequado às
                            necessidades de cada pessoa.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

                    {/* CTA */}
                    <p className="mt-30">
                      Se você sente que tem sido difícil lidar com suas emoções,
                      saiba que buscar ajuda é um gesto de cuidado consigo
                      mesma. A psicoterapia pode ser um caminho de apoio e
                      fortalecimento.
                    </p>

                    <div className="num-bx">
                      <a
                        href="https://wa.me/5516992091665?text=Olá!%20Gostaria%20de%20conversar%20sobre%20atendimento%20psicológico%20para%20depressão."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas btn btn-primary shadow">
                          Vamos conversar?
                        </i>
                      </a>
                    </div>
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

                        <li className="active">
                          <Link to="/service-depressao">
                            <span>Depressão</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                      </ul>
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

export default ServiceDepressao;
