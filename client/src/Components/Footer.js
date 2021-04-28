import React from 'react'

function Footer() {
    return (
        <footer className="plus_border">
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h3 data-target="#collapse_ft_1">Quick Links</h3>
              <div className="collapse dont-collapse-sm" id="collapse_ft_1">
                <ul className="links">
                  <li><a href="#0">About us</a></li>
                  <li><a href="#0">Faq</a></li>
                  <li><a href="#0">Help</a></li>
                  <li><a href="#0">My account</a></li>
                  <li><a href="#0">Create account</a></li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h3 data-target="#collapse_ft_2">Categories</h3>
              <div className="collapse dont-collapse-sm" id="collapse_ft_2">
                <ul className="links">
                  <li><a href="#0">Video Editing</a></li>
                  <li><a href="#0">Graphic Design</a></li>
                  <li><a href="#0">Digital Advertising</a></li>
                  <li><a href="#0">Web Development</a></li>

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h3 data-target="#collapse_ft_3">Contacts</h3>
              <div className="collapse dont-collapse-sm" id="collapse_ft_3">
                <ul className="contacts">
                  <li><i className="ti-home"></i>4 Sylvan Avenue<br/>Kingston 5 - Jamaica</li>
                  <li><i className="ti-headphone-alt"></i>+39 06 97240120</li>
                  <li><i className="ti-email"></i><a href="#0">info@adtelligent.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h3 data-target="#collapse_ft_4">Keep in touch</h3>
              <div className="collapse dont-collapse-sm" id="collapse_ft_4">
                <div id="newsletter">
                  <div id="message-newsletter"></div>
                  <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                    <div className="form-group">
                      <input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email"/>
                      <input type="submit" value="Submit" id="submit-newsletter"/>
                    </div>
                  </form>
                </div>
                <div className="follow_us">
                  <h5>Follow Us</h5>
                  <ul>
                    <li><a href="#0"><i className="ti-facebook"></i></a></li>
                    <li><a href="#0"><i className="ti-twitter-alt"></i></a></li>
                    <li><a href="#0"><i className="ti-google"></i></a></li>
                    <li><a href="#0"><i className="ti-pinterest"></i></a></li>
                    <li><a href="#0"><i className="ti-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr/>

        </div>
      </footer>
    )
}

export default Footer
