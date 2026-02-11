import { Fragment, useState, useEffect } from 'react';

import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users
// useEffect(() => {
// 	// Аналог как с сервера
// 	fetch('/data/users.json')
// 		.then((res) => res.json())
// 		.then((data) => setImages(data))
// 		.catch((err) => console.error('Ошибка загрузки:', err)); // Всегда добавляй catch!
// }, []);

function App() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchValue, setSearchValue] = useState('');
	const [invitesUsers, setInvitesUsers] = useState([]);
	const [inviteSend, setInviteSend] = useState(false);

	useEffect(() => {
		// Аналог как с сервера
		fetch('/data/users.json')
			.then((res) => res.json())
			.then((json) => setUsers(json.data))
			.then(() => setIsLoading(false))
			.catch((err) => console.error('Ошибка загрузки:', err)); // Всегда добавляй catch!
	}, []);

	function handleSearchInput(e) {
		setSearchValue(e.target.value);
		// console.log(e.target.value);
	}

	function handleInviteUser(email) {
		if (invitesUsers.includes(email)) {
			setInvitesUsers(invitesUsers.filter((prev) => prev !== email));
		} else {
			setInvitesUsers((prev) => [...prev, email]);
		}
	}

	function handleSendInvite() {
		setInviteSend(true);
	}

	// console.log(invitesUsers);

	return (
		<Fragment>
			<div className="App">
				{inviteSend ? (
					<Success invitesUsers={invitesUsers} />
				) : (
					<Users
						items={users}
						isLoading={isLoading}
						searchValue={searchValue}
						invitesUsers={invitesUsers}
						handleSearchInput={handleSearchInput}
						handleInviteUser={handleInviteUser}
						handleSendInvite={handleSendInvite}
					/>
				)}
			</div>
		</Fragment>
	);
}

export default App;
