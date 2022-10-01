import { View } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Bg } from '../../components/Bg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { OnDiet } from '../../components/OnDiet';
import { RoundBg } from '../../components/RoundBg';
import { TextArea } from '../../components/TextArea';
import {
	Container,
	Container2,
	Container3,
	Container4,
	Container5,
	Title,
	OnDietText,
} from './style';

export function NewMeal() {
	return (
		<Container>
			<Bg>
				<BackButton />
				<Title>Nova Refeição</Title>
				<RoundBg>
					<Input title="Nome" />
					<TextArea title="Descrição" />
					<Container2>
						<Input keyboardType="numeric" width="49%" title="Data" />
						<Input keyboardType="numeric" width="49%" title="Hora" />
					</Container2>
					<Container3>
						<OnDietText>Está dentro da dieta</OnDietText>
						<Container4>
							<OnDiet width="49%" text="Sim" />
							<OnDiet width="49%" text="Não" type="SECONDARY" />
						</Container4>
					</Container3>
					<Container5>
						<Button title="Cadastrar refeição" />
					</Container5>
				</RoundBg>
			</Bg>
		</Container>
	);
}
