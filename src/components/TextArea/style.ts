import styled from 'styled-components/native';

export const TextAreaField = styled.TextInput`
	width: 100%;

	border: 2px solid ${({ theme }) => theme.COLORS.GRAY_5};

	border-radius: 6px;

	padding: 10px;
`;
