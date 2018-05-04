import styled from 'styled-components';

const Track = styled.div`
  font-weight: ${(props) => props.done ? '600' : '400'};
`;

export default Track;
