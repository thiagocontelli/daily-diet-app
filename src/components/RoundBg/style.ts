import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.COLORS.WHITE};

	width: 100%;

	border-top-left-radius: 20px;
	border-top-right-radius: 20px;

	margin-top: 32px;

	align-items: center;

	padding-top: 30px;
`;
