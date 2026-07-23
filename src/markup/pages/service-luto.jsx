import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic4 from "../../images/services/pic4.png";

class ServiceLuto extends Component {
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
                  <h1>Luto</h1>
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
                        Luto
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
                    <img src={servicesPic4} className="rounded" alt="" />
                  </div>

                  {/* SOBRE O SERVIÇO */}
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h2 className="title mb-15">
                        Acolhimento Psicológico no Processo de Luto
                      </h2>

                      <p className="mb-0">
                        O luto é uma resposta natural diante de perdas
                        significativas — seja pela morte de alguém querido,
                        rompimentos, mudanças importantes ou perdas simbólicas.
                        Cada pessoa vivencia esse processo de forma única, com
                        emoções, pensamentos e tempos próprios.
                        <br />
                        <br />O acompanhamento psicológico oferece um espaço
                        seguro, acolhedor e ético para que a dor possa ser
                        expressa, compreendida e elaborada, respeitando o ritmo
                        individual e promovendo cuidado emocional.
                      </p>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-md-6 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>Acolhimento emocional sem julgamentos</li>
                          <li>Elaboração saudável da perda</li>
                          <li>Compreensão das fases do luto</li>
                          <li>Redução de sofrimento emocional intenso</li>
                          <li>
                            Reconstrução gradual da rotina e do sentido de vida
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-6 mb-30">
                        <div className="skillbar-box mb-30">
                          <h6 className="title">Escuta Acolhedora</h6>
                          <div className="skillbar appear">
                            <p
                              className="skillbar-bar"
                              style={{ width: "100%" }}
                            ></p>
                            <span className="skill-bar-percent">100%</span>
                          </div>
                        </div>

                        <div className="skillbar-box mb-30">
                          <h6 className="title">
                            Respeito ao Ritmo Individual
                          </h6>
                          <div className="skillbar appear">
                            <p
                              className="skillbar-bar"
                              style={{ width: "100%" }}
                            ></p>
                            <span className="skill-bar-percent">100%</span>
                          </div>
                        </div>

                        <div className="skillbar-box mb-0">
                          <h6 className="title">Apoio Emocional Contínuo</h6>
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
                      A psicoterapia no luto não tem como objetivo apagar a dor,
                      mas ajudar a pessoa a encontrar formas mais saudáveis de
                      conviver com a ausência, ressignificar a perda e seguir em
                      frente com cuidado, respeito e suporte emocional.
                    </p>
                  </div>

                  {/* PERGUNTAS FREQUENTES */}
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">Perguntas Frequentes</h4>
                      <p className="mb-0">
                        Dúvidas comuns sobre o acompanhamento psicológico no
                        luto.
                      </p>
                    </div>

                    <Accordion
                      defaultActiveKey="0"
                      className="accordion ttr-accordion1"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Preciso de terapia para viver o luto?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            O luto é um processo natural, mas em alguns momentos
                            pode se tornar muito intenso ou prolongado. A
                            terapia oferece um espaço seguro para acolher a dor,
                            compreender emoções e evitar sofrimento
                            desnecessário.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Existe um tempo certo para o luto?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Não. Cada pessoa vive o luto de forma única. O
                            acompanhamento psicológico respeita o ritmo
                            individual, sem pressa ou cobranças.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          O atendimento pode ser online?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Sim, em muitos casos o atendimento online é possível
                            e eficaz, garantindo acolhimento emocional e
                            continuidade do cuidado.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

                    {/* CTA */}
                    <p className="mt-30">
                      Se você está passando por um momento de perda, saiba que
                      não precisa enfrentar isso sozinha. Estou aqui para
                      acolher e caminhar com você nesse processo.
                    </p>

                    <div className="num-bx">
                      <a
                        href="https://wa.me/5516992091665?text=Olá!%20Gostaria%20de%20conversar%20sobre%20acolhimento%20psicológico%20no%20luto."
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

                        <li className="active">
                          <Link to="/service-luto">
                            <span>Luto</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>

                        <li>
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

export default ServiceLuto;
