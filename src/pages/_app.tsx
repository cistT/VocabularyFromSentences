/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { trpc } from '@/utils/trpc';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default trpc.withTRPC(App);
