import React from 'react';

class Result extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <h1>{this.props.localLikesCount}</h1>
      </div>
    );
  }

}

export default Result;
//HELLO :D