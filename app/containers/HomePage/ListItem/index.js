import React, { Component, Suspense}from 'react';
import ListItemBox from './Styles'

/* ltemClick = () => {
    console.log('item click');
} */
class ListItem extends Component {
    render(){
        const { text, onclick, item, color,width } = this.props;
        return(
            <ListItemBox className="listDesign" onClick={ onclick }>
                {item}
            </ListItemBox>
        )
    }
}

export default ListItem;
