import { ReactNode } from 'react';
import { Container } from './style';

type Props = {
	children?: ReactNode;
	type?: 'PRIMARY' | 'SECONDARY';
};

export function Bg({ children, type }: Props) {
	return <Container type={type}>{children}</Container>;
}
