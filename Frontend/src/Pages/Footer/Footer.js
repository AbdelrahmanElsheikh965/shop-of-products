import React from "react";

export default function Footer () {

  return (
    <footer id="footer" className="custom_footer" style={{ 
      backgroundColor: "#f5f5f5",
      color: "black",
      bottom: 0,
      left: 0,
      right: 0,  
      height: '12%',    
      position: 'fixed'
    }}>
      
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright-box">
              <p className="copyright"> Scandiweb Test assignment </p>
              <div className="credits">
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    
  );
}