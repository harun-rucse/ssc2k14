import React from 'react';
import { Toaster } from 'react-hot-toast';
import FriendList from './components/FriendList';
import './firebase';

const App = () => {
	return (
		<div className='wrapper'>
			<h1 className='heading-title'>
				Niamatpur Bohomukhi High School, SSC Batch 2014
			</h1>
			<FriendList />
			<Toaster />
		</div>
	);
};

export default App;
