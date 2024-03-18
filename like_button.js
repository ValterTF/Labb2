// Task 2A, User interaction using React component or fucntion
// Valter Thomas Fyrbeerg, vath0008@ad.umu.se
'use strict';

const LikeCounter = React.createElement;

// React Class component for the Like button and constructor for states. 
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      likeCount: 0,  // initial count of likes 
      liked: false, // initial state of the button 
      message: ''  // initial message, button not clicked
    };
  }

  // Renderering for the class component
  render() {

    // Styling for the button, container, message and likes
    const Button_style = {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: '10px 20px',
      cursor: 'pointer',
    };

    const Container_style = {
      display: 'flex',
      alignItems: 'center',
    };

    const messageContainer_style = {
      display: 'flex',
      flexDirection: 'column', // Stack message elements vertically
      justifyContent: 'flex-end', 
      flexGrow: 1, // Allow message container to grow and take remaining space
      marginLeft: '10px', 
    };

    const Likes_style = {
      marginLeft: '10px',
    };

    // Render method for the LikeCounter. Updates the state of the button when clikcked
    // and also the message. Adds +1 to the likes when clicked 
    return LikeCounter(
      'div',
      { style: Container_style },
      LikeCounter(
        'button', 
        { 
          onClick: () => this.setState({ 
            likeCount: this.state.likeCount + 1,
            liked: true, // Update liked to true when button is clicked
            message: 'You liked this.' // Set message to 'You liked this' when button is clicked
          }), 
          style: Button_style 
        },
        'Like'
      ),
      LikeCounter(
        'div',
        { style: messageContainer_style },
        LikeCounter(
          'p',
          null,
          this.state.message // Display message 
        ),
        LikeCounter(
          'p',
          { style: Likes_style },
          `Total Likes: ${this.state.likeCount}` // Show total amount of likes
        )
      )
    );
  }
}

// Selects the DOM container element where the LikeButton component will be rendered.
const domContainer = document.querySelector('#like_button_container');
// Creates a root for rendering React components into the specified DOM container.
const root = ReactDOM.createRoot(domContainer);
// Renders the LikeButton component into the root element, initiating the rendering process.
root.render(LikeCounter(LikeButton));
