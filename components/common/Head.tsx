import Head from "next/head";

export function HeadTag() {
  return (
    <Head>
        <title>Savoir Faire | hims</title>
        <meta name='description' content='Savoir Faire' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css'
        />
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
    </Head>
  );
}
