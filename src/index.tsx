import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

/*import {store} from "./redux/state";*/
import store from "./redux/redux-store"

export let renderingWholeTree = (state: any) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                    /*state={store.getState()}
                    dispatch={store.dispatch.bind(store)}*/
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderingWholeTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    renderingWholeTree(state);
});

reportWebVitals();
