import React,{Component, useState, useEffect} from 'react';
import  {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper} from 'simple-react-lightbox';
import { useLightbox } from 'simple-react-lightbox'; 
 
const imageBlog = [
	{ image: require("./../../images/gallery/masonry/img1.jpg"), tag: ['Designing','Archeology','Development'] , },
	{ image: require("./../../images/gallery/masonry/img2.jpg"), tag: ['Construct'] , }, 
	{ image: require("./../../images/gallery/masonry/img3.jpg"), tag: ['Designing'] , }, 
	{ image: require("./../../images/gallery/masonry/img4.jpg"), tag: ['Development'], },
	{ image: require("./../../images/gallery/masonry/img5.jpg"), tag: ['Finance','Archeology','Development'], }, 
	{ image: require("./../../images/gallery/masonry/img6.jpg"), tag: ['Development','Archeology','Construct'] , }, 
	{ image: require("./../../images/gallery/masonry/img2.jpg"), tag: ['Archeology','Construct'] , },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), tag: ['Finance'] , }, 
	{ image: require("./../../images/gallery/masonry/img1.jpg"), tag: ['Designing','Archeology','Development'] , }, 
]                                                               
                                                                
const masonryOptions = {                                          
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

const Iconimage = props => {
  const { openLightbox } = useLightbox()

  return (
    <Link  to={'#'} onClick={() => openLightbox(props.imageToOpen)} >
      <i className="ti-fullscreen"></i>
    </Link>
  )
}

const TagLi = ({name, handlesettag, tagActive}) => {                                                               
	return ( 
			
		<li className={` tag ${tagActive ? 'btn active' : 'btn'}` } onClick={() => handlesettag(name)} >
			<input type="radio" />
			<Link to={"#"}>	<span>{name} {''}</span> </Link>
		</li> 
	);
};
 
class Gallery extends Component {
    render() {   
		return (
			<div className="content-block">
				<div className="section-full content-inner-2 portfolio-box">
					<div className="container">
						<div className="section-head text-black text-center m-b20">
							<h2 className="m-b10">Our Portfolio</h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
						</div>
						<PortfolioItem />
					</div>
				</div>		
			</div>
        );
    }
}

function PortfolioItem(){
	const [tag, setTag] = useState('All');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'All' ? setFilterdImages(imageBlog) : setFilterdImages(imageBlog.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
		<div>
			<div className="site-filters style1 clearfix center">
				<ul className="filters" data-toggle="buttons">
					<TagLi name="All"  handlesettag={setTag} tagActive={ tag === 'All' ? true : false }	/>
					<TagLi name="Designing"  handlesettag={setTag} tagActive={ tag === 'Designing' ? true : false }	/>
					<TagLi name="Construct" handlesettag={setTag} tagActive={ tag === 'Construct' ? true : false }	 />
					<TagLi name="Finance"  handlesettag={setTag} tagActive={ tag === 'Finance' ? true : false }	/>
					<TagLi name="Development"  handlesettag={setTag} tagActive={ tag === 'Development' ? true : false }	/>
					<TagLi name="Archeology"  handlesettag={setTag} tagActive={ tag === 'Archeology' ? true : false }	/>
				</ul>
			</div>
			<SimpleReactLightbox>
				<SRLWrapper >
					<div className="clearfix">
						<ul className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10">
							<Masonry
								className={'my-gallery-class'} // default ''
								options={masonryOptions} // default {}
								disableImagesLoaded={false} // default false
								updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
								imagesLoadedOptions={imagesLoadedOptions} // default {}
							>
								{filteredImages.map((item, index)=>(	
									<li className="card-container col-lg-4 col-md-3 col-sm-6 col-6 web design " key={index}>
										<div className="dez-box dez-gallery-box">
											<div className="dez-media dez-img-overlay1 dez-img-effect">
													
												<img src={item.image}  alt="" /> 
												<div className="overlay-bx">
													<div className="overlay-icon"> 
														<Iconimage />	
													</div>
												</div>	
												
											</div>
										</div>
									</li>
								))}	
							</Masonry>	
						</ul>
					</div>	
				</SRLWrapper>
			</SimpleReactLightbox>	
		</div>
	);
}
 
export default Gallery;

