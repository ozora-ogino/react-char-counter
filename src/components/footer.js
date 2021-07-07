import React from 'react';
import Paper from '@material-ui/core/Paper';

export default function Footer(props) {
    return (
        <div>
            <Paper elevation={1} style={{
                background: '#282c34',
                width: '100vw',
                height: '60px',
                margin: 0,
                marginTop: '2rem',
                padding: 0,
                verticalAlign: 'middle',
                display: 'table-cell'
            }}
            >
                <p style={{ margin: 0, fontFamily: 'Ubuntu', fontSize: '12px' }}>
                    © All rights are reserved | 2021 | Made with by <a className='App-link' href='https://github.com/ozora-ogino'>Ozora Ogino</a>
                </p>
            </Paper>
        </div>
    )
}