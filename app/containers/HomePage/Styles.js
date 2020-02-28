import styled from 'styled-components';
const DefaultStyle = styled('div')`
    width: 90%;
    margin: 100px auto;
    .listBox{
        margin-top: 30px;
        display:flex;
        justify-content: space-between;
    }
    .listDesign {
        width: 100px;
        height: 100px;
        padding: 10px;
        text-align: center;
        background: lightGreen;
        color: white;
        box-shadow: 1px 1px 1px #333;
    }
`

export default DefaultStyle;