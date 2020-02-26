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
import { connect } from "react-redux";
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
      setTimeout(() => {
        this.setState({userData: data, isLoading: false });
      }, 2000) 
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


const mapStateToProps = state => ({ users: state })


function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (HomePage)