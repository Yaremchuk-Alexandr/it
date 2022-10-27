
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store.ts'
import { Provider } from 'react-redux'



// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)


const root = ReactDOM.createRoot(document.getElementById('root'))


// let rerenderIntareTree = () => {

    root.render(

        // <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}   >
                    <App />
                </Provider>
            </BrowserRouter>
        // </React.StrictMode>


    );
    // }

// reportWebVitals();


// rerenderIntareTree()

// store.subscribe(() => {
//     rerenderIntareTree()
// })


