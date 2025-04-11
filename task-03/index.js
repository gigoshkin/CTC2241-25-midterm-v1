/**
 * პირობა იხილეთ HTML ფაილში
 */
const users = [
	{
		id: 1,
		name: "Alex Johnson",
		email: "alex@example.com",
		avatar: "https://fakeimg.pl/150x150",
	},
	{
		id: 2,
		name: "Sarah Williams",
		email: "sarah@example.com",
		avatar: "https://fakeimg.pl/150x150",
	},
	{
		id: 3,
		name: "Michael Brown",
		email: "michael@example.com",
		avatar: "https://fakeimg.pl/150x150",
	},
	{
		id: 4,
		name: "Emily Davis",
		email: "emily@example.com",
		avatar: "https://fakeimg.pl/150x150",
	},
];

const button = document.getElementById('toggleButton');
const userList = document.getElementById('userList');

button.addEventListener('click', (e) => {
	const isEnabled = button.dataset.state == 1;
	if (isEnabled)
	{
		disable();
	} else {
		enable();
	}
});

function enable()
{
	for (const user of users)
	{
		const template = `<div class="card"><div class="card-header"><div class="user-info"><div class="avatar"><img src="${user.avatar}" alt="${user.name}" /></div><div class="user-details"><h3>${user.name}</h3><p class="user-email">${user.email}</p></div></div></div><div class="card-content"><p class="user-id">User ID: ${user.id}</p></div></div>`;
		userList.innerHTML += template;
	}
	button.innerText = 'Hide Users'
	button.dataset.state = 1;
}

function disable()
{
	button.innerText = 'Show Users'
	userList.innerHTML = '';
	button.dataset.state = 0;
}