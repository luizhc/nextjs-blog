import Head from 'next/head'
import Layout, { siteTitle } from './components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m <strong>Luiz</strong>. I’m a software developer and musician in his spare time. You can contact me on <a target="_new" href="https://linkedin.com/in/luizhc/">LinkedIn</a>.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}