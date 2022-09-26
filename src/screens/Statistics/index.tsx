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
	BackIcon,
} from './style';

import { MaterialIcons } from '@expo/vector-icons';

export function Statistics() {
	return (
		<Container>
			<BackIcon />
			<Percent>90,86%</Percent>
			<Texts style={{ marginBottom: 34 }}>das refeições dentro da dieta</Texts>
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
