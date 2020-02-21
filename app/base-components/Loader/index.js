import React, { Component } from 'react';
import DefaultStyle from './Styles';
import Icon from 'antd/lib/icon';

class Loader extends Component {
    render(){
        return (
            <DefaultStyle>
                <Icon type='loading' className="loader-icon"></Icon>
            </DefaultStyle>
        )
    }
}

export default Loader;