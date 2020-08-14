import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>Event-Pracice</h1>

        <input 
          type="text"
          name="message"
          placeholder="Input the Text"
          onChange={
            (e) => {
              console.log(e);
            }
          }
        />
        
      </div>
    );
  }
}

export default EventPractice;