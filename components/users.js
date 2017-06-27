import React from 'react'
import glamorous from 'glamorous'
import {withContent} from './locale'
import {Button} from './styled-links'
import users from './content/glamorous-users'

const Container = glamorous.div({
  textAlign: 'center',
})

const Paragraph = glamorous.p({
  marginBottom: 0,
})

const Img = glamorous.img({
  maxHeight: '100%',
  maxWidth: '100%',
  verticalAlign: 'middle',
})

function Users({content}) {
  return (
    <Container>
      <h5>{content.header}</h5>
      <div>
        {users
          .filter(
            u =>
              u.name === 'PayPal' ||
              u.name === 'PlayUp' ||
              u.name === 'Resto’N Go',
          )
          .map(u =>
            (<a key={u.name} href={u.link}>
              <Img src={`./static/images/users/${u.logo}`} alt={u.name} />
            </a>),
          )}
      </div>
      <Paragraph>{content.paragraph}</Paragraph>
      <Button
        href="https://github.com/paypal/glamorous/blob/master/other/USERS.md"
        secondary
      >
        {content.button}
      </Button>
    </Container>
  )
}

export default withContent({component: 'users'}, Users)
