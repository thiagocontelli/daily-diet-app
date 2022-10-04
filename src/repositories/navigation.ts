import { useNavigation } from '@react-navigation/native';

export function NavigationRepository() {
	const navigation = useNavigation();

	const handleGoTo = (page: any) => {
		navigation.navigate(page);
	};

	return {
		handleGoTo,
	};
}
