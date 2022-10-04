import { TitleSubtitle } from '../TitleSubtitle';
import { Container, Arrow } from './style';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps;

export function Stats({ ...rest }: Props) {
	return (
		<Container {...rest}>
			<Arrow />
			<TitleSubtitle title="90,86%" subtitle="das refeições dentro da dieta" />
		</Container>
	);
}
