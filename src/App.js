import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';
import axios from 'axios';

// Making HTTP Requests and updating state components --> Using AXIOS; promised based HTTP Client
class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });

    // console.log(res.data);
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;

// ------------------------------------------Comments and Notes Below This Line----------------------------------------------------------=
/* JSX and Fragments - 
    
    - Returning from render (like below) is JSX; javascript syntax extension. Let's you write output similar to HTML & saves tons of time;
    - HTML like way; two main diffs. with attributes; in JSX "class" = ClassName, and "for" = "htmlFor". JSX must have 1 parent element 
    
    - Don't want a div rendered in the DOM? --> Can use a fragment instead; "react.fragment" or just use <> and get rid of the divs
    
*JSX Expressions and Conditionals -

    - Brad T,; view vid # 9 as well as MOZDev or W3 :) 

*Props = Propetries than you can pass into a component from outside. 
    - Default props; devs have ability to pass in or not, will overwrite if placed in 
    - Prop types; basically checks types (ie -will telll you if prop should be array, string, #, and so forth)
  
*Functional Components - can have state within functional components using hooks, no need for class based 
These w/ hooks also make code cleaner versus using classes (but both will get same result if done properly)
    
    
    
    
    */
