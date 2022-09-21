import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {
	useFonts,
	Nunito_400Regular,
	Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

export default function App() {
	const [fontsLoaded] = useFonts({
		Nunito_400Regular,
		Nunito_700Bold,
	});

	return (
		<ThemeProvider theme={theme}>
			<View>
				<Text>Open up App.tsx to start working on your app!</Text>
				<StatusBar style="auto" />
			</View>
		</ThemeProvider>
	);
}
