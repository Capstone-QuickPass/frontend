import React from 'react';

import { TileContainer, DateText, TimeText } from './styled';

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
      <TileContainer>
        <DateText>Date: {new Date().toLocaleDateString()}</DateText>
        <TimeText>Time: {this.state.currTime}</TimeText>
      </TileContainer>
    );
  }
}

export default DateTile;
