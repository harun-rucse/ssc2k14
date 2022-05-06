import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';

export default function useFriendList() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [friends, setFriends] = useState([]);

	const fetchFriends = useCallback(async () => {
		const db = getDatabase();
		const friendRef = ref(db, 'friends');
		const friendQuery = query(friendRef, orderByKey());

		try {
			setError(null);
			setLoading(true);
			const snapshot = await get(friendQuery);
			setLoading(false);

			if (snapshot.exists()) {
				setFriends(Object.values(snapshot.val()));
			}
		} catch (err) {
			console.log(err);
			setError('Data fetch error');
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchFriends();
	}, [fetchFriends]);

	return { loading, error, friends };
}
