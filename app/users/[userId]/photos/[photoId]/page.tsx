import React from 'react';

interface Props {
  params: {
    userId: number,
    photoId: number
  }
}

function UserPhotosPage({params: {userId, photoId}}: Props) {
  return (
    <div>Photo {photoId} of user {userId}</div>
  );
}

export default UserPhotosPage;