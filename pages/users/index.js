import React from 'react'
import glamorous from 'glamorous'
import {withContent} from '../../components/locale'
import Layout from '../../components/layout'
import PageWrapper from '../../components/page-wrapper'
import Hero from '../../components/hero'
import {Section} from '../../components/page-sections'
import {Button} from '../../components/styled-links'
import interactiveMarkdown from '../../components/interactive-markdown'
import users from './content/users'

const UserContainer = glamorous.div({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
})

const User = glamorous(Button)((_, {mediaQueries}) => ({
  padding: '5px',
  height: '150px',
  marginTop: '10px',
  lineHeight: '150px',
  fontSize: '2em',
  textAlign: 'center',
  margin: 0,
  [mediaQueries.smallUp]: {
    width: '100%',
  },
  [mediaQueries.mediumUp]: {
    width: '49%',
  },
  [mediaQueries.largeUp]: {
    width: '33%',
  },
}))

const Img = glamorous.img({
  maxHeight: '100%',
  maxWidth: '100%',
  verticalAlign: 'middle',
})

const userContent = u => {
  if (u.logo) {
    return <Img src={`./static/images/users/${u.logo}`} />
  }

  return (
    <span>
      {u.name}
    </span>
  )
}

const user = u =>
  (<User href={u.link}>
    {userContent(u)}
  </User>)

function Users({url, content, locale}) {
  return (
    <Layout
      pathname={url ? url.pathname : ''}
      locale={locale}
      contributors={content.contributors}
    >
      <Hero>
        {content.title}
      </Hero>
      <PageWrapper>
        <h3>{interactiveMarkdown(content.heading)}</h3>
        <Section>
          <UserContainer>
            {users.map(user)}
          </UserContainer>
        </Section>
      </PageWrapper>
    </Layout>
  )
}

export default withContent({page: 'users'}, Users)
