import React from 'react';
import styled from 'styled-components';

const TileContainer = styled.div`
  height: 130px;
  width: 270px;
  background-color: #296157;
  box-shadow: 2px 2px gainsboro;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
`;

const DateText = styled.div`
  color: white;
  font-size: 30px;
  margin: 10px;
`;

const TimeText = styled.div`
  color: white;
  font-size: 30px;
  margin: 20px 10px;
`;

class DateTile extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currTime: null,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        currTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <TileContainer>
          <DateText>Date: {new Date().toLocaleDateString()}</DateText>
          <TimeText>Time: {this.state.currTime}</TimeText>
        </TileContainer>
      </>
    );
  }
}

export default DateTile;
