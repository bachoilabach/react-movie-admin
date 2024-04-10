import React, { useEffect, useState } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import {
	Card,
	CardHeader,
	Input,
	Typography,
	Button,
	CardBody,
	CardFooter,
	Tabs,
	TabsHeader,
	Tab,
	Avatar,
	IconButton,
	Tooltip,
} from '@material-tailwind/react';

import Modal from '../components/Modal';
import { getAllUsers, handleDeleteUserApi } from '../services/userService';
import { unstable_HistoryRouter } from 'react-router-dom';

const TABS = [
	{
		label: 'Admin',
		value: 'admin',
	},
	{
		label: 'Member',
		value: 'member',
	},
	{
		label: 'Vip member',
		value: 'vipmember',
	},
];
const TABLE_HEAD = ['Name', 'Role', 'Gender', 'Phone number', 'Action'];

export default function AccountPage() {
	const [modal, setModal] = useState(false);
	const [check,setCheck] = useState(false)
	const [tableRows, setTableRows] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);

	const toggleModal = ({userID,email,fullName,phoneNumber,gender,roleID,address}) => {
		const userData = {userID,email,fullName,phoneNumber,gender,roleID,address}
		setSelectedUser(userData);
		setModal(!modal);
		if (!modal) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
	};

	const getAccount = async () => {
		try {
			let response = await getAllUsers('ALL');
			setTableRows(response.users);
		} catch (error) {
			console.error('Lỗi khi gọi API:', error);
		}
	};

	const handleDeleteUser = async ({userID})=>{
		const user = {userID}
		console.log(user)
		try {
			await handleDeleteUserApi(user.userID)
			setCheck(true)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getAccount();
	}, [check || modal]);

	return (
		<div className='flex text-textMain p-[20px] gap-[3%]'>
			<div className='w-full h-full flex flex-col gap-y-4'>
				<div className='h-[calc(100vh-136px)]'>
					<Card className='h-full w-full justify-between'>
						<div>
							<CardHeader
								floated={false}
								shadow={false}
								className='rounded-none flex flex-row justify-between items-center max-h-14 mt-1'>
								<div className='flex flex-col items-center justify-between gap-4 md:flex-row py-20'>
									<Tabs value='all' className='w-full md:w-max'>
										<TabsHeader className='w-[500px] z-0'>
											{TABS.map(({ label, value }) => (
												<Tab key={value} value={value}>
													&nbsp;&nbsp;{label}&nbsp;&nbsp;
												</Tab>
											))}
										</TabsHeader>
									</Tabs>
								</div>
								<div className=' flex items-center justify-between gap-2 mt-1'>
									<div className='w-full md:w-72 '>
										<Input
											label='Search'
											icon={<MagnifyingGlassIcon className='h-5 w-5' />}
										/>
									</div>
									<div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
										<Button variant='outlined' size='sm'>
											Search
										</Button>
									</div>
								</div>
							</CardHeader>
							<CardBody className='p-1 px-0'>
								<table className=' w-full min-w-max table-auto text-left'>
									<thead>
										<tr>
											{TABLE_HEAD.map((head) => (
												<th
													key={head}
													className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-3'>
													<Typography
														variant='small'
														color='blue-gray'
														className='font-normal leading-none opacity-70'>
														{head}
													</Typography>
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										{tableRows.map(
											(
												{ userID, img, email, fullName, roleID, gender, phoneNumber,address },
												index
											) => {
												const isLast = index === tableRows.length - 1;
												const classes = isLast
													? 'p-4'
													: 'p-4 border-b border-blue-gray-50';
												const role = roleID === 1 ? 'Admin' : 'User';
												const genderName = gender === 1 ? 'Male' : 'Female';
												const avatar =
													img === ''
														? ''
														: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg';
												return (
													<tr key={index}>
														<td className={classes}>
															<div className='flex items-center gap-3'>
																<Avatar src={avatar} alt={fullName} size='sm' />
																<div className='flex flex-col'>
																	<Typography
																		variant='small'
																		color='blue-gray'
																		className='font-normal'>
																		{fullName}
																	</Typography>
																	<Typography
																		variant='small'
																		color='blue-gray'
																		className='font-normal opacity-70'>
																		{email}
																	</Typography>
																</div>
															</div>
														</td>
														<td className={classes}>
															<div className='flex flex-col'>
																<Typography
																	variant='small'
																	color='blue-gray'
																	className='font-normal opacity-70'>
																	{role}
																</Typography>
															</div>
														</td>
														<td className={classes}>
															<div className='w-max'>
																<Typography
																	variant='small'
																	color='blue-gray'
																	className='font-normal'>
																	{genderName}
																</Typography>
															</div>
														</td>
														<td className={classes}>
															<Typography
																variant='small'
																color='blue-gray'
																className='font-normal'>
																{phoneNumber}
															</Typography>
														</td>
														<td className={classes}>
															<Tooltip content='Edit User'>
																<IconButton
																	variant='text'
																	onClick={()=>toggleModal({userID,email,fullName,phoneNumber,gender,roleID,address})}>
																	<PencilIcon className='h-4 w-4 text-yellow-800' />
																</IconButton>
															</Tooltip>
															<Tooltip content='Delete User'>
																<IconButton
																	variant='text'
																	onClick={() => handleDeleteUser({userID})}
																>
																	<TrashIcon className='h-4 w-4 text-red-500' />
																</IconButton>
															</Tooltip>
														</td>
													</tr>
												);
											}
										)}
									</tbody>
								</table>
							</CardBody>
						</div>
						{modal && <Modal toggleModal={toggleModal} selectedUser={selectedUser}/>}
						<CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-2'>
							<Typography
								variant='small'
								color='blue-gray'
								className='font-normal'>
								Page 1 of 10
							</Typography>
							<div className='flex gap-2'>
								<Button variant='outlined' size='sm'>
									Previous
								</Button>
								<Button variant='outlined' size='sm'>
									Next
								</Button>
							</div>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
}
