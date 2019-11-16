import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import CustomLayout from './containers/Layout';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import VideoList from './containers/VideoListView';
import BaseRouter from './routes';

function App() {
  return (
    <div className="App">

      <Router>

        <CustomLayout>
          
          <BaseRouter/>

        </CustomLayout>

      </Router>

    </div>
  );
}

export default App;
