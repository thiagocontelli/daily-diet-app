import { Text } from 'react-native';
import { TitleSubtitle } from '../TitleSubtitle';
import { Container, Arrow } from './style';
import {TouchableOpacityProps} from 'react-native'
import {useNavigation} from '@react-navigation/native'

type Props = TouchableOpacityProps

export function Stats({...rest}: Props) {

  const navigation = useNavigation()
  
  function handleViewStats() {
    navigation.navigate('statistics')
  }
  
	return (
		<Container {...rest} onPress={handleViewStats}>
			<Arrow />
			<TitleSubtitle title="90,86%" subtitle="das refeições dentro da dieta" />
		</Container>
	);
}
