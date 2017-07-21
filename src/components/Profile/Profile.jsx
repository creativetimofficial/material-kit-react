import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

class Profile extends Component {
  render() {
    const { img, name, role, description } = this.props;

    return (
      <div className="profile">
        <div className="avatar" style={{ maxWidth: '160px' }}>
          <Image
            src={img}
            circle
            responsive
            className="img-raised"
          />
        </div>
        <div className="name">
          <h3 className="title">{name}</h3>
          <h6>{role}</h6>
        </div>
        <p className="description" dangerouslySetInnerHTML={{ __html: description }} />
        <a href="#pablo" class="btn btn-simple btn-just-icon"><i className="fa fa-twitter"></i></a>
        <a href="#pablo" class="btn btn-simple btn-just-icon"><i className="fa fa-instagram"></i></a>
        <a href="#pablo" class="btn btn-simple btn-just-icon btn-default"><i className="fa fa-facebook-square"></i></a>
      </div>
    );
  }
}

Profile.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string,
  role: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.object,
}

export default Profile;
