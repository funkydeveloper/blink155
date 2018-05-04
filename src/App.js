import React from 'react';

import albums from './data/albums';
import doneTracks from './data/done';

import Row from './components/Row';
import AlbumTitle from './components/AlbumTitle';
import AlbumImage from './components/AlbumImage';
import Bar from './components/Bar';
import AlbumTracksLink from './components/AlbumTracksLink';
import TrackOverlay from './components/TrackOverlay';
import TrackHeader from './components/TrackHeader';
import Track from './components/Track';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredAlbum: null,
    };
  }

  render() {
    return (
      <div>
        {albums
          .sort((a1, a2) => {
            const album1 = a1.album.name.toLowerCase();
            const album2 = a2.album.name.toLowerCase();
            if (album1 < album2) return -1;
            if (album1 > album2) return 1;
            return 0;
          })
          .map((album) => {
            const {
              name,
              tracks: {
                track: tracks,
                track: {
                  length: trackCount,
                },
              },
              image,
            } = album.album;

            const trackCountPlayed = tracks
              .filter((track) => doneTracks.indexOf(track.name) !== -1)
              .length;

            const percentagePlayed = ((trackCountPlayed / trackCount) * 100).toFixed(2);
            const percentageNotPlayed = 100 - percentagePlayed;

            const imageUrl = image.filter((i) => i.size === 'small')[0]['#text'];

            return (
              <Row key={name}>
                <AlbumImage src={imageUrl} alt={`${name}`} />
                <AlbumTitle>{name}</AlbumTitle>
                <div>
                  <Bar widthRatio={percentagePlayed} played>{trackCountPlayed}</Bar>
                  <Bar widthRatio={percentageNotPlayed}>{trackCount - trackCountPlayed}</Bar>
                </div>
                <AlbumTracksLink
                  onMouseEnter={() => this.setState(() => ({ hoveredAlbum: name }))}
                  onMouseLeave={() => this.setState(() => ({ hoveredAlbum: null }))}>
                  <span>tracks</span>
                  <TrackOverlay visible={this.state.hoveredAlbum === name}>
                    <TrackHeader>{name}</TrackHeader>
                    {tracks.map((track) => {
                      return (
                        <Track key={track.name} done={doneTracks.indexOf(track.name) !== -1}>
                          {track.name}
                        </Track>
                      );
                    })}
                  </TrackOverlay>
                </AlbumTracksLink>
              </Row>
            );
          })}
      </div>
    );
  }
}

export default App;
