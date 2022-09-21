import { Text } from 'react-native';
import { Header } from '../../components/Header';

import { Container } from './style';

export function Home() {
	return (
		<Container>
			<Header />
			<Text>Página Inicial</Text>
		</Container>
	);
}
