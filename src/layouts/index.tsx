import React from 'react';

export default function Index(props:any) {
    return (
        <div>
            <h2>Header</h2>
            {props.children}
            <h2>Footer</h2>
        </div>
    );
}