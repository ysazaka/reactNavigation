import React from 'react';
import CentralText from '../components/CentralText';

export default props => {
    const r = props.route
    const number = r && r.params && r.params.number 
        ? props.route.params.number : 0
    return (
        <CentralText bgColor='#9932CD'>
            Screen C - {number}
        </CentralText>
    )
}