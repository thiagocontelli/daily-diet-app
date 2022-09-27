import {ReactNode} from 'react'
import { Container } from "./style";

type Props = {
  children?: ReactNode;
}

export function RoundBg({children}: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}