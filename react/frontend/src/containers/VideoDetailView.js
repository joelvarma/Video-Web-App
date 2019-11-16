import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class VideoDetail extends React.Component{
 

	state = {

		video:{

		}
		
	}

	componentDidMount(){

			const videoId = this.props.match.params.videoId;
			//console.log(videoId);
			axios.get(`http://127.0.0.1:8000/api/${videoId}`).then(res=>{

					this.setState({
						video: res.data
					});
			console.log(res.data);		}

		)}
	

	render(){

		return(



					 <Card title={this.state.video.video_title} >
					 	<p>{this.state.video.description}
					 	</p>
					 </Card>


			)

	}
}

export default VideoDetail;
