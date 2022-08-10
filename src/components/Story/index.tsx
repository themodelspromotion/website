import React, { useCallback } from 'react';
import { Action } from 'react-insta-stories/dist/interfaces';

import instagramLogo from '../../assets/icons/instagram.png'
import onlyfansLogo from '../../assets/icons/onlyfans.png'
import playIcon from '../../assets/icons/play.png'
import pauseIcon from '../../assets/icons/pause.png'

import './styles.scss';

interface Props {
  image: string;
  link: string;
  action: Action;
  isPaused: boolean;
}

export const Story: React.FC<Props> = ({ image, link, action, isPaused }) => {
  const isOnlyfansLink = link.includes('onlyfans');

  const handlePauseToggle = useCallback(() => {
    if (isPaused) {
      action('play');
    } else {
      action('pause');
    }
  }, [action, isPaused]);

  return (
    <div className="story">
      <img src={image} alt="model" />
      {isPaused ? (
        <img src={playIcon} alt="play" onClick={handlePauseToggle} />
      ) : (
        <img src={pauseIcon} alt="pause" onClick={handlePauseToggle} />
      )}
      <a target="_blank" rel="noreferrer" href={link} className={isOnlyfansLink ? 'onlyfans' : 'instagram'}>
        {isOnlyfansLink ? <img src={onlyfansLogo} alt="onlyfans" /> : <img src={instagramLogo} alt="instagram" />}
        Subscribe on {isOnlyfansLink ? 'Onlyfans' : 'Instagram'}
      </a>
    </div>
  );
};
