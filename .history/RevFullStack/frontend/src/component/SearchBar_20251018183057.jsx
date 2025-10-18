import '../../public/css/style.css';
import '../../public/css/hover-style.css';
export default function SearchBar(){
    return(
        <>
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


            {/* <!-- Room Section Start --> */}
        <div id="rooms" style={{marginTop:"170px"}}>
            <div className="container">
                <div className="section-header">
                    <h2>Apartments & Suites</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mi libero. Quisque convallis, enim at venenatis tincidunt.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-12 room">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="room-img">
                                    <img src="img/room/room-1.jpg"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="room-des">
                                    <h3>Standard Single</h3>
                                    <h1>$150<span>/ Night</span></h1>
                                    <ul className="room-size">
                                        <li><i className="fa fa-arrow-right"></i>Size: 260 sq ft </li>
                                        <li><i className="fa fa-arrow-right"></i>Beds: 2 Single(s) </li>
                                    </ul>
                                    <ul className="room-icon">
                                        <li className="icon-1"></li>
                                        <li className="icon-2"></li>
                                        <li className="icon-3"></li>
                                        <li className="icon-4"></li>
                                        <li className="icon-5"></li>
                                        <li className="icon-6"></li>
                                        <li className="icon-7"></li>
                                        <li className="icon-8"></li>
                                        <li className="icon-9"></li>
                                        <li className="icon-10"></li>
                                    </ul>
                                    <div className="room-link">
                                        <a href="#" data-toggle="modal" data-target="#modal-id">Read More</a>
                                        <a href="#">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 room">
                        <div className="row">
                            <div className="col-md-6 d-block d-md-none">
                                <div className="room-img">
                                    <img src="img/room/room-2.jpg"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="room-des">
                                    <h3>Standard Double</h3>
                                    <h1>$220<span>/ Night</span></h1>
                                    <ul className="room-size">
                                        <li><i className="fa fa-arrow-right"></i>Size: 260 sq ft </li>
                                        <li><i className="fa fa-arrow-right"></i>Beds: 2 Single(s) </li>
                                    </ul>
                                    <ul className="room-icon">
                                        <li className="icon-1"></li>
                                        <li className="icon-2"></li>
                                        <li className="icon-3"></li>
                                        <li className="icon-4"></li>
                                        <li className="icon-5"></li>
                                        <li className="icon-6"></li>
                                        <li className="icon-7"></li>
                                        <li className="icon-8"></li>
                                        <li className="icon-9"></li>
                                        <li className="icon-10"></li>
                                    </ul>
                                    <div className="room-link">
                                        <a href="#" data-toggle="modal" data-target="#modal-id">Read More</a>
                                        <a href="#">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-none d-md-block">
                                <div className="room-img">
                                    <img src="img/room/room-2.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 room">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="room-img">
                                    <img src="img/room/room-3.jpg"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="room-des">
                                    <h3>Premium Single</h3>
                                    <h1>$180<span>/ Night</span></h1>
                                    <ul className="room-size">
                                        <li><i className="fa fa-arrow-right"></i>Size: 260 sq ft </li>
                                        <li><i className="fa fa-arrow-right"></i>Beds: 2 Single(s) </li>
                                    </ul>
                                    <ul className="room-icon">
                                        <li className="icon-1"></li>
                                        <li className="icon-2"></li>
                                        <li className="icon-3"></li>
                                        <li className="icon-4"></li>
                                        <li className="icon-5"></li>
                                        <li className="icon-6"></li>
                                        <li className="icon-7"></li>
                                        <li className="icon-8"></li>
                                        <li className="icon-9"></li>
                                        <li className="icon-10"></li>
                                    </ul>
                                    <div className="room-link">
                                        <a href="#" data-toggle="modal" data-target="#modal-id">Read More</a>
                                        <a href="#">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 room">
                        <div className="row">
                            <div className="col-md-6 d-block d-md-none">
                                <div className="room-img">
                                    <img src="img/room/room-4.jpg"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="room-des">
                                    <h3>Premium Double</h3>
                                    <h1>$300<span>/ Night</span></h1>
                                    <ul className="room-size">
                                        <li><i className="fa fa-arrow-right"></i>Size: 260 sq ft </li>
                                        <li><i className="fa fa-arrow-right"></i>Beds: 2 Single(s) </li>
                                    </ul>
                                    <ul className="room-icon">
                                        <li className="icon-1"></li>
                                        <li className="icon-2"></li>
                                        <li className="icon-3"></li>
                                        <li className="icon-4"></li>
                                        <li className="icon-5"></li>
                                        <li className="icon-6"></li>
                                        <li className="icon-7"></li>
                                        <li className="icon-8"></li>
                                        <li className="icon-9"></li>
                                        <li className="icon-10"></li>
                                    </ul>
                                    <div className="room-link">
                                        <a href="#" data-toggle="modal" data-target="#modal-id">Read More</a>
                                        <a href="#">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-none d-md-block">
                                <div className="room-img">
                                    <img src="img/room/room-4.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 room">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="room-img">
                                    <img src="img/room/room-5.jpg"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="room-des">
                                    <h3>Economy Single</h3>
                                    <h1>$120<span>/ Night</span></h1>
                                    <ul className="room-size">
                                        <li><i className="fa fa-arrow-right"></i>Size: 260 sq ft </li>
                                        <li><i className="fa fa-arrow-right"></i>Beds: 2 Single(s) </li>
                                    </ul>
                                    <ul className="room-icon">
                                        <li className="icon-1"></li>
                                        <li className="icon-2"></li>
                                        <li className="icon-3"></li>
                                        <li className="icon-4"></li>
                                        <li className="icon-5"></li>
                                        <li className="icon-6"></li>
                                        <li className="icon-7"></li>
                                        <li className="icon-8"></li>
                                        <li className="icon-9"></li>
                                        <li className="icon-10"></li>
                                    </ul>
                                    <div className="room-link">
                                        <a href="#" data-toggle="modal" data-target="#modal-id">Read More</a>
                                        <a href="#">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Room Section End --> */}
        
        {/* <!-- Modal for Room Section Start --> */}
        <div id="modal-id" className="modal fade" tabindex="-1" role="dialog">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12">
                                <div className="port-slider">
                                    <div><img src="img/room-slider/room-1.jpg"/></div>
                                    <div><img src="img/room-slider/room-2.jpg"/></div>
                                    <div><img src="img/room-slider/room-3.jpg"/></div>
                                    <div><img src="img/room-slider/room-4.jpg"/></div>
                                    <div><img src="img/room-slider/room-5.jpg"/></div>
                                    <div><img src="img/room-slider/room-6.jpg"/></div>
                                </div>
                                <div className="port-slider-nav">
                                    <div><img src="img/room-slider/room-1.jpg"/></div>
                                    <div><img src="img/room-slider/room-2.jpg"/></div>
                                    <div><img src="img/room-slider/room-3.jpg"/></div>
                                    <div><img src="img/room-slider/room-4.jpg"/></div>
                                    <div><img src="img/room-slider/room-5.jpg"/></div>
                                    <div><img src="img/room-slider/room-6.jpg"/></div>
                                </div>
                            </div>
                            <div className="col-12">
                                <h2>Lorem ipsum dolor</h2>
                                <p>
                                    Lorem ipsum dolor viverra purus imperdiet rhoncus imperdiet. Suspendisse vulputate condimentum ligula sollicitudin hendrerit. Phasellus luctus, elit et ultrices interdum, neque mi pellentesque massorci. Nam in cursus ex, nec mattis lectus. Curabitur quis elementum nunc. Mauris iaculis, justo eu aliquam sagittis, arcu eros cursus libero, sit amet eleifend dolor odio at lacus. 
                                </p>
                                <div className="modal-link">
                                    <a href="#">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
        </>
    )
}