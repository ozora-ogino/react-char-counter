import React from 'react';

export default function InlineItem(props) {
    return (
        <div>
            <p style={{
                display: 'inline-block',
                margin: '0 2rem',
                textAlign: 'left',
                width: '180px',
            }}>
                {props.left}
            </p>
            <p style={{
                display: 'inline-block',
                textAlign: 'left',
                width: '100',
            }}>
                {props.right}
            </p>
        </div>
    )
}