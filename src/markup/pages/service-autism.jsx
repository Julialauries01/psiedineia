import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic1 from "../../images/services/pic2.png";
import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";

class ServiceAutism extends Component {
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
                  <h1>Autismo (TEA)</h1>
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
                        Autismo (TEA)
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
                    <img src={servicesPic1} className="rounded" alt="" />
                  </div>

                  {/* SOBRE O SERVIÇO */}
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h2 className="title mb-15">
                        Compreendendo o Autismo (TEA) e o Potencial da Terapia
                      </h2>
                      <p className="mb-0">
                        O Transtorno do Espectro Autista (TEA) é uma condição do
                        neurodesenvolvimento caracterizada por diferenças na
                        comunicação, na interação social e no processamento
                        sensorial e cognitivo. Essas características se
                        manifestam de forma única em cada pessoa — por isso o
                        termo "espectro" –, podendo incluir interesses intensos,
                        padrões de comportamento repetitivos e formas variadas
                        de perceber o mundo.
                        <br />
                        <br />
                        Mais do que um conjunto de desafios, o autismo envolve
                        uma maneira singular de ser.
                        <br></br>
                        <br></br>A intervenção adequada não busca "curar", mas
                        promover desenvolvimento, autonomia, qualidade de vida e
                        bem-estar, respeitando a individualidade de cada um.
                      </p>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-md-6 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>
                            Desenvolvimento da comunicação e habilidades sociais
                          </li>
                          <li>Redução de comportamentos desafiadores</li>
                          <li>Promoção da autonomia no dia a dia</li>
                          <li>Fortalecimento das habilidades emocionais</li>
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
                          <h6 className="title">Base Científica (ABA)</h6>
                          <div className="skillbar appear">
                            <p
                              className="skillbar-bar"
                              style={{ width: "100%" }}
                            ></p>
                            <span className="skill-bar-percent">100%</span>
                          </div>
                        </div>

                        <div className="skillbar-box mb-0">
                          <h6 className="title">
                            Apoio à Família e Cuidadores
                          </h6>
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

                    {/* TEXTO ABA */}
                    <p className="mt-30">
                      A Terapia Comportamental, baseada nos princípios da
                      Análise do Comportamento Aplicada (ABA), é uma das
                      abordagens com maior respaldo científico para o
                      acompanhamento de pessoas no espectro autista. O trabalho
                      é prático, funcional e totalmente adaptado às
                      necessidades, interesses e potencialidades de cada
                      indivíduo.
                    </p>
                  </div>

                  {/* PERGUNTAS FREQUENTES */}
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">Perguntas Frequentes</h4>
                      <p className="mb-0">
                        Tire algumas das principais dúvidas sobre o
                        acompanhamento psicológico no TEA.
                      </p>
                    </div>

                    <Accordion
                      defaultActiveKey="0"
                      className="accordion ttr-accordion1"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Como a terapia comportamental pode ajudar no TEA?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            A Terapia Comportamental, com base nos princípios da
                            Análise do Comportamento Aplicada (ABA) é uma das
                            abordagens com mais evidências científicas para o
                            apoio a pessoas no espectro autista. Seu foco é
                            prático e funcional:
                            <br />
                            <br />
                            <span className="aba-item">
                              <span className="aba-dot">•</span>
                              Redução de Comportamentos Desafiadores
                            </span>
                            <br />
                            <span className="aba-item">
                              <span className="aba-dot">•</span>
                              Apoio à Família: Orienta e treina pais e
                              cuidadores, tornando-os agentes ativos no processo
                              de desenvolvimento, criando um ambiente
                              previsível, estruturado e de suporte.
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
                            O trabalho é individualizado. Partimos de uma
                            avaliação detalhada para entender os pontos fortes,
                            os interesses e as necessidades únicas de cada
                            pessoa, estabelecendo metas significativas para sua
                            vida.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          A família participa do processo terapêutico?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Sim. A família é parte fundamental do processo. Pais
                            e cuidadores recebem orientações para criar um
                            ambiente estruturado, previsível e de apoio,
                            tornando-se agentes ativos no desenvolvimento.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4">
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

                    <p className="mt-30">
                      Meu objetivo, como psicóloga, é atuar como uma
                      facilitadora nessa jornada, criando, junto com a família,
                      um caminho de evolução contínua, respeito e valorização
                      das potencialidades de cada indivíduo.
                    </p>

                    {/* CTA FINAL */}
                    <p className="mt-30">
                      Entre em contato para agendar uma avaliação inicial e
                      conversarmos sobre um plano de intervenção
                      individualizado. Estou à disposição para esclarecer
                      dúvidas e orientar sua família nesse processo.
                    </p>
                  </div>
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
                        <li>
                          <Link to="/service-detail">
                            <span>TDAH em adultos</span>
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                        <li className="active">
                          <Link to="/service-autism">
                            <span>Autismo (Apoio Familiar)</span>
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

export default ServiceAutism;
