import { AddNewMeal } from '../../components/AddNewMeal';
import { Header } from '../../components/Header';
import { MealsList } from '../../components/MealsList';
import { Stats } from '../../components/Stats';

import { Container } from './style';

const meals = {
	hour: '15:45',
	meal: 'Salada',
	description: 'Salada ceaser com mostarda',
	date: '01.01.01',
};

export function Home() {
	return (
		<Container>
			<Header />
			<Stats />
			<AddNewMeal />
			<MealsList mealInfo={meals} />
		</Container>
	);
}
