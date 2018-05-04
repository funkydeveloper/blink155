import styled from 'styled-components';

const TrackOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 80px;
  padding: 10px;
  box-sizing: border-box;
  background-color: black;
  color: white;
  text-align: left;
  min-width: 370px;
  display: ${(props) => props.visible ? 'block' : 'none'};
`;

export default TrackOverlay;