import '../Css/Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-header">
                <div className="footerSection">
                    <div className="footer-subTitle"><i class="fas fa-home mr-1"></i> Address</div>
                    <div className="footer-text">Lorem ipsum dolor sit amet,</div>
                    <div className="footer-text">consectetur adipisicing,</div>
                    <div className="footer-text">Delhi 897650.</div>
                    <div className="footer-text">easyoptions@gmail.com</div>
                    <div className="footer-text">+91 9456875640 , 9474361286</div>
                </div>
                <div className="footerSection">
                    <div className="footer-subTitle">Mutual Funds</div>
                    <div className="footer-text">Performance Tracking</div>
                    <div className="footer-text">Scheme Information</div>
                    <div className="footer-text">Best Performers</div>
                </div>
                <div className="footerSection">
                    <div className="footer-subTitle">Announcements</div>
                    <div className="footer-text">Performance Tracking</div>
                    <div className="footer-text">Scheme Information</div>
                    <div className="footer-text">Best Performers</div>
                </div>
                <div className="footerSection">
                    <div className="footer-subTitle">Forthcoming</div>
                    <div className="footer-text">Performance Tracking</div>
                    <div className="footer-text">Scheme Information</div>
                    <div className="footer-text">Best Performers</div>
                </div>
            </div>

            <hr/>

            <div className="footer-sectionTwo">
                <div className="footer-text"><b>SEBI Reg No :</b> Ambalal Shares & Stocks (P) Ltd(ASSL) - INZ000219137; Exchanges: NSE / BSE / MCX; CDSL - IN-DP-402-2019,</div>
                <div className="footer-text"><b>AMFI Reg Code:</b> ARN-85405; ASSL is a distributor for Mutual Fund, IPO and Insurance Products. *Investment in securities is subject to market risk.</div>
                <div className="footer-text"><b>Registered Address:</b> #2,Kewalchand Plaza,Ambalal Green City,Old Bye Pass Road,Vellore - 632004.</div>
                <div className="footer-text mt-4"><b>Disclaimer:</b> Past performance, whether actual or indicated by historical tests of strategies, is no guarantee of future performance or success. There is a possibility that you may sustain a loss equal to or greater than your entire investment regardless of which asset class you trade (equities, options or futures); therefore, you should not invest or risk money that you cannot afford to lose. Online trading is not suitable for all investors. View the document titled Characteristics and Risks of Standardized Options. Before trading any asset class, customers must read the relevant risk disclosure statements on our Other Information page. System access and trade placement and execution may be delayed or fail due to market volatility and volume, quote delays, system and software errors, Internet traffic, outages and other factors.</div>
            </div>

            <hr />

            <div className="footer-sectionThree">
                <div className="copyright">©2021 All Rights Reserved ​</div>
                <div className="privacy">
                    <div className="mr-3"><Link href="/Privacy" className="text-decoration-none">Privacy Policy ​</Link></div>
                    
                    <div className="text-dark">|</div>

                    <div className="ml-3"><Link href="/Terms" className="text-decoration-none">Terms Of Use ​</Link></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;