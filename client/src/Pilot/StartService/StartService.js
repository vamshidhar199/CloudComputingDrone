import React, { Component } from 'react';
function StartService() {
    return <div>
         {/* <iframe is="x-frame-bypass" src="http://ec2-52-203-10-77.compute-1.amazonaws.com/flightmonitor/"></iframe> */}
     <iframe src="http://3.90.218.152/flightmonitor/" sandbox='allow-same-origin allow-scripts allow-popups allow-forms' target="_blank" width="1000px" height="1000px"/>;
    </div>;
}

export default StartService;