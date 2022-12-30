import React from 'react';
import { Provider } from 'react-redux';
import Homepage from './pages/homePage/homepage';
import Posts from './pages/posts/Posts';
import Todo from './pages/todo/Todo';
import configureStore from './state/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
        <Homepage/>
        <Posts/>
        <Todo/>
    </Provider>
  )

}

export default App