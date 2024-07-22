import React from 'react';
import {Html, Body, Container, Text, Link, Preview} from '@react-email/components'

interface Props {
  name: string
}

function WelcomeTemplate({name}: Props) {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body>
        <Container>
          <Text>Yahallo, {name}!</Text>
          <Link href='https://game-hub-jet-eight.vercel.app/'>Game Hub</Link>
        </Container>
      </Body>
    </Html>
  );
}

export default WelcomeTemplate;