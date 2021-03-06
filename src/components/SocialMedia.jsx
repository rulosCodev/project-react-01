/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../styles/components/SocialMedia.styl';

const SocialMedia = ({ name, url }) => {
  switch (name) {
    case 'facebook':
      return (
        <div>
          <a target='_blank' href={url} className='SocialMedia'>
            <i className='fab fa-facebook-square' />
            <p>{name}</p>
          </a>
        </div>
      );
    case 'twitter':
      return (
        <div>
          <a target='_blank' href={url} className='SocialMedia'>
            <i className='fab fa-twitter' />
            <p>{name}</p>
          </a>
        </div>
      );
    case 'github':
      return (
        <div className='SocialMedia'>
          <a target='_blank' href={url} className='SocialMedia'>
            <i className='fab fa-github' />
            <p>{name}</p>
          </a>
        </div>
      );
    case 'linkedin':
      return (
        <div className='SocialMedia'>
          <a target='_blank' href={url} className='SocialMedia'>
            <i className='fab fa-linkedin-in' />
            <p>{name}</p>
          </a>
        </div>
      );

    default:
      return null;
  }
};

export default SocialMedia;
