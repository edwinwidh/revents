import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import UserDetailedAbout from './UserDetailedAbout';
import UserDetailedSidebar from './UserDetailedSidebar';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedEvents from './UserDetailedEvents';

const query = ({ auth }) => {
  return [
    {
      collection: 'users',
      doc: auth.uid,
      subcollections: [{ collection: 'photos' }],
      storeAs: 'photos'
    }
  ];
};

const mapState = state => ({
  profile: state.firebase.profile,
  auth: state.firebase.auth,
  photos: state.firestore.ordered.photos
});

class UserDetailedPage extends Component {
  render() {
      const {profile, photos} = this.props;
    return (
      <Grid>
        <UserDetailedHeader profile={profile} />
        <UserDetailedAbout profile={profile} />
        <UserDetailedSidebar />
        {photos && photos.length > 0 &&
        <UserDetailedPhotos photos={photos} />}
        <UserDetailedEvents />
      </Grid>
    );
  }
}

export default compose(
  connect(mapState),
  firestoreConnect(auth => query(auth))
)(UserDetailedPage);
