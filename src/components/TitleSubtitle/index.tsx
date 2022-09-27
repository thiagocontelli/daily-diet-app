import { Container, Subtitle, Title } from './style';

type Props = {
	title: string;
	subtitle: string;
	color?: 'PRIMARY' | 'SECONDARY';
};

export function TitleSubtitle({ title, subtitle, color }: Props) {
	return (
		<Container>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
		</Container>
	);
}
