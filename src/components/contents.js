/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 7
 */

import React from 'react';

//Creates header class and extends into component
export class Contents extends React.Component {

    render() {
        return (
            <div>
                {/**Displays text */} 
                <h1>Hello World!</h1> 

                {/**Creates method to display current time at run of app  */}
                <h2>It is {new Date().toLocaleTimeString()}.</h2> 
            </div>
        );
    }

}