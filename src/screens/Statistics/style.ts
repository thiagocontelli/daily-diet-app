import styled, { css } from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

type Props = {
	type: 'PRIMARY' | 'SECONDARY';
};

export const Container = styled.View<Props>`
	${({ theme, type }) =>
		type === 'PRIMARY'
			? css`
					background-color: ${theme.COLORS.GREEN_LIGHT};
			  `
			: css`
					background-color: ${theme.COLORS.RED_LIGHT};
			  `}

	align-items: center;
	justify-content: flex-end;

	flex: 1;
`;

export const Percent = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_1};
	`}

	font-size: 32px;
`;

export const Texts = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_2};
	`}

	text-align: center;
`;

export const Container2 = styled.View`
	background-color: ${({ theme }) => theme.COLORS.WHITE};

	width: 100%;
	height: 75%;

	border-top-left-radius: 20px;
	border-top-right-radius: 20px;

	align-items: center;

	padding-top: 30px;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.MD}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_1};
	`}

	margin-bottom: 23px;
`;

export const StatsNumber = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_1};
	`}
	font-size: 24px;
`;

export const Container3 = styled.View`
	align-items: center;
	justify-content: center;

	margin-bottom: 12px;

	padding: 16px;

	width: 90%;

	border-radius: 8px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const Container4 = styled.View`
	flex-direction: row;
	justify-content: space-between;

	width: 90%;
`;

export const Container5 = styled.View<Props>`
	align-items: center;
	justify-content: center;

	width: 49%;

	border-radius: 8px;

	padding: 16px;

	${({ theme, type }) =>
		type === 'PRIMARY'
			? css`
					background-color: ${theme.COLORS.GREEN_LIGHT};
			  `
			: css`
					background-color: ${theme.COLORS.RED_LIGHT};
			  `}
`;

export const BackButton = styled(TouchableOpacity)`
	position: absolute;
	top: 35px;
	left: 20px;
`;
