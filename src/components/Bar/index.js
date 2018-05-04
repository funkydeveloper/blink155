import styled from 'styled-components';

const Bar = styled.div`
  display: inline-block;
  vertical-align: middle;
  color: white;
  font-weight: 600;
  height: 34px;
  padding: 9px 10px 0 10px;
  box-sizing: border-box;
  text-align: ${(props) => props.played ? 'left' : 'right'};
  width: ${(props) => `${props.widthRatio}%`};
  background-color: ${(props) => props.played ? 'gray' : 'darkgray'};
  margin: 0;
`;

export default Bar;
