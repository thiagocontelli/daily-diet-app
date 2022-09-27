import { Text } from 'react-native';
import { TitleSubtitle } from '../TitleSubtitle';
import { Container, Percent, Arrow } from './style';

export function Stats() {
	return (
		<Container>
			<Arrow />
			<TitleSubtitle title="90,86%" subtitle="das refeições dentro da dieta" />
		</Container>
	);
}
