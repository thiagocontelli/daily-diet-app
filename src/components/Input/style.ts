import styled, { css } from 'styled-components/native';

type Props = {
	width?: string;
};

export const Container = styled.View<Props>`
	margin-bottom: 20px;

	${({ width }) =>
		width
			? css`
					width: ${width};
			  `
			: css`
					width: 90%;
			  `};
`;

export const Label = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_1};
	`};

	margin-bottom: 5px;
`;

export const InputField = styled.TextInput`
	height: 48px;

	border: 2px solid ${({ theme }) => theme.COLORS.GRAY_5};

	border-radius: 6px;

	padding: 10px 14px;
`;
