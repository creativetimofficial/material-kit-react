import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { MdFavorite } from 'react-icons/lib/md';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="http://www.creative-tim.com">Creative Tim</a>
              </li>
              <li>
                <a href="http://presentation.creative-tim.com">About Us</a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">Blog</a>
              </li>
              <li>
                <a href="http://www.creative-tim.com/license">Licenses</a>
              </li>
            </ul>
          </nav>
          <div className="copyright pull-right">
            &copy; 2016, made with <MdFavorite size={18} /> by Creative Tim for
            a better web.
          </div>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
