import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">© 2021 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"></li>
          <li className="ms-3"></li>
          <li className="ms-3"></li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
