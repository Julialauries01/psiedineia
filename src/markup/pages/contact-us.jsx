import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";


class ContactUs extends Component{
	
	render(){
		return (
			<>
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner banner-lg contact-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Contact Us</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Contate-me</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={animateWave} alt=""/>
							<img className="pt-img2 animate2" src={animate2} alt=""/>
							<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/>
						</div>
					</div>
					
					<section className="">
						<div className="container">
							<div className="contact-wraper">
								<div className="row">
									<div className="col-lg-6 mb-30">
										<form className="form-wraper contact-form ajax-form">
											<div className="ajax-message"></div>
											<div className="row">
												<div className="form-group col-md-12">
													<input name="name" type="text" required className="form-control" placeholder="Seu nome"/>
												</div>
												<div className="form-group col-md-12">
													<input name="email" type="email" required className="form-control" placeholder="Email"/>
												</div>
												<div className="form-group col-md-12">
													<input name="phone" type="text" required className="form-control" placeholder="Número de telefone"/>
												</div>

												<div className="form-group col-md-12">
													<textarea name="message" required className="form-control" placeholder="Deixe uma mensagem"></textarea>
												</div>
												<div className="col-lg-12">
													<button name="submit" type="submit" defaultValue="Submit" className="btn w-100 btn-secondary btn-lg">Enviar</button>
												</div>
											</div>
										</form>
									</div>
									<div className="col-lg-6 mb-30">
										<div className="contact-info ovpr-dark" style={{backgroundImage: "url("+pic1+")"}}>
											<div className="info-inner">
												<h4 className="title mb-30">Contate-me para mais informações</h4>
												<div className="icon-box">
													<h6 className="title"><i className="ti-map-alt"></i>Localização</h6>		
													<p>Rua Rui Barbosa, 1141, Centro, Ribeirão Preto, São Paulo - Brasil</p>
												</div>
												<div className="icon-box">
													<h6 className="title"><i className="ti-id-badge"></i>Email &amp; Telefone</h6>		
													<Link to="#" className="text-white">edineiasaraiva.psi@gmail.com</Link>
													<p>(16) 99209-1665</p>
												</div>
												<div className="icon-box">
													<h6 className="title"><i className="ti-world"></i>Siga-me</h6>
													<ul className="social-media">
														<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/psi.edineiasaraiva"><i className="fab fa-instagram"></i></a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					
					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx4 feature4">
										<div className="icon-md feature-icon">
											<img src={icon1} alt=""/>
										</div>
										<div className="icon-content">
											<h5 className="ttr-title">Telefone de contato</h5>
											<p>Contate-me através do número:<br />
												+55 (16) 99209-1665
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx4 feature3">
										<div className="icon-md feature-icon">
											<img src={icon3} alt=""/>
										</div>
										<div className="icon-content">
											<h5 className="ttr-title">Endereço de e-mail</h5>
											<p>Contate-me através do e-mail:<br /> edineiasaraiva.psi@gmail.com</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx4 feature2">
										<div className="icon-md feature-icon">
											<img src={icon2} alt=""/>
										</div>
										<div className="icon-content">
											<h5 className="ttr-title">Endereço</h5>
											<p>Rua Rui Barbosa, 1141, Centro, Ribeirão Preto, São Paulo - Brasil
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				
				</div>
				
			</>
		);
	}
}

export default ContactUs;