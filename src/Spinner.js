import React from 'react'

const Spinner = (props) =>
{
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.loadmsg}</div>
        </div>
    );
};
Spinner.defaultProps =
{
loadmsg : 'Loading...'
};
export default Spinner;