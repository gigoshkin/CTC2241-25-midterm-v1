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
	{
		id: 5,
		name: "David Wilson",
		email: "david@example.com",
		avatar: "https://fakeimg.pl/150x150",
	},
	{
		id: 6,
		name: "Jessica Garcia",
		email: "jessica@example.com",
		avatar: "https://fakeimg.pl/150x150",
	},
	{
		id: 7,
		name: "Daniel Rodriguez",
		email: "daniel@example.com",
		avatar: "https://fakeimg.pl/150x150",
	},
	{
		id: 8,
		name: "Ashley Martinez",
		email: "ashley@example.com",
		avatar: "https://fakeimg.pl/150x150",
	},
	{
		id: 9,
		name: "Kevin Anderson",
		email: "kevin@example.com",
		avatar: "https://fakeimg.pl/150x150",
	},
	{
		id: 10,
		name: "Brittany Thomas",
		email: "brittany@example.com",
		avatar: "https://fakeimg.pl/150x150",
	},
];


const searchInput = document.getElementById('search');
const userList = document.getElementById('userList');

for (const user of users) {
	const template = `<div class="card"><div class="card-header"><div class="user-info"><div class="avatar"><img src="${user.avatar}" alt="${user.name}" /></div><div class="user-details"><h3>${user.name}</h3><p class="user-email">${user.email}</p></div></div></div><div class="card-content"><p class="user-id">User ID: ${user.id}</p></div></div>`;
	userList.innerHTML += template;
}

const cards = userList.querySelectorAll('.card');

searchInput.addEventListener('keyup', (e) => {
	const filter = searchInput.value.toUpperCase();

	for (i = 0; i < cards.length; i++) {
		const card = cards[i];
		const txtValue = card.querySelector('.user-details h3').innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			cards[i].style.display = "";
		} else {
			cards[i].style.display = "none";
		}
	}
});