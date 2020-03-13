import React from "react"

class Footer extends React.Component {

    render() {


        return(
            <div className="Footer">
                <div className="columns-cont">
                    <div className="left-column">
                        <div>Help Center</div>
                        <div>Privacy Policy</div>
                        <div>About Jiator</div>
                        <div>Sitemap</div>
                    </div>
                    <div className="right-column">
                        <div >Supplier Sign Up</div>
                        <div>Travel Agents</div>
                        <div>Distribution Programs</div>
                        <div>Group Services</div>
                    </div>
                </div>
                <div className="bottom-row">
                    <div className="underline"></div>
                    <div className="bottom-box">
                        <div className="footer-logo">Jiator</div>
                        <div className="footer-detail-cont">
                            <div className="footer-detail">© 1997–2020 Jiator, Inc.</div>
                            <div>Terms and Conditions | Cookie PolicyCookie | Consent</div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}


export default Footer