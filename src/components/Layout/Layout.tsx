import { FC, ReactNode } from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.scss';
import { APP_NAME } from '@/const/app';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header appName={APP_NAME} />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
