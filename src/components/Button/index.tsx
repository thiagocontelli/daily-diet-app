import { Container, Title } from './style';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
	title: string;
	type?: 'PRIMARY' | 'SECONDARY';
	icon?: any;
	handle?: () => void;
};

export function Button({
	handle,
	title,
	type = 'PRIMARY',
	icon,
	...rest
}: Props) {
	return (
		<Container onPress={handle} type={type} {...rest}>
			<MaterialIcons
				name={icon}
				size={24}
				color={type === 'PRIMARY' ? '#FFF' : '#333638'}
			/>
			<Title type={type}>{title}</Title>
		</Container>
	);
}
