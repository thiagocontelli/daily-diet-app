import { useNavigation } from '@react-navigation/native';
import { AddNewMeal } from '../../components/AddNewMeal';
import { Header } from '../../components/Header';
import { MealsList } from '../../components/MealsList';
import { Stats } from '../../components/Stats';
import { Statistics } from '../Statistics';

import { Container } from './style';

export function Home() {
	const navigation = useNavigation();

	function handleOpenStats() {
		navigation.navigate('statistics');
	}

	return (
		<Container>
			<Header />
			<Stats handleOpenStats={handleOpenStats} />
			<AddNewMeal />
			<MealsList />
		</Container>
	);
}
