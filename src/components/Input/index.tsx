import { Container, InputField, Label } from './style';

type Props = {
	title: string;
	width?: string;
	keyboardType?: string;
};

export function Input({ title, width, keyboardType }: Props) {
	return (
		<Container width={width}>
			<Label>{title}</Label>
			<InputField keyboardType={keyboardType} />
		</Container>
	);
}
