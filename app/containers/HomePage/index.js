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
import {getUsers} from './actions';
import Loader from '../../base-components/Loader';
import Header from '../Header/index';

class HomePage extends Component{

  state = {
    isLoading: true,
  };

  componentWillMount(){
    this.setState({isLoading: false});
    const { getUsers } = this.props;
        getUsers();
  }
  render(){
    console.log(this.props.users.userFlow);
    return (
    <React.Fragment>
      <Header/>
      <DefaultStyle>
        <h1>User List</h1>
        <Suspense fallback={<Loader />}>
            <ul className="listBox">
              {
                this.state.isLoading ? <Loader/> :
                this.props.users.userFlow.map(function(val){
                return <li className="listDesign">{val.name}</li>
                })
              }
            </ul>
        </Suspense>
      </DefaultStyle>
    </React.Fragment>
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