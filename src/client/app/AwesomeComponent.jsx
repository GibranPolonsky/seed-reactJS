import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.onLike = this.onLike.bind(this);
  }
  onLike(){
  	this.props.localOnLike(this.props.increment)
  }



  render() {
    return (
      <div>
        <div><button onClick={ this.onLike }> + {this.props.increment}</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;
//HELLO :Dl