import {
	Container,
	Container2,
	Container3,
	Container4,
	Container5,
	Percent,
	StatsNumber,
	Texts,
	Title,
	BackButton,
} from './style';

import { MaterialIcons } from '@expo/vector-icons';

import { TouchableOpacityProps } from 'react-native';

import { TitleSubtitle } from '../../components/TitleSubtitle';

type Props = TouchableOpacityProps & {
	type?: 'PRIMARY' | 'SECONDARY';
};

export function Statistics({ type = 'PRIMARY', ...rest }) {
	return (
		<Container type={type}>
			<BackButton {...rest}>
				<MaterialIcons
					name="arrow-back"
					size={30}
					color={type === 'PRIMARY' ? '#639339' : '#BF3B44'}
				/>
			</BackButton>
			<TitleSubtitle title="90,86%" subtitle="das refeições dentro da dieta" />
			<Container2>
				<Title>Estatísticas Gerais</Title>
				<Container3>
					<StatsNumber>22</StatsNumber>
					<Texts>melhor sequência de pratos dentro da dieta</Texts>
				</Container3>
				<Container3>
					<StatsNumber>109</StatsNumber>
					<Texts>refeições registradas</Texts>
				</Container3>
				<Container4>
					<Container5 type="PRIMARY">
						<StatsNumber>99</StatsNumber>
						<Texts>refeições dentro da dieta</Texts>
					</Container5>
					<Container5 type="SECONDARY">
						<StatsNumber>10</StatsNumber>
						<Texts>refeições fora da dieta</Texts>
					</Container5>
				</Container4>
			</Container2>
		</Container>
	);
}
