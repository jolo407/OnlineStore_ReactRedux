import React, { Component } from "react";


class About extends Component {
  state = {
      isEmailVisible: false,
  };
  render() {
    return (
    
        <div className="jumbotron">
        <h1 style={{color: "black"}} className="display-4">Joel Otero</h1>
        <p className="lead">Contact me for Web Development ideas.</p>
        
        {this.getEmailText()}
        <button onClick={this.handleBtnClick} className="btn btn-primary btn-lg">Show email</button>
      </div>
    
    );
  }

  handleBtnClick = () => {
      this.setState({ isEmailVisible: true });

      //timer to hide it back
      setTimeout(() => {
          this.setState({ isEmailVisible: false});
      }, 30000);
      
  };

  getEmailText = () => {
      if(this.state.isEmailVisible) {
        return (
        <h6>
            <a href="mailto:contact@otero.com">contact@otero.com</a>
        </h6>
        );

        }else{
      return <h6> Click on the button to see my email</h6>;
      }
      
      
  };
}

export default About;
