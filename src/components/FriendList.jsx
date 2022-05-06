import React from 'react';
import useFriendList from '../hooks/useFriendList';
import Card from './Card';
import Loader from './Loader';

const FriendList = () => {
	const { loading, friends } = useFriendList();

	if (loading) return <Loader />;

	return (
		<div className='card-container'>
			{friends.map((friend, indx) => (
				<Card key={indx} friend={friend} />
			))}
		</div>
	);
};

export default FriendList;
