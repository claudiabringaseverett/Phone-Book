import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from "./components/Header";
import ToDoList from './components/ToDoList';
import Form from './components/Form';


const styles = {
    bodyWrapper: {
        display: 'flex',
        height: '100vh'
    }
}

const app = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <div style={styles.bodyWrapper}>
                    <ToDoList />
                    
                    <Route path='/:listId' component={Form} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default app;