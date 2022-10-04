import styled, { css } from 'styled-components/native';

export const Container = styled.View`
	width: 90%;
	margin-bottom: 5px;
`;

export const Label = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_1};
	`};

	margin-bottom: 5px;
`;

export const TextAreaField = styled.TextInput`
	border: 2px solid ${({ theme }) => theme.COLORS.GRAY_5};

	border-radius: 6px;

	padding: 10px;
`;
