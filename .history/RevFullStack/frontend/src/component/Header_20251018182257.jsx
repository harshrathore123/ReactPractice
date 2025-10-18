import '../../public/css/style.css';
import '../../public/css/hover-style.css';
export default function Header(){
    return(
        <>
        {/* <!-- Header Bottom Start --> */}
        <div id="header-bottom">
            {/* <!-- Search Section Start --> */}
            <div id="search" className="search-slider">
                <div className="container">
                    <h1>Feel at Home When You're Away</h1>
                    <div className="form-row">
                        <div className="control-group col-md-3">
                            <label>Check-In</label>
                            <div className="form-group">
                                <div className="input-group date" id="date-3" data-target-input="nearest">
                                    <input type="text" className="form-control datetimepicker-input" data-target="#date-3"/>
                                    <div className="input-group-append" data-target="#date-3" data-toggle="datetimepicker">
                                        <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="control-group col-md-3">
                            <label>Check-Out</label>
                            <div className="form-group">
                                <div className="input-group date" id="date-4" data-target-input="nearest">
                                    <input type="text" className="form-control datetimepicker-input" data-target="#date-4"/>
                                    <div className="input-group-append" data-target="#date-4" data-toggle="datetimepicker">
                                        <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="control-group col-md-3">
                            <div className="form-row">
                                <div className="control-group col-md-6">
                                    <label>Adult</label>
                                    <select className="custom-select">
                                        <option selected>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                                <div className="control-group col-md-6 control-group-kid">
                                    <label>Kid</label>
                                    <select className="custom-select">
                                        <option selected>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="control-group col-md-3">
                            <button className="btn btn-block">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Search Section End --> */}
            
            {/* <!-- Slider Section Start --> */}
            <div id="headerSlider" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#headerSlider" data-slide-to="0" className="active"></li>
                    <li data-target="#headerSlider" data-slide-to="1"></li>
                    <li data-target="#headerSlider" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/slider/header-slider-1.jpg" alt="Royal Hotel"/>
                    </div>

                    <div className="carousel-item">
                        <img src="img/slider/header-slider-2.jpg" alt="Royal Hotel"/>
                    </div>

                    <div className="carousel-item">
                        <img src="img/slider/header-slider-3.jpg" alt="Royal Hotel"/>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/* <!-- Slider Section End --> */}
        </div>
        {/* <!-- Header Bottom End --> */}
        
        </>
    )
}