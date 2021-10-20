import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
            <div className="header">
                <div className="w-100 py-1" style={{backgroundColor:"#11101D"}}>
                    <div className="text-light text-center mt-2">
                        <span className="mr-2"> Nifty 50 : <label className="text-success" id="nifty50"> 18477.05 138.50(0.76 %)</label></span> |
                        <span className="ml-2"> Nifty Bank : <label className="text-danger" id="niftyBank"> 39684.80 343.90 (0.87 %)</label></span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;