import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import UserList from './components/UserList';
import UserEditor from './components/UserEditor';
import './App.css';
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Пользователи</h1>
        <UserList />
        <UserEditor />
      </div>
    </Provider>
  );
};

export default App;
