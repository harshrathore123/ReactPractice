import '../../public/css/style.css';
import '../../public/css/hover-style.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
export default function Booking() {
    const [bookingdetail, setBookingDetail] = useState({
        firstname: "",
        lastname: "",
        mobile: 0,
        email: "",
        check_in: "",
        check_out: "",
        adult: 0,
        kid: 0,
        special_request: ""
    })

    const submitbtn = () => {
        console.log(bookingdetail);
        localStorage.setItem('bookingdetail', JSON.stringify(bookingdetail));
        axios.post('http://localhost:3000/travel/booking',{bookingdetail})
        .then((res)=>{
            toast.success('Booking submitted successfully!', {
            theme: 'colored',
            autoClose: 3000
        })
        })
        .catch((err)=>{
            toast.error(err.response?.data?.msg);
        })


        setBookingDetail({
            firstname: "",
            lastname: "",
            email: "",
            mobile: 0,
            check_in: "",
            check_out: "",
            adult: 0,
            kid: 0,
            special_request: ""
        })

        

    }
    return (
        <>
            {/* <!-- Booking Section Start --> */}
            <div id="booking">
                <div className="container">
                    <div className="section-header">
                        <h2>Room Booking</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mi libero. Quisque convallis, enim at venenatis tincidunt.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="booking-form">
                                <div id="success"></div>
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <label>First Name</label>

                                        <input
                                            onChange={(e) => setBookingDetail({ ...bookingdetail, firstname: e.target.value })}
                                            type="text"
                                            value={bookingdetail.firstname}
                                            className="form-control"
                                            id="fname"
                                            placeholder="E.g. John"
                                            required="required"
                                            data-validation-required-message="Please enter first name" />

                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <label>Last Name</label>
                                        <input
                                            value={bookingdetail.lastname}
                                            onChange={(e) => setBookingDetail({ ...bookingdetail, lastname: e.target.value })}
                                            type="text"
                                            className="form-control"
                                            id="lname"
                                            placeholder="E.g. Sina"
                                            required="required"
                                            data-validation-required-message="Please enter last name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <label>Mobile</label>
                                        <input
                                            value={bookingdetail.mobile}
                                            onChange={(e) => setBookingDetail({ ...bookingdetail, mobile: e.target.value })}
                                            type="text" className="form-control" id="mobile" placeholder="E.g. +1 234 567 8900" required="required" data-validation-required-message="Please enter your mobile number" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <label>Email</label>
                                        <input
                                            value={bookingdetail.email}
                                            onChange={(e) => setBookingDetail({ ...bookingdetail, email: e.target.value })}
                                            type="email" className="form-control" id="email" placeholder="E.g. email@example.com" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <label>Check-In</label>
                                        <input
                                            value={bookingdetail.check_in}
                                            onChange={(e) => setBookingDetail({ ...bookingdetail, check_in: e.target.value })}
                                            type="text" className="form-control datetimepicker-input" id="date-1" data-toggle="datetimepicker" data-target="#date-1" placeholder="E.g. YYYY/MM/DD" required="required" data-validation-required-message="Please enter date" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <label>Check-Out</label>
                                        <input
                                            value={bookingdetail.check_out}
                                            onChange={(e) => setBookingDetail({ ...bookingdetail, check_out: e.target.value })}
                                            type="text" className="form-control datetimepicker-input" id="date-2" data-toggle="datetimepicker" data-target="#date-2" placeholder="E.g. YYYY/MM/DD" required="required" data-validation-required-message="Please enter date" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <label>Adult</label>
                                        <select value={bookingdetail.adult} onChange={(e) => setBookingDetail({ ...bookingdetail, adult: e.target.value })} className="custom-select" id="adult" required="required" data-validation-required-message="Please select one">
                                            <option value="0">0</option>
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
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <label>KId</label>
                                        <select value={bookingdetail.kid}
                                            onChange={(e) => setBookingDetail({ ...bookingdetail, kid: e.target.value })}
                                            className="custom-select" id="kid" required="required" data-validation-required-message="Please select one">
                                            <option value="0">0</option>
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
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label>Special Request</label>
                                    <input
                                        value={bookingdetail.special_request}
                                        onChange={(e) => setBookingDetail({ ...bookingdetail, special_request: e.target.value })}
                                        type="text" className="form-control" id="request" placeholder="E.g. Special Request" required="required" data-validation-required-message="Please enter your special request" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="button">
                                    <button onClick={submitbtn} type="submit" id="bookingButton">Book Now</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // <!-- Booking Section End --> */}

        </>
    )
}