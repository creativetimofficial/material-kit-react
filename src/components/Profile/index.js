import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Image } from 'react-bootstrap';

class Profile extends Component {
  render() {
    const { children, avatar, name, office } = this.props;
    return (
      <div>
        <Row>
          <div className="profile">
            <div className="avatar">
              <Image
                src={avatar}
                alt="Circle"
                className="img-circle img-responsive img-raised"
              />
            </div>
            <div className="name">
              <h3 className="title">
                {name}
              </h3>
              <h6>
                {office}
              </h6>
            </div>
          </div>
        </Row>
        <div className="description text-center">
          <p>
            {children}
          </p>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string,
  children: PropTypes.array,
  name: PropTypes.string,
  office: PropTypes.string
};

export default Profile;
