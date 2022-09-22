import { Container, Title } from './style';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
	title: string;
	type?: 'PRIMARY' | 'SECONDARY';
	icon: any;
};

export function Button({ title, type = 'PRIMARY', icon, ...rest }: Props) {
	return (
		<Container type={type} {...rest}>
			<MaterialIcons
				name={icon}
				size={24}
				color={type === 'PRIMARY' ? '#FFF' : '#333638'}
			/>
			<Title type={type}>{title}</Title>
		</Container>
	);
}
