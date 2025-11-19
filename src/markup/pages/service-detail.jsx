import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic1 from "../../images/services/pic1.jpg";
import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";

class ServiceDetail extends Component {

    render() {
        return (
            <>
                <div className="page-content bg-white">

                    <div className="banner-wraper">
                        <div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
                            <div className="container">
                                <div className="page-banner-entry text-center">
                                    <h1>Acompanhamento Psicológico</h1>
                                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         strokeWidth="2" strokeLinecap="round"
                                                         strokeLinejoin="round" className="feather feather-home">
                                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                                    </svg> Home
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Acompanhamento Psicológico
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
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
                                            <h2 className="title mb-15">Como a Psicologia Pode Transformar Sua Vida</h2>
                                            <p className="mb-0">
                                                O acompanhamento psicológico oferece um espaço seguro e acolhedor para
                                                compreender emoções, desenvolver autoconhecimento e construir estratégias
                                                mais saudáveis para lidar com ansiedade, depressão, conflitos, traumas,
                                                relacionamentos e dificuldades emocionais em geral.
                                            </p>
                                        </div>

                                        <div className="row align-items-center">
                                            <div className="col-md-6 mb-30">
                                                <ul className="list-check-squer mb-0">
                                                    <li>Redução da ansiedade e estresse</li>
                                                    <li>Melhora da autoestima e da autoconfiança</li>
                                                    <li>Apoio em momentos de crise emocional</li>
                                                    <li>Desenvolvimento de habilidades emocionais</li>
                                                    <li>Compreensão de padrões de comportamento</li>
                                                </ul>
                                            </div>

                                            <div className="col-md-6 mb-30">
                                                <div className="skillbar-box mb-30">
                                                    <h6 className="title">Acolhimento e Escuta Ativa</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{ width: "100%" }}></p>
                                                        <span className="skill-bar-percent">100%</span>
                                                    </div>
                                                </div>

                                                <div className="skillbar-box mb-30">
                                                    <h6 className="title">Sigilo Garantido (Código de Ética)</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{ width: "100%" }}></p>
                                                        <span className="skill-bar-percent">100%</span>
                                                    </div>
                                                </div>

                                                <div className="skillbar-box mb-0">
                                                    <h6 className="title">Atendimento Personalizado</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{ width: "95%" }}></p>
                                                        <span className="skill-bar-percent">95%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PERGUNTAS FREQUENTES */}
                                    <div className="clearfix">
                                        <div className="head-text mb-30">
                                            <h4 className="title mb-10">Perguntas Frequentes</h4>
                                            <p className="mb-0">
                                                Tire algumas das principais dúvidas sobre o processo terapêutico.
                                            </p>
                                        </div>

                                        <Accordion defaultActiveKey="0" className="accordion ttr-accordion1">

                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Como a terapia pode me ajudar?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">
                                                        A terapia ajuda você a compreender emoções, identificar padrões,
                                                        reduzir ansiedade, melhorar relacionamentos e desenvolver
                                                        habilidades emocionais para viver de forma mais equilibrada.
                                                    </p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Quanto tempo dura o tratamento?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">
                                                        A duração varia de pessoa para pessoa. Alguns buscam apoio para
                                                        questões específicas, outros para autoconhecimento contínuo.
                                                    </p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>A terapia é confidencial?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">
                                                        Sim. Todo atendimento psicológico segue regras de sigilo
                                                        definidas pelo Código de Ética Profissional.
                                                    </p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Qual a diferença entre psicólogo e psiquiatra?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">
                                                        Psicólogos trabalham com terapia e apoio emocional. Psiquiatras
                                                        são médicos que podem prescrever medicação. Em muitos casos,
                                                        ambos trabalham em conjunto.
                                                    </p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>Posso fazer terapia online?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">
                                                        Sim. A terapia online é regulamentada e oferece o mesmo sigilo,
                                                        acolhimento e qualidade do atendimento presencial.
                                                    </p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>
                                    </div>
                                </div>

                                {/* SIDEBAR */}
                                <div className="col-lg-4">
                                    <aside className="sticky-top pb-1">
                                        <div className="widget">
                                            <ul className="service-menu">
                                                <li className="active"><Link to="/service-detail"><span>Terapia Individual</span><i className="fa fa-angle-right"></i></Link></li>
                                                <li><Link to="/service-detail"><span>Ansiedade</span><i className="fa fa-angle-right"></i></Link></li>
                                                <li><Link to="/service-detail"><span>TDAH em adultos</span><i className="fa fa-angle-right"></i></Link></li>
                                                <li><Link to="/service-detail"><span>Autismo (Apoio Familiar)</span><i className="fa fa-angle-right"></i></Link></li>
                                                <li><Link to="/service-detail"><span>Relacionamentos</span><i className="fa fa-angle-right"></i></Link></li>
                                                <li><Link to="/service-detail"><span>Depressão</span><i className="fa fa-angle-right"></i></Link></li>
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

export default ServiceDetail;
