import React, { Component } from 'react';

class EventPractice extends Component {

  state = {
    message: ''
  }

  render() {
    return (
      <div>
        <h1>Event-Pracice</h1>

        <input 
          type="text"
          name="message"
          placeholder="Input the Text"

          value={this.state.message}

          onChange={
            (e) => {
              this.setState({
                message: e.target.value
              })
            }
          }
        />
        
      </div>
    );
  }
}

export default EventPractice;