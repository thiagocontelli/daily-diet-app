import styled, { css } from 'styled-components/native';

type Props = {
	type?: 'PRIMARY' | 'SECONDARY';
};

export const Container = styled.View`
	width: 100%;

	margin-top: 32px;
`;

export const MealInfo = styled.TouchableOpacity`
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_6};
	border-radius: 6px;

	height: 49px;

	padding: 0 12px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Info = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.LG};
		font-family: ${theme.FONT_FAMILY.REGULAR};
		color: ${theme.COLORS.GRAY_2};
	`}
`;

export const Circle = styled.View<Props>`
	width: 14px;
	height: 14px;

	border-radius: 100px;

	background: ${({ theme, type }) =>
		type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
