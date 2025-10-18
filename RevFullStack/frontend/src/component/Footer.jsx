import '../../public/css/style.css';
import '../../public/css/hover-style.css';
export default function Footer(){
    return(
        <>
                {/* <!-- Footer Section Start --> */}
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="social">
                            <a href=""><li className="fa fa-instagram"></li></a>
                            <a href=""><li className="fa fa-twitter"></li></a>
                            <a href=""><li className="fa fa-facebook-f"></li></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Terms</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <p>Copyright &#169; <a href="https://htmlcodex.com">HTML Codex</a> All Rights Reserved.</p>
						<p>Template By <a href="https://htmlcodex.com">HTML Codex</a></p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer Section End --> */}
        
        </>
    )
}