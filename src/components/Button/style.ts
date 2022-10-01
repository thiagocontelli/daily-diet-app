import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
	type: 'PRIMARY' | 'SECONDARY';
};

export const Container = styled(TouchableOpacity)<Props>`
	${({ theme, type }) =>
		type === 'PRIMARY'
			? css`
					background-color: ${theme.COLORS.GRAY_2};
			  `
			: css`
					background-color: ${({ theme }) => theme.COLORS.WHITE};
					border: 2px solid ${theme.COLORS.GRAY_2};
			  `}

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	height: 50px;
	width: 100%;

	border-radius: 6px;
`;

export const Title = styled.Text<Props>`
	${({ theme, type }) =>
		type === 'PRIMARY'
			? css`
					font-family: ${theme.FONT_FAMILY.BOLD};
					font-size: ${theme.FONT_SIZE.MD}px;
					color: ${theme.COLORS.WHITE};
			  `
			: css`
					font-family: ${theme.FONT_FAMILY.BOLD};
					font-size: ${theme.FONT_SIZE.MD}px;
					color: ${theme.COLORS.GRAY_2};
			  `}
`;
