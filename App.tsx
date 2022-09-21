import { Home } from './src/screens/Home';

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
			<Home />
		</ThemeProvider>
	);
}
