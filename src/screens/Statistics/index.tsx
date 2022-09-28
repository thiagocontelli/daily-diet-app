import { Container4, Title } from './style';

import { TouchableOpacityProps } from 'react-native';

import { TitleSubtitle } from '../../components/TitleSubtitle';
import { StatsBox } from '../../components/StatsBox';
import { RoundBg } from '../../components/RoundBg';
import { Bg } from '../../components/Bg';
import { BackButton } from '../../components/BackButton';

type Props = TouchableOpacityProps & {
	type?: 'PRIMARY' | 'SECONDARY';
};

export function Statistics({ type = 'PRIMARY', ...rest }: Props) {
	return (
		<Bg type={type}>
			<BackButton type={type} />
			<TitleSubtitle title="90,86%" subtitle="das refeições dentro da dieta" />
			<RoundBg>
				<Title>Estatísticas Gerais</Title>
				<StatsBox
					number="22"
					text="melhor sequência de pratos dentro da dieta"
				/>
				<StatsBox number="109" text="refeições registradas" />
				<Container4>
					<StatsBox
						width="49%"
						number="99"
						text="refeições dentro da dieta"
						color="PRIMARY"
					/>
					<StatsBox
						width="49%"
						number="10"
						text="refeições fora da dieta"
						color="SECONDARY"
					/>
				</Container4>
			</RoundBg>
		</Bg>
	);
}
