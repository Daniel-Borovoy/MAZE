import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="stylish-color" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">FeedBack</h5>
            <p>
              If you have any questions about any problems, please contact: help@maze.com
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
              <a href="#!"><MDBIcon fab icon="vk" /> VK</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="telegram-plane" /> Telegram</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="instagram" /> Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="facebook-f" /> FaceBook</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.maze.com"> maze.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;