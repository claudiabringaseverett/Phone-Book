import React from 'react';

const styles = {
    headerWrapper: {
        width: '100%',
        display: 'flex',
        color: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        fontSize: 30,
        border: '1px solid black'

    }
}

const header = () => <div style={styles.headerWrapper}>Contacts</div>

export default header;