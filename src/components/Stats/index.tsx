import { Text } from 'react-native';
import { Container, Percent } from './style';

export function Stats() {
	return (
		<Container>
			{/* <Arrow /> */}
			<Percent>90,86%</Percent>
			<Text>das refeições dentro da dieta</Text>
		</Container>
	);
}
