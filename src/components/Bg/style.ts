import styled, { css } from 'styled-components/native';

type Props = {
	type?: 'PRIMARY' | 'SECONDARY';
};

export const Container = styled.View<Props>`
	${({ theme, type }) =>
		type === 'PRIMARY'
			? css`
					background-color: ${theme.COLORS.GREEN_LIGHT};
			  `
			: type === 'SECONDARY'
			? css`
					background-color: ${theme.COLORS.RED_LIGHT};
			  `
			: css`
					background-color: ${theme.COLORS.GRAY_5};
			  `}

	align-items: center;
	justify-content: flex-end;

	flex: 1;
`;
