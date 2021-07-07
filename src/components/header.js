import React from 'react';
import Paper from '@material-ui/core/Paper';

export default function Header(props) {
    return (
        <div className="App-header">
            <Paper elevation={1} style={{
                backgroundColor: props.theme.palette.primary.main,
                width: '100vw',
                height: '60px',
                margin: 0,
                padding: 0,
                verticalAlign: 'middle',
                display: 'table-cell'
            }}
            >
                <h3 style={{ margin: 0, fontFamily: 'Ubuntu' }}>CHARACTER COUNTER</h3>
            </Paper>
        </div>
    )
}