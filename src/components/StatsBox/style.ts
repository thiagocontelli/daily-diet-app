import styled, { css } from "styled-components/native";

type Props = {
  color?: 'PRIMARY' | 'SECONDARY';
  width?: string;
}

export const Container = styled.View<Props>`
	align-items: center;
	justify-content: center;

	margin-bottom: 12px;

	padding: 16px;

	border-radius: 8px;

  ${({width}) => width ? css`
    width: ${width};
  ` : css`
    width: 90%;
  `}

	${({ theme, color }) =>
		color === 'PRIMARY'
			? css`
					background-color: ${theme.COLORS.GREEN_LIGHT};
			  `
			: color === 'SECONDARY'
			? css`
					background-color: ${theme.COLORS.RED_LIGHT};
			  `
			: css`
					background-color: ${theme.COLORS.GRAY_6};
			  `}
`

export const Number = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_1};
	`}
	font-size: 24px;
`

export const Text = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_2};
	`}

	text-align: center;
`