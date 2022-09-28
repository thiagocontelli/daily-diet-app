import { useState } from 'react';
import { Text, TouchableOpacityProps } from 'react-native';
import { OnDietButton, Circle } from './style';

type Props = TouchableOpacityProps & {
	text: string;
	type?: 'PRIMARY' | 'SECONDARY';
	width?: string;
};

export function OnDiet({ width, text, type = 'PRIMARY', ...rest }: Props) {
	const [isActive, setIsActive] = useState(false);

	return (
		<OnDietButton
			width={width}
			type={type}
			onPress={() => setIsActive(!isActive)}
			isActive={isActive}
			{...rest}
		>
			<Circle type={type}></Circle>
			<Text>{text}</Text>
		</OnDietButton>
	);
}
