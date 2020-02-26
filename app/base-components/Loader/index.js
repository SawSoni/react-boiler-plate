import React, { Component } from 'react';
import DefaultStyle from './Styles';
import { Spin, Icon } from 'antd';
import 'antd/dist/antd.css';

// const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Loader extends Component {
    render(){
        return (
            <DefaultStyle>
                <Icon type='loading' className="loader-icon" spin></Icon>
               
                
            </DefaultStyle>
        )
    }
}

/* const { Spin, Icon } = antd;

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

ReactDOM.render(<Spin indicator={antIcon} />, mountNode); */

export default Loader;