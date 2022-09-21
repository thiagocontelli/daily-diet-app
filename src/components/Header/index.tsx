import { Container, Logo, UserImg } from './style';

import logoImg from '../../assets/logo.png';

export function Header() {
	return (
		<Container>
			<Logo source={logoImg}></Logo>
			<UserImg></UserImg>
		</Container>
	);
}
