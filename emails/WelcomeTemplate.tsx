import React, {CSSProperties} from 'react';
import {Html, Body, Container, Text, Link, Preview, Tailwind} from '@react-email/components'

interface Props {
  name: string
}

function WelcomeTemplate({name}: Props) {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        {/*<Body style={body}>*/}
        <Body className='bg-gray-100'>
          <Container>
            {/*<Text style={heading}>Yahallo, {name}!</Text>*/}
            <Text className='font-bold text-3xl'>Yahallo, {name}!</Text>
            <Link href='https://game-hub-jet-eight.vercel.app/'>Game Hub</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const body: CSSProperties = {
  background: '#ddd'
}

const heading: CSSProperties = {
  fontSize: 'xx-large'
}

export default WelcomeTemplate;