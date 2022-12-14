import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import styled from 'styled-components';
import { TableData } from '../../Data';
import Button from './Button';
import InputModal from './InputModal';
import TableRow from './TableRow';

const Container = styled.div`
	max-width: 1440px;
	width: 100%;
	margin: 0rem auto;
	padding: 2rem 1rem 1rem;
	position: relative;
`;

const TitleBar = styled.div`
	width: 100%;
	position: relative;
	font-weight: 500;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;

	h1 {
		font-family: 'Comfortaa', cursive;
		font-weight: 600;
		letter-spacing: -1px;
	}
`;
const Top = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Item = styled.div`
	flex-basis: 32.5%;
	padding: 1.7rem 1.5rem;
	border-radius: 0.5rem;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border: 1px solid rgba(22, 22, 22, 0.12);
`;
const TopText = styled.p`
	font-size: 0.8rem;
	color: rgba(14, 14, 14, 0.69);
	font-weight: 500;
	margin-bottom: 10px;
`;
const TopNumber = styled.h2`
	font-size: 3rem;
	font-weight: 400;
`;

const Dashboard = () => {
	const [maintenance, setMaintenance] = useState(TableData);
	const [modal, setModal] = useState(false);

	const handleModal = () => {
		setModal(!modal);
	};

	const totalMaintenance = maintenance.filter(
		(item) => item.status == 'maintenance'
	).length;

	const totalAvailable = maintenance.filter(
		(item) => item.status == 'available'
	).length;

	const totalBreakdown = maintenance.filter(
		(item) => item.status == 'breakdown'
	).length;

	return (
		<>
			{!modal && (
				<Container>
					<TitleBar>
						<h1>Maintenance</h1>
						<Button
							variant="solid"
							shape="normal"
							onClick={handleModal}
							hasIcon="true"
							iconPosition="left"
						>
							<FiPlus /> Add record
						</Button>
					</TitleBar>
					<Top>
						<Item>
							<TopText>Total Available Equipment</TopText>
							<TopNumber> {totalAvailable} </TopNumber>
						</Item>
						<Item>
							<TopText>Total Maintenance Equipment</TopText>
							<TopNumber> {totalMaintenance} </TopNumber>
						</Item>
						<Item>
							<TopText>Total Breakdown Equipment</TopText>
							<TopNumber> {totalBreakdown} </TopNumber>
						</Item>
					</Top>
					<div className="table-container">
						<table>
							<thead>
								<tr>
									<th>Date</th>
									<th>Equipment ID</th>
									<th>Location</th>
									<th>SBU</th>
									<th>Equipment</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								{maintenance.map((item, index) => (
									<TableRow key={index} item={item} />
								))}
							</tbody>
						</table>
					</div>
				</Container>
			)}

			{modal && (
				<InputModal
					handleModal={handleModal}
					maintenance={maintenance}
					setMaintenance={setMaintenance}
				/>
			)}
		</>
	);
};

export default Dashboard;
