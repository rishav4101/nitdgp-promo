import React, { useEffect } from 'react';
import '../slider.css';

const ImportBodyScript = resourceUrl => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);

    return() => {
      document.body.removeChild(script);
    }
  }, [resourceUrl]);
};
const ImportHeadScript = resourceUrl => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    document.head.appendChild(script);

    return() => {
      document.head.removeChild(script);
    }
  }, [resourceUrl]);
};


const Slider = () => {

  ImportHeadScript("assets/js/slider/top.js");
  ImportHeadScript("assets/js/slider/generated-default-header_1605622709300.js");

  ImportBodyScript("assets/js/slider/1.11.3-jquery.min.js");
  ImportBodyScript("assets/js/slider/bottom.js");
  ImportBodyScript("assets/js/slider/generated-default-footer_1605622709300.js");

  return(
    <div id="content" className="site-content wrapper container">
        <div id="home-wrapper">
            <div id="home-slider-wrapper">
                <div id="home-slider" className="scroll-anim" data-scroll-class="Paralax">
                    <div className="home-slide-item current  home-slide-item--gradiant">
                        <div className="home-slide-item-paralax bkg-full paralax" data-start-y="0" data-end-y="120"
                             data-start-scroll="0%" data-end-scroll="0%">
                            <div className="home-slide-item-bkg-mask bkg-full">
                                <div className="home-slide-item-bkg bkg-full">
                                    <div className="home-slide-item-bkg-img bkg-full bkg-cover"
                                         style={{backgroundImage:`url("assets/images/slider/1.jpg")`}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper wrapper--medium home-slide-item-text">
                            <div className="inner">
                                <div className="home-slide-content has-hover-text">
                                    <div className="hover-text hover-text--lire"><span>LI</span><span>RE</span></div>
                                    <div className="home-slider-item-content">
                                        <ul className="categories">
                                            <li className="main-category">NIT</li>
                                            <li>DURGAPUR</li>
                                        </ul>
                                        <h5>Main Academic Building</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-slide-item   home-slide-item--gradiant">
                        <div className="home-slide-item-paralax bkg-full paralax" data-start-y="0" data-end-y="120"
                             data-start-scroll="0%" data-end-scroll="0%">
                            <div className="home-slide-item-bkg-mask bkg-full">
                                <div className="home-slide-item-bkg bkg-full">
                                    <div className="home-slide-item-bkg-img bkg-full bkg-cover"
                                         style={{backgroundImage:`url("assets/images/slider/2.jpg")`}}>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper wrapper--medium home-slide-item-text">
                            <div className="inner">
                                <div className="home-slide-content has-hover-text">
                                    <div className="hover-text hover-text--lire"><span>LI</span><span>RE</span></div>
                                    <div className="home-slider-item-content">
                                        <ul className="categories">
                                            <li className="main-category">NIT</li>
                                            
                                            <li>DURGAPUR</li>
                                        </ul>
                                        <h5>15th <small>Convocation Ceremony</small> </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-slide-item   home-slide-item--gradiant">
                        <div className="home-slide-item-paralax bkg-full paralax" data-start-y="0" data-end-y="120"
                             data-start-scroll="0%" data-end-scroll="0%">
                            <div className="home-slide-item-bkg-mask bkg-full">
                                <div className="home-slide-item-bkg bkg-full">
                                    <div className="home-slide-item-bkg-img bkg-full bkg-cover"
                                         style={{backgroundImage:`url("assets/images/slider/3.jpg")`}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper wrapper--medium home-slide-item-text">
                            <div className="inner">
                                <div className="home-slide-content has-hover-text">
                                    <div className="hover-text hover-text--voir"><span>VO</span><span>IR</span></div>
                                    <div className="home-slider-item-content">
                                        <ul className="categories">
                                            <li className="main-category">MAIN</li>
                                            <li>ENTRANCE</li>
                                        </ul>
                                        <h5><small>Remembering &ndash;</small></h5> 
                                        <h5>Dr. Bidhan Chandra Roy  </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-slide-item   home-slide-item--gradiant">
                        <div className="home-slide-item-paralax bkg-full paralax" data-start-y="0" data-end-y="120"
                             data-start-scroll="0%" data-end-scroll="0%">
                            <div className="home-slide-item-bkg-mask bkg-full">
                                <div className="home-slide-item-bkg bkg-full">
                                    <div className="home-slide-item-bkg-img bkg-full bkg-cover"
                                         style={{backgroundImage:`url("assets/images/slider/4.jpg")`}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper wrapper--medium home-slide-item-text">
                            <div className="inner">
                                <div className="home-slide-content has-hover-text">
                                    <div className="hover-text hover-text--voir"><span>VO</span><span>IR</span></div>
                                    <div className="home-slider-item-content">
                                        <ul className="categories">
                                            <li className="main-category">ART &</li>
                                          
                                            <li>PHOTOGRAPHY CLUB</li>
                                        </ul>
                                        <h5>WALL ART BY STROKES </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-slide-item   home-slide-item--gradiant">
                        <div className="home-slide-item-paralax bkg-full paralax" data-start-y="0" data-end-y="120"
                             data-start-scroll="0%" data-end-scroll="0%">
                            <div className="home-slide-item-bkg-mask bkg-full">
                                <div className="home-slide-item-bkg bkg-full">
                                    <div className="home-slide-item-bkg-img bkg-full bkg-cover"
                                         style={{backgroundImage:`url("assets/images/slider/5.jpg")`}}>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper wrapper--medium home-slide-item-text">
                            <div className="inner">
                                <div className="home-slide-content has-hover-text">
                                    <div className="hover-text hover-text--lire"><span>LI</span><span>RE</span></div>
                                    <div className="home-slider-item-content">
                                        <ul className="categories">
                                            <li className="main-category">Live</li>
                                            <li>Performances</li>
                                        </ul>
                                        <h5>Nityamini </h5> 
                                        <h5><small>the annual cultural fest</small>  </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="wrapper wrapper--medium" id="slider-home-pagers-wrapper">
                    <div id="slider-home-pagers">
                <span className="current">
                        <span className="bkg-wrapper">
                            <span className="bkg-full">
                                <span className="bkg bkg-cover bkg-full"
                                      style={{backgroundImage: `url("assets/images/slider/1.jpg")`}}></span>
                            </span>
                        </span>
                        <span className="progress"></span>
                    </span><span className="">
                        <span className="bkg-wrapper">
                            <span className="bkg-full">
                                <span className="bkg bkg-cover bkg-full"
                                      style={{backgroundImage: `url("assets/images/slider/2.jpg")`}}></span>
                            </span>
                        </span>
                        <span className="progress"></span>
                    </span><span className="">
                        <span className="bkg-wrapper">
                            <span className="bkg-full">
                                <span className="bkg bkg-cover bkg-full"
                                      style={{backgroundImage: `url("assets/images/slider/3.jpg")`}}></span>
                            </span>
                        </span>
                        <span className="progress"></span>
                    </span><span className="">
                        <span className="bkg-wrapper">
                            <span className="bkg-full">
                                <span className="bkg bkg-cover bkg-full"
                                      style={{backgroundImage: `url("assets/images/slider/4.jpg")`}}></span>
                            </span>
                        </span>
                        <span className="progress"></span>
                    </span><span className="">
                        <span id="startCarousel" className="bkg-wrapper">
                            <span className="bkg-full">
                                <span className="bkg bkg-cover bkg-full"
                                      style={{backgroundImage: `url("assets/images/slider/5.jpg")`}}></span>
                            </span>
                        </span>
                        <span className="progress"></span>
                    </span></div>
                </div>
                <div className="wrapper wrapper--large" id="slider-home-cache-bottom">
                </div>
            </div>
        </div>
    </div>
  );
}
export default Slider;
