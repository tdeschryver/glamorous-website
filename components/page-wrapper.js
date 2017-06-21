import glamorous from 'glamorous'

const PageWrapper = glamorous.div((props, {colors}) => ({
  backgroundColor: colors.white,
  width: '100%',
  padding: '1rem',
  '& > h3': {
    width: '100%',
    margin: '20px auto',
    maxWidth: '50rem',
  },
  '& svg': {
    fill: `${colors.primary}`,
    width: '1rem',
  },
}))

export default PageWrapper
