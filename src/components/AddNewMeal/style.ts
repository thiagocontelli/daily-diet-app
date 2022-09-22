import styled, { css } from 'styled-components/native';

export const Container = styled.View`
	margin-top: 40px;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_1};
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.LG}px;
	`}

	margin-bottom: 8px;
`;
