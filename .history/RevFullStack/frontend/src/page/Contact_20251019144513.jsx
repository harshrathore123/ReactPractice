import '../../public/css/style.css';
import '../../public/css/hover-style.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
export default function Contact(){
    const [contactusdata,setContactUsData] =useState({
        name:"",
        email:"",
        subject:"",
        Message:""
    })

    const addContactDetail = () =>{
        // localStorage.setItem('contactus_detail',JSON.stringify(contactusdata));
        
        axios.post('http://localhost:3000/travel/contactusInfo',{contactusdata}).
        then((res)=>{
            // toast.success(`Successfully Saved Information`)
            toast.success(res.data.msg,{
                autoClose:5000,
            });
        }).
        catch((err)=>{
            toast.error(err.response?.data?.msg);
        })
        
        setContactUsData({
            name:"",
            email:"",
            subject:"",
            Message:""
        })
    }
    return(
        <>
                {/* <!-- Contact Section Start --> */}
        <div id="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Contact</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mi libero. Quisque convallis, enim at venenatis tincidunt.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row contact-info">
                            <div className="col-md-4">
                                <div className="info-item">
                                    <i className="fa fa-map-marker"></i>
                                    <h3>Address</h3>
                                    <p>Abhinandan Nagar, Indore, Madhya Pradesh</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="info-item">
                                    <i className="fa fa-envelope"></i>
                                    <h3>E-mail</h3>
                                    <p><a href="#">rathorehrharsh5@gmail.com</a></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="info-item">
                                    <i className="fa fa-phone"></i>
                                    <h3>Mobile</h3>
                                    <p><a href="tel:+1 234 567 8900">+91 808 589 6073</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact-form">
                            <div id="success"></div>
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <label>Your Name</label>
                                        <input 
                                        value={contactusdata.name}
                                        onChange={(e)=>setContactUsData({...contactusdata,name:e.target.value})}                                        
                                        type="text" className="form-control" id="name" placeholder="E.g. John Sina" required="required" data-validation-required-message="Please enter your name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <label>Email</label>
                                        <input 
                                        value={contactusdata.email}
                                        onChange={(e)=>setContactUsData({...contactusdata,email:e.target.value})}
                                        type="email" className="form-control" id="email" placeholder="E.g. email@example.com" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label>Subject</label>
                                    <input 
                                    value={contactusdata.subject}
                                        onChange={(e)=>setContactUsData({...contactusdata,subject:e.target.value})}
                                    type="text" className="form-control" id="subject" placeholder="E.g. Room Booking" required="required" data-validation-required-message="Please enter a subject" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <label>Message</label> 
                                    <input 
                                    value={contactusdata.Message}
                                        onChange={(e)=>setContactUsData({...contactusdata,Message:e.target.value})}
                                    className="form-control" id="message" rows="5" placeholder="E.g. I need a premium room" required="required" data-validation-required-message="Please enter your message"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="button"><button onClick={addContactDetail} type="submit" id="sendMessageButton">Send Message</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact Section End --> */}
        </>
    )
}