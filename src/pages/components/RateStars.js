import React from 'react';
import 'antd/dist/antd.css';
import {Rate} from 'antd';

const desc = ['pessimo', 'ruim', 'razoavel', 'bom', 'excelente'];

const RateStars = () => {
    const [state, setState] = React.useState('5');

    const handleChange = value => {
        setState(value);
    };

    return (
        <div className="stars">
            <span>
                <Rate tooltips={desc} onChange={handleChange} value={state}/>
                {/*{state ? <span className="ant-rate-text">{desc[state - 1]}</span> : ''}*/}
            </span>
        </div>
    )
};
export default RateStars;