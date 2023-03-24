import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Masonrypage from './../Element/Masonrypage';

var bnr = require('./../../images/banner/bnr2.jpg'); 

class Portfoliogrid2 extends Component{
	render(){
		return(
			<div className="page-wraper">
				<Header />
					<div className="page-content bg-white">
				
						<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" +  bnr + ")" }}>
							<div className="container">
								<div className="dez-bnr-inr-entry">
									<h1 className="text-white">Portfolio Masonry</h1>
									
									<div className="breadcrumb-row">
										<ul className="list-inline">
											<li><Link to={"#"}>Home</Link></li>
											<li>Portfolio Masonry</li>
										</ul>
									</div>
								</div>
							</div>
						</div>	
						<Masonrypage />
					</div>	
							
				<Footer />
				
			</div>	
		)
	}
}

export default Portfoliogrid2;