/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component, Suspense}from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import DefaultStyle from './Styles';
import Loader from '../../base-components/Loader';

class HomePage extends Component{

  state = {
    userData: [],
    isLoading: true,
  };

  componentWillMount(){
    this.setState({isLoading: true});
    const url = 'https://jsonplaceholder.typicode.com/users/';
    fetch(url, {method: 'GET'})
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log('data-----',data);
    isLoading: false,
      this.setState({userData: data, isLoading: false });
    })
    
  }
    // console.log('hello world');
  
  render(){
    return (
    <DefaultStyle>
      <Suspense fallback={<Loader />}>
        
          <ul>
             {
              this.state.isLoading ? <Loader/> :
              this.state.userData.map(function(val){
               console.log(val.name);
              return <li>{val.name}</li>
              })
            }
          </ul>
        
      </Suspense>
    </DefaultStyle>
   );
  }
}

export default HomePage;
