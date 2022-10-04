import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import { Header } from '../../components/Header';
import { MealsList } from '../../components/MealsList';
import { Stats } from '../../components/Stats';
import { Button } from '../../components/Button';

import { Container } from './style';

import { NavigationRepository } from '../../repositories/navigation';

export function Home() {
	const { handleGoTo } = NavigationRepository();

	const navigation = useNavigation();

	function handleOpenStats() {
		navigation.navigate('statistics');
	}

	return (
		<Container>
			<Header />
			<Stats handleOpenStats={handleOpenStats} />
			<Text>Refeições</Text>
			<Button
				title="Nova Refeição"
				icon={'add'}
				onPress={() => handleGoTo('new')}
			/>
			<MealsList />
		</Container>
	);
}
