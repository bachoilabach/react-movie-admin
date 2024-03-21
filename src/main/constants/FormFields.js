const UserFields = [
	{
		label: 'Email',
		id: 'email',
		name: 'email',
		placeholder: 'Enter email',
		type: 'email',
		autoComplete: 'email',
		isRequired: true,
        disable: true,
		classExpand: 'cursor-not-allowed'
	},
    {
		label: 'Full Name',
		id: 'fullName',
		name: 'fullName',
		placeholder: ' Enter user name',
		type: 'text',
		autoComplete: 'username',
		isRequired: true,

	},
    {
		label: 'PhoneNumber',
		id: 'phoneNumber',
		name: 'phoneNumber',
		placeholder: 'Enter user PhoneNumber',
		type: 'number',
		autoComplete: 'email',
		isRequired: false,
		classExpand: 'w-[113%] ',

	},
    {
		label: 'Address',
		id: 'address',
		name: 'address',
		placeholder: 'Enter user address',
		type: 'text',
		autoComplete: 'address',
		isRequired: false,
		classExpand: 'w-[188%]',
	},
];

export { UserFields };
