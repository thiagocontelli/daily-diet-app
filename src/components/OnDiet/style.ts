import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
	type?: 'PRIMARY' | 'SECONDARY';
	width?: string;
	isActive?: boolean;
};

export const OnDietButton = styled(TouchableOpacity)<Props>`
	height: 50px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_6};

	flex-direction: row;
	align-items: center;
	justify-content: center;

	border-radius: 6px;

	border: ${({ isActive }) => (isActive ? '1px solid' : 'none')};
	border-color: ${({ theme, type }) =>
		type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

	${({ width }) =>
		width
			? css`
					width: ${width};
			  `
			: css`
					width: 90%;
			  `};
`;

export const Circle = styled.View<Props>`
	width: 10px;
	height: 10px;

	border-radius: 100px;

	margin: 5px;

	${({ theme, type }) =>
		type === 'PRIMARY'
			? css`
					background-color: ${theme.COLORS.GREEN_DARK};
			  `
			: css`
					background-color: ${theme.COLORS.RED_DARK};
			  `}
`;
