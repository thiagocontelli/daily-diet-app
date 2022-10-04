import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
	flex: 1;
`;

export const Title = styled.Text`
	position: absolute;
	top: 40px;

	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.LG};
	`}
`;

export const OnDietText = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_1};
	`};

	margin-bottom: 5px;
`;

export const Container2 = styled.View`
	flex-direction: row;
	justify-content: space-between;

	width: 90%;
`;

export const Container3 = styled.View`
	flex-direction: column;
`;

export const Container4 = styled.View`
	flex-direction: row;
	justify-content: space-between;

	width: 100%;
`;

export const Container5 = styled.View`
	width: 100%;

	padding-top: 90px;
	padding-bottom: 10px;
`;

export const Text = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_1};
	`}

	margin-top: 20px;
`;
