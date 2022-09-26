import { Text, View } from 'react-native';
import { TouchableOpacityProps } from 'react-native';
import { Circle, Container, Info, MealInfo } from './style';

type Props = TouchableOpacityProps & {};

export function MealsList({ ...rest }: Props) {
	return (
		<Container>
			<Text>01.01.01</Text>
			<MealInfo {...rest}>
				<Info>15:45 | Salada</Info>
				<Circle type="PRIMARY"></Circle>
			</MealInfo>
		</Container>
	);
}
