import { Fragment, useState, useEffect, type ChangeEvent } from 'react';

import { Success } from './components/Success';
import { Users } from './components/Users';
import type { UserType } from './types';

function App() {
	const [users, setUsers] = useState<UserType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchValue, setSearchValue] = useState('');
	const [invitesUsers, setInvitesUsers] = useState<string[]>([]);
	const [inviteSend, setInviteSend] = useState(false);

	useEffect(() => {
		fetch('/data/users.json')
			.then((res) => res.json())
			.then((json) => setUsers(json.data as UserType[]))
			.catch((err) => console.error('Ошибка загрузки:', err))
			.finally(() => {
				setTimeout(() => {
					setIsLoading(false);
				}, 1000);
			});
	}, []);

	function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
		setSearchValue(e.target.value);
	}

	function handleInviteUser(email: string) {
		setInvitesUsers((prev) =>
			prev.includes(email)
				? prev.filter((prevEmail) => prevEmail !== email)
				: [...prev, email],
		);
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
