import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import Button from 'elements/CustomButton/CustomButton';

import './Profile.css';

class Profile extends Component {
  renderSocialMedia() {
    const { links } = this.props;
    return (
      <div>
        {links.googleplus &&
          <Button href={links.googleplus} link justIcon>
            <i className="fa fa-google-plus" />
          </Button>}
        {links.linkedin &&
          <Button href={links.linkedin} link justIcon>
            <i className="fa fa-linkedin" />
          </Button>}
        {links.instagram &&
          <Button href={links.instagram} link justIcon>
            <i className="fa fa-instagram" />
          </Button>}
        {links.facebook &&
          <Button href={links.facebook} link justIcon>
            <i className="fa fa-facebook-square" />
          </Button>}
        {links.youtube &&
          <Button href={links.youtube} link justIcon>
            <i className="fa fa-youtube-play" />
          </Button>}
        {links.twitter &&
          <Button href={links.twitter} link justIcon>
            <i className="fa fa-twitter" />
          </Button>}
      </div>
    );
  }

  render() {
    const { img, imgSize, name, role, description, links } = this.props;

    return (
      <div className="profile">
        <div className="avatar" style={{ maxWidth: `${imgSize}px` }}>
          <Image src={img} circle responsive className="img-raised" />
        </div>
        <div className="name">
          <h3 className="title">
            {name}
          </h3>
          <h6>
            {role}
          </h6>
        </div>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {links && this.renderSocialMedia()}
      </div>
    );
  }
}

Profile.propTypes = {
  img: PropTypes.string.isRequired,
  imgSize: PropTypes.number,
  name: PropTypes.string,
  role: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.object
};

Profile.defaultProps = {
  imgSize: 160,
  links: null
};

export default Profile;
