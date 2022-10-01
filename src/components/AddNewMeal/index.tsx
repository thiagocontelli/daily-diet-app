import { TouchableOpacityProps } from 'react-native';
import { Button } from '../Button';
import { Container, Title } from './style';

type Props = {
  handleOpenNewMeal: () => void;
}

export function AddNewMeal({handleOpenNewMeal, ...rest}: Props) {
	return (
		<Container {...rest} onPress={handleOpenNewMeal}>
			<Title>Refeições</Title>
			<Button handle={handleOpenNewMeal} title="Nova Refeição" icon={'add'} />
		</Container>
	);
}
