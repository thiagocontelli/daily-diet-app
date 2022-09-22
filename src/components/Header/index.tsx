import { Container, Logo, UserImg } from './style';

import logoImg from '../../assets/logo.png';
import userImg from '../../assets/user.jpg';

export function Header() {
	return (
		<Container>
			<Logo source={logoImg}></Logo>
			<UserImg source={userImg}></UserImg>
		</Container>
	);
}
