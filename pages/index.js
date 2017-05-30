import React from 'react'
import glamorous from 'glamorous'
import Logo from '../components/glamorous-logo'
import {Button} from '../components/styled-links'
import Layout from '../components/layout'
import CodePreview from '../components/code-preview'

const {Div} = glamorous

const Title = glamorous.h1((props, {colors}) => ({
  margin: '1em 0',
  color: colors.primaryMed,
  fontWeight: 'normal',
  fontSize: '1em',
}))

const CodePreviewWrapper = glamorous.div((props, {colors}) => ({
  position: 'relative',
  padding: '1em',
  background: 'transparent',
  '::after': {
    content: '""',
    top: '8em',
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    background: colors.primaryMed,
    zIndex: -1,
  },
}))

const UsersHeading = glamorous.div((props, {colors}) => ({
  textTransform: 'uppercase',
  color: colors.white,
  fontSize: '0.8rem',
  fontWeight: '600',
  margin: '2.5rem 0 0.5rem',
  opacity: 0.8,
  textAlign: 'center',
}))

const CodeBlock = glamorous.div((props, {colors, fonts}) => ({
  background: colors.code,
  borderRadius: 5,
  fontFamily: fonts.monospace,
  color: colors.lightGray,
  padding: '15px 0',
  maxWidth: 650,
  width: '100%',
  textAlign: 'center',
  margin: '0 auto',
  marginTop: 40,
}))

const Home = ({url}) => {
  return (
    <Layout pathname={url ? url.pathname : ''}>
      <Div margin={20}>
        <Div margin="0 auto" maxWidth={800} textAlign="center">
          <Logo margin="0 auto" />
          <Title>
            Maintainable CSS with React
          </Title>
          <Button href="https://github.com/paypal/glamorous">
            GitHub
          </Button>
          <Button secondary href="http://kcd.im/glamorous-help">
            Try It
          </Button>
        </Div>
      </Div>
      <CodePreviewWrapper>
        <CodePreview />
        <CodeBlock>
          npm install --save glamorous react glamor prop-types
        </CodeBlock>
        <UsersHeading>Used by peeps at</UsersHeading>
      </CodePreviewWrapper>
    </Layout>
  )
}

export default Home
