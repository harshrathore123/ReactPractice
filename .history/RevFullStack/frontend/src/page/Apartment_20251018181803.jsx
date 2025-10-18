import '../../public/css/style.css';
import '../../public/css/hover-style.css';
export default function Apartment(){

    return(
        <>
                {/* <!-- Search Section Start --> */}
        <div id="search" className="search-home">
            <div className="container">
                <div className="form-row">
                    <div className="control-group col-md-3">
                        <label>Check-In</label>
                        <div className="form-group">
                            <div className="input-group date" id="date-5" data-target-input="nearest">
                                <input type="text" className="form-control datetimepicker-input" data-target="#date-5"/>
                                <div className="input-group-append" data-target="#date-5" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="control-group col-md-3">
                        <label>Check-Out</label>
                        <div className="form-group">
                            <div className="input-group date" id="date-6" data-target-input="nearest">
                                <input type="text" className="form-control datetimepicker-input" data-target="#date-6"/>
                                <div className="input-group-append" data-target="#date-6" data-toggle="datetimepicker">
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
        </>
    )
}