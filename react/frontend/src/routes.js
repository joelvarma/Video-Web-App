import React from 'react';
import { Route } from 'react-router-dom';

import VideoList from './containers/VideoListView';
import VideoDetail from './containers/VideoDetailView';

const BaseRouter = () => (

			 <div> 

			    <Route exact path='/' component= {VideoList} />

			    <Route exact path='/:videoId' component={VideoDetail} />


			 </div>

	);

export default BaseRouter;