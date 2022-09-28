import { useNavigation } from '@react-navigation/native';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {Container} from './style'

type Props = TouchableOpacityProps & {
	type?: 'PRIMARY' | 'SECONDARY';
};

export function BackButton({ type, ...rest }: Props) {
	const navigation = useNavigation();

	function handleBack() {
		navigation.goBack();
	}

	return (
		<Container {...rest} onPress={handleBack}>
			<MaterialIcons
				name="arrow-back"
				size={30}
				color={type === 'PRIMARY' ? '#639339' : type === 'SECONDARY' ? '#BF3B44' : '#333638'}
			/>
		</Container>
	);
}
