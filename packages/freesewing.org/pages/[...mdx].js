import { getMdxStaticProps, getMdxPaths } from '@/shared/content/mdx'
import AppWrapper from '@/shared/components/wrappers/app'
import MdxWrapper from '@/shared/components/wrappers/mdx'
import config from '@/site/freesewing.config'
import PrevNext from '@/shared/components/mdx/prevnext'
import Plugin from '@/site/components/mdx/plugin'
import Pattern from '@/site/components/mdx/pattern'

const MdxPage = (props) => {
  return (
    <AppWrapper {...props}>
      <article className="mdx prose lg:prose-lg mb-12">
        <MdxWrapper
          pages={props.pages}
          href={props.href}
          components={{Pattern, Plugin}}
          mdx={props.mdx}
        />
        <PrevNext pages={props.pages} href={props.href} />
      </article>
    </AppWrapper>
  );
};

export const getStaticProps = async (props) => {
  const mdx = await getMdxStaticProps(config.site, config.language, props.params.mdx.join('/'))

  return { props: { ...mdx } }
}

export const getStaticPaths = async () => {
  const paths = await getMdxPaths(config.site, config.language)

  const re = {
    paths: paths.map(mdx => ({ params: { mdx: mdx.split('/') } })),
    fallback: false,
  }

  return re
}

export default MdxPage
