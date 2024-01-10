import React, { useState } from 'react';
import AnouncePost from './AnouncePost';
import HouseCardList from '../../components/houseCard/HouseCardList';

const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState([]);

  const handleAnnouncementSubmit = (newAnnouncement) => {
    // Update the list of announcements
    setAnnouncements([...announcements, newAnnouncement]);
  };

  return (
    <div>
      <AnouncePost onSubmit={handleAnnouncementSubmit} />
      <HouseCardList announcements={announcements} />
    </div>
  );
};

export default AnnouncementPage;
