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

	useEffect(() => {
		// Аналог как с сервера
		fetch('/data/users.json')
			.then((res) => res.json())
			.then((json) => setUsers(json.data))
			.then(() => setIsLoading(false))
			.catch((err) => console.error('Ошибка загрузки:', err)); // Всегда добавляй catch!
	}, []);

	return (
		<Fragment>
			<div className="App">
				<Users items={users} isLoading={isLoading} />
				{/* <Success /> */}
			</div>
		</Fragment>
	);
}

export default App;
