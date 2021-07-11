import React from 'react';
import PropTypes from 'prop-types';
import SocialProfileTemplate from './SocialProfileTemplate';

const SocialProfile = ({ user }) => {
    return ( <
        SocialProfileTemplate name = { user.name }
        tag = { user.tag }
        location = { user.location }
        avatar = { user.avatar }
        followers = { user.stats.followers }
        views = { user.stats.views }
        likes = { user.stats.likes }
        />
    );
};

SocialProfile.propTypes = {
    user: PropTypes.object.isRequired,
};

export default SocialProfile;