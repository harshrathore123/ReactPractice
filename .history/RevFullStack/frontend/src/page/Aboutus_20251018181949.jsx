import '../../public/css/style.css';
import '../../public/css/hover-style.css';
export default function Aboutus(){
    return(
        <>
                {/* <!-- About Section Start --> */}
        <div id="about">
            <div className="container">
                <div className="section-header">
                    <h2>About Loft City</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mi libero. Quisque convallis, enim at venenatis tincidunt.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-6 img-cols">
                        <div className="img-col">
                            <img className="img-fluid" src="img/about/about-1.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-6 content-cols">
                        <div className="content-col">
                            <h3>Lorem ipsum dolor</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit orci, tincidunt sit amet arcu eu, iaculis malesuada lectus. Sed non lectus at libero vulputate commodo egestas eu nulla. Praesent pretium nisi eu arcu auctor, id tincidunt mi porta. Sed sodales sagittis elit a mattis. Duis cursus ipsum sed placerat hendrerit.
                            </p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6 img-cols d-block d-md-none">
                        <div className="img-col">
                            <img className="img-fluid" src="img/about/about-2.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-6 content-cols">
                        <div className="content-col">
                            <h3>Lorem ipsum dolor</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit orci, tincidunt sit amet arcu eu, iaculis malesuada lectus. Sed non lectus at libero vulputate commodo egestas eu nulla. Praesent pretium nisi eu arcu auctor, id tincidunt mi porta. Sed sodales sagittis elit a mattis. Duis cursus ipsum sed placerat hendrerit.
                            </p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-md-6 img-cols d-none d-md-block">
                        <div className="img-col">
                            <img className="img-fluid" src="img/about/about-2.jpg"/>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6 img-cols">
                        <div className="img-col">
                            <img className="img-fluid" src="img/about/about-3.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-6 content-cols">
                        <div className="content-col">
                            <h3>Lorem ipsum dolor</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit orci, tincidunt sit amet arcu eu, iaculis malesuada lectus. Sed non lectus at libero vulputate commodo egestas eu nulla. Praesent pretium nisi eu arcu auctor, id tincidunt mi porta. Sed sodales sagittis elit a mattis. Duis cursus ipsum sed placerat hendrerit.
                            </p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About Section End --> */}
        </>
    )
}