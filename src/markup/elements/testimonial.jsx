import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import testShape from "../../images/testimonials/shape.png"
/*import testPic1 from "../../images/testimonials/pic1.jpg" */
import testPic2 from "../../images/testimonials/pic2.jpg"
import testPic3 from "../../images/testimonials/pic3.jpg"
// import testPic4 from "../../images/testimonials/pic4.jpg"
import testPic5 from "../../images/testimonials/pic5.jpg"
import testPic6 from "../../images/testimonials/pic6.jpg"
import plusOrange from "../../images/shap/plus-orange.png"
import squareBlue from "../../images/shap/square-blue.png"
import circleDots from "../../images/shap/circle-dots.png"
import circleOrange2 from "../../images/shap/circle-orange-2.png"

class testimonialSection extends Component{
	
	render(){
			
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		
		return(
			<>
				<section className="section-area section-sp3 testimonial-wraper">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary">Depoimentos</h6>
							<h2 className="title m-b0">Veja o que meus pacientes <br/>dizem sobre mim</h2>
						</div>
						<div className="row align-items-center">
							<div className="col-lg-6 text-center">
								<div className="thumb-wraper">
									<img className="bg-img" src={testShape} alt=""/>
									<ul>
										<li data-member="1"><Link to="#"><img src={testPic3} alt=""/></Link></li>
										<li data-member="2"><Link to="#"><img src={testPic2} alt=""/></Link></li>
										{/* <li data-member="3"><Link to="#"><img src={testPic4} alt=""/></Link></li>
										<li data-member="4"><Link to="#"><img src={testPic4} alt=""/></Link></li> */}
										<li data-member="5"><Link to="#"><img src={testPic5} alt=""/></Link></li>
										<li data-member="6"><Link to="#"><img src={testPic6} alt=""/></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<Slider {...settings} className="testimonial-slide">
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Na minha cabeça fazem alguns anos que aceitei que precisava de terapia, mas não tinha “coragem” de começar. Quando descobri que a Edinéia estava atendendo, meu coração se abriu, a ideia de anos amadureceu… oportunidade surgiu no momento de turbulência profissional e pessoal.
Quando comecei a terapia, pensei porque não comecei antes.
O ambiente que a Edinéia prepara nas sessões (on-line e presencial) é um dos gatilhos para nos sentirmos à vontade.
Muito grata por todo suporte e por ter conhecido uma pessoa e profissional tão fantástica assim🙏🏾🫶🏾😘</p>
											</div>
											<div className="client-info">
												<h5 className="name">Jessica</h5>
												<p>Paciente</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Profissional maravilhosa, completamente ética e super atenciosa, minha filha ama e Edineia e eu também , super recomendo</p>
											</div>
											<div className="client-info">
												<h5 className="name">Marina Escobar</h5>
												<p>Mãe de paciente</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Atende meu filho de 6 anos , muito competente e atenciosa , amo o trabalho que ela faz.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Mercela Pandochi</h5>
												<p>Mãe de paciente</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									{/* <div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
											</div>
											<div className="client-info">
												<h5 className="name">John Deo</h5>
												<p>Paciente</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div> */}
									{/* <div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
											</div>
											<div className="client-info">
												<h5 className="name">John Deo</h5>
												<p>Paciente</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div> */}
								</Slider>
							</div>	 
						</div>	 
					</div>
					<img className="pt-img1 animate1" src={plusOrange} alt=""/>
					<img className="pt-img2 animate2" src={squareBlue} alt=""/>
					<img className="pt-img3 animate3" src={circleDots} alt=""/>
					<img className="pt-img4 animate4" src={circleOrange2} alt=""/>
				</section>
				
			</>
		);
	}
}

export default testimonialSection;