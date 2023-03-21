import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';
import { z } from 'zod';
import styles from './Header.module.scss';

const headerPropsSchema = z.object({
  appName: z.string(),
});

type HeaderProps = z.infer<typeof headerPropsSchema>;

const Header: FC<HeaderProps> = (props) => {
  const { appName } = props;
  return (
    <Box>
      <AppBar>
        <Toolbar className={styles.container}>
          <Typography
            variant='h1'
            component='h1'
            className={styles['app-name']}
          >
            {appName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
