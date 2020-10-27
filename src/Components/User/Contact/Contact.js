import React from 'react';
import { connect } from 'react-redux'
import { addMessage } from '../../../app/Actions/actions'

class Contact extends React.Component {
    constructor(props) {
      super(props);
      
      // Remove property 'messages' from Presentational's local state
      this.state = {
        input: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    submitMessage() {
    
      // Call 'submitNewMessage', which has been mapped to Presentational's props, with a new message;
      // meanwhile, remove the 'messages' property from the object returned by this.setState().
      this.props.submitNewMessage(this.state.input);
      this.setState({
        input: ''
      });
    }
    render() {
      return (
        <div>
          <p>Type in a new Message:</p>
          <input
            value={this.state.input}
            onChange={this.handleChange}/><br/>
          <button onClick={this.submitMessage}>Submit</button>
          <ul>
             {/* The messages state is mapped to Presentational's props; therefore, when rendering,
                 you should access the messages state through props, instead of Presentational's
                 local state. */}
            {this.props.messages.map( (message, idx) => {
                return (
                   <li key={idx}>{message}</li>
                )
              })
            }
          </ul>
        </div>
      );
    }
  };

const mapStateToProps = (state) => {
return {messages: state.messages}
};

const mapDispatchToProps = (dispatch) => {
return {
    submitNewMessage: (message) => {
    dispatch(addMessage(message))
    }
}
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);