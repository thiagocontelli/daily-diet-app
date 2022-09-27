import {
	Container,
	Container4,
	Title,
	BackButton,
} from './style';

import { MaterialIcons } from '@expo/vector-icons';

import { TouchableOpacityProps } from 'react-native';

import { TitleSubtitle } from '../../components/TitleSubtitle';
import { StatsBox } from '../../components/StatsBox';
import { RoundBg } from '../../components/RoundBg';

type Props = TouchableOpacityProps & {
	type?: 'PRIMARY' | 'SECONDARY';
};

export function Statistics({ type = 'PRIMARY', ...rest }: Props) {
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
			<RoundBg>
				<Title>Estatísticas Gerais</Title>
        <StatsBox number='22' text='melhor sequência de pratos dentro da dieta' />
				<StatsBox number='109' text='refeições registradas' />
				<Container4>
          <StatsBox width='49%' number='99' text='refeições dentro da dieta' color='PRIMARY' />
          <StatsBox width='49%' number='10' text='refeições fora da dieta' color='SECONDARY' />
				</Container4>
			</RoundBg>
		</Container>
	);
}
