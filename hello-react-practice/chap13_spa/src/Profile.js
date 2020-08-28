import React from 'react';


const data = {
  anna: {                       //  URL parameter : /profile/anna
    name: 'name1',
    description: 'description1'
  },
  bob: {
    name: 'name2',
    description: 'description2'
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>not exist user</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;