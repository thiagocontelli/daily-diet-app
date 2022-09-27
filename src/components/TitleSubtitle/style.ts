import styled, { css } from 'styled-components/native';

type Props = {
	color?: 'PRIMARY' | 'SECONDARY';
};

export const Container = styled.View`
	align-items: center;
	justify-content: center;
`;

export const Title = styled.Text<Props>`
	${({ theme, color }) =>
		color === 'PRIMARY'
			? css`
					color: ${theme.COLORS.GREEN_DARK};
			  `
			: color === 'SECONDARY'
			? css`
					color: ${theme.COLORS.RED_DARK};
			  `
			: css`
					color: ${theme.COLORS.GRAY_1};
			  `}
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: 32px;
`;

export const Subtitle = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_2};
	`}

	text-align: center;
`;
