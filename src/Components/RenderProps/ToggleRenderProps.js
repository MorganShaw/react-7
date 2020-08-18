import React, {useState} from 'react';
import styleHOC from '../HOCS/styleHOC';

const ToggleRenderProps = props => {
    const [on, setOn] = useState(false)
    const {style} = props

    return (
    <div>
        {props.render({on, setOn, style})}
    </div>
    )
};

export default styleHOC(ToggleRenderProps)
