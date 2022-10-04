import { Container, TextAreaField, Label } from './style';

type Props = {
	title: string;
};

export function TextArea({ title }: Props) {
	return (
		<Container>
			<Label>{title}</Label>
			<TextAreaField
				multiline={true}
				numberOfLines={5}
				style={{ textAlignVertical: 'top' }}
			/>
		</Container>
	);
}
