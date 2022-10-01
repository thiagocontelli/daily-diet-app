import styled, { css } from 'styled-components/native';

import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
	type: 'PRIMARY' | 'SECONDARY';
};

export const Container = styled(SafeAreaView)<Props>`
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

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.MD}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_1};
	`}

	margin-bottom: 23px;
`;

export const Container4 = styled.View`
	flex-direction: row;
	justify-content: space-between;

	width: 90%;
  padding-bottom: 200px;
`;
