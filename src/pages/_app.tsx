/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout';
import WordProvider from '@/features/word/components/WordProvider/WordProvider';
import { trpc } from '@/utils/trpc';

const App = ({ Component, pageProps }: AppProps) => (
  <WordProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </WordProvider>
);

export default trpc.withTRPC(App);
