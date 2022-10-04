import styled from 'styled-components/native';

export const InputField = styled.TextInput`
	width: 100%;
	height: 48px;

	border: 2px solid ${({ theme }) => theme.COLORS.GRAY_5};

	border-radius: 6px;

	padding: 10px 14px;
`;
