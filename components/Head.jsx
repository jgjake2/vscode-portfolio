import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Eric Gardner is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="eric gardner, eric, gardner, web developer portfolio, eric web developer, eric developer, eric portfolio, portfolio"
      />
      <meta property="og:title" content="Eric Gardner's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building secure websites that you'd like to use."
      />
      <meta property="og:image" content="https://jgjake2.com/sitethumb.png" />
      <meta property="og:url" content="https://jgjake2.com/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Eric Gardner',
};
