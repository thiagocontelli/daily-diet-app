import { Container, Number, Text } from './style';

type Props = {
	number: string;
	text: string;
	color?: 'PRIMARY' | 'SECONDARY';
	width?: string;
};

export function StatsBox({ number, text, color, width }: Props) {
	return (
		<Container color={color} width={width}>
			<Number>{number}</Number>
			<Text>{text}</Text>
		</Container>
	);
}
