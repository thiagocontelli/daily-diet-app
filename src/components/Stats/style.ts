import styled, { css } from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled.View`
	width: 100%;

	background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 8px;

	margin-top: 33px;

	padding: 20px;
`;

export const Percent = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_1};
	`}
	font-size: 32px;
`;

export const Subtext = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_2};
	`}
`;

export const Arrow = styled(ArrowUpRight).attrs(({ theme }) => ({
	size: 24,
	color: theme.COLORS.GREEN_DARK,
}))`
	position: absolute;
	right: 10px;
	top: 10px;
`;
