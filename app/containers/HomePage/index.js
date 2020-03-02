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
import ListItem from './ListItem';
import history from 'utils/history';
class HomePage extends Component{

  state = {
    isLoading: true,
  };

  userTapped() {
    console.log('tapped');
    history.push('/userDtails')
  }

  componentWillMount(){
    this.setState({isLoading: false});
    console.log(this.props);
    const { getUsers } = this.props;
        getUsers();
  }
  render(){
    console.log('soniiiiiii',this.props.users.userFlow);
    console.log('history', history);
    return (
    <React.Fragment>
      <Header/>
      <DefaultStyle>
        <h1>User List</h1>
        <Suspense fallback={<Loader />}>
          {/* <button onClick={this.btnTapped}>hello</button> */}
            <ul className="listBox" onClick={this.userTapped}>
              
               {
                this.props.users.userFlow.map(function(val){
                return <ListItem
                  key={val.id} 
                  item={val.name}
                  // onclick={() => this.userTapped(val.id)}
                ></ListItem>
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