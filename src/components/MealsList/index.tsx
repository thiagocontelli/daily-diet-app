import { Text, View } from 'react-native';
import { TouchableOpacityProps } from 'react-native';
import { Circle, Container, Info, MealInfo } from './style';

type Props = TouchableOpacityProps & {
	mealInfo: {
		type?: 'PRIMARY' | 'SECONDARY';
		hour: string;
		meal: string;
		description: string;
		date: string;
	};
};

export function MealsList({ mealInfo, ...rest }: Props) {
	return (
		<Container>
			<Text>{mealInfo.date}</Text>
			<MealInfo {...rest}>
				<Info>
					{mealInfo.hour} | {mealInfo.meal}
				</Info>
				<Circle type={mealInfo.type}></Circle>
			</MealInfo>
		</Container>
	);
}
