import React from "react"

class Footer extends React.Component {

    render() {


        return(
            <div className="Footer">
                <div className="columns-cont">
                    <div className="left-column">
                        <a href="https://www.linkedin.com/in/jonathan-odom/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="right-column">
                        <a href='https://github.com/odomj5'>
                        <i className="fab fa-github-square"></i>
                        </a>
                    </div>
                </div>
                <div className="bottom-row">
                    <div className="underline"></div>
                    <div className="bottom-box">
                        <div className="footer-logo">Jiator</div>
                        <div className="footer-detail-cont">
                            <div className="footer-detail">© 2020 Jiator, Inc.</div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}


export default Footer