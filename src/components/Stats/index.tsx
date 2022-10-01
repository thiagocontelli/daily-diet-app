import { TitleSubtitle } from '../TitleSubtitle';
import { Container, Arrow } from './style';
import {TouchableOpacityProps} from 'react-native'

type Props = TouchableOpacityProps & {
	handleOpenStats: () => void;
};

export function Stats({ handleOpenStats, ...rest }: Props) {
	return (
		<Container onPress={handleOpenStats} {...rest}>
			<Arrow />
			<TitleSubtitle title="90,86%" subtitle="das refeições dentro da dieta" />
		</Container>
	);
}
