import React from 'react'
import glamorous, {Div} from 'glamorous'
import Hero from './hero'
import {withContent} from './locale'
import interactiveMarkdown from './interactive-markdown'
import ClickToRender from './click-to-render'
import CodeSandboxEmbed from './code-sandbox-embed'
import {Anchor} from './styled-links'
import PageWrapper from './page-wrapper'
import GitHubSVG from './svgs/github.svg'
import mdToHTML from './utils/md-to-html'

const repoEditRootURL =
  'https://github.com/kentcdodds/glamorous-website/edit/master'

const projectRoot = __dirname.slice(0, -'/components'.length)

const EditAnchorWrap = glamorous(Div)({
  display: 'flex',
  flexDirection: 'row-reverse',
})

export default PageSections

function PageSections({data}) {
  return (
    <Div>
      <Hero dangerouslySetInnerHTML={{__html: mdToHTML(data.title)}} />
      <PageWrapper>
        <h3>{interactiveMarkdown(data.heading)}</h3>
        {data.sections.map(section =>
          <DocSection key={section.title} {...section} />,
        )}
      </PageWrapper>
    </Div>
  )
}

export const Section = glamorous.section((p, {colors}) => ({
  borderBottom: `1px solid ${colors.primary}`,
  width: '100%',
  margin: '20px auto',
  paddingBottom: 20,
  maxWidth: '50rem',
}))

const DocSection = withContent(
  {component: 'page-sections'},
  function DocSection(props) {
    const {title, subtitle, filename, content} = props
    return (
      <Section>
        {filename &&
          <EditAnchorWrap>
            <Anchor
              external
              href={getEditHrf(filename)}
              css={{textDecoration: 'none', ':hover': {textDecoration: 'none'}}}
            >
              <GitHubSVG /> {content.edit}
            </Anchor>
          </EditAnchorWrap>}
        <h2 dangerouslySetInnerHTML={{__html: mdToHTML(title)}} />
        {subtitle ?
          <h4 dangerouslySetInnerHTML={{__html: mdToHTML(subtitle)}} /> :
          null}
        <DocSectionDetails {...props} />
      </Section>
    )
  },
)
function getEditHrf(filename) {
  // for some reason, __filename has a / on the server but not on the client...
  const slash = filename.indexOf('/') === 0 ? '' : '/'
  return `${repoEditRootURL}${slash}${filename.replace(projectRoot, '')}`
}

function DocSectionDetails({
  title,
  description,
  codeSandboxId,
  codeSandboxSummary = title,
}) {
  return (
    <div>
      {interactiveMarkdown(description)}
      {codeSandboxId ?
        <ClickToRender
          component={CodeSandboxEmbed}
          summary={codeSandboxSummary}
          props={{title: codeSandboxSummary, id: codeSandboxId}}
        /> :
        null}
    </div>
  )
}
