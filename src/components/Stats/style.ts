import styled, { css } from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
	width: 100%;

	background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 8px;

	margin-top: 33px;

	padding: 20px;
`;

export const Arrow = styled(ArrowUpRight).attrs(({ theme }) => ({
	size: 24,
	color: theme.COLORS.GREEN_DARK,
}))`
	position: absolute;
	right: 10px;
	top: 10px;
`;
