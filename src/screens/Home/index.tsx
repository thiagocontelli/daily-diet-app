import { Header } from '../../components/Header';
import { Stats } from '../../components/Stats';

import { Container } from './style';

export function Home() {
	return (
		<Container>
			<Header />
			<Stats />
		</Container>
	);
}
