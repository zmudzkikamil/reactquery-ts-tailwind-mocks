import React from 'react';

export interface IGameThumbnail {
  thumbnail: string;
  title: string;
}

const GameThumbnail: React.FC<IGameThumbnail> = ({ thumbnail, title }) => {
  return (
    <div>
      <img
        className="object-cover w-16 h-16 rounded"
        src={thumbnail}
        alt={title}
      />
    </div>
  );
};

export default GameThumbnail;
