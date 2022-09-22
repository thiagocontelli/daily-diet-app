import userImg from '../../assets/user.jpg';

import styled from 'styled-components/native';

export const Container = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.Image``;

export const UserImg = styled.Image`
	width: 40px;
	height: 40px;

	border-radius: 100px;

	background-color: transparent;
	border: 2px solid black;
`;
