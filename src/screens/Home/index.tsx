import { AddNewMeal } from '../../components/AddNewMeal';
import { Header } from '../../components/Header';
import { MealsList } from '../../components/MealsList';
import { Stats } from '../../components/Stats';
import { Statistics } from '../Statistics';

import { Container } from './style';

export function Home() {
	return (
		// <Container>
		// 	<Header />
		// 	<Stats />
		// 	<AddNewMeal />
		// 	<MealsList />
		// </Container>
		<Statistics />
	);
}
