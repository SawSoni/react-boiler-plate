import React, { Component, Suspense}from 'react';
import DefaultStyled from './Styles';

class Header extends Component {
    render (){
        return(
            <DefaultStyled>
                <div className="headerParent">
                    <h1>Header</h1>
                    <div>Right Text</div>
                </div>
            </DefaultStyled>
        )
    }

}

export default Header; 