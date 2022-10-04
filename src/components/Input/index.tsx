import { InputField } from './style';

type Props = {
	title?: string;
	width?: string;
	keyboardType?: string;
};

export function Input({ title, width, keyboardType }: Props) {
	return <InputField keyboardType={keyboardType} />;
}
