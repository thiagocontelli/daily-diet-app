import { TextAreaField } from './style';

type Props = {
	title?: string;
};

export function TextArea({ title }: Props) {
	return (
		<TextAreaField
			multiline={true}
			numberOfLines={5}
			style={{ textAlignVertical: 'top' }}
			maxLength={140}
		/>
	);
}
