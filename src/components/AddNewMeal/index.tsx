import { Button } from '../Button';
import { Container, Title } from './style';

export function AddNewMeal() {
	return (
		<Container>
			<Title>Refeições</Title>
			<Button title="Nova Refeição" icon={'add'} />
		</Container>
	);
}
