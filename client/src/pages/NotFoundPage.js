import React from 'react';
import { Container, Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'underline',
  },
}));

export default function Page404() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth={'md'}>
      <Typography variant={'h1'} color={'primary'} gutterBottom>
        404 - 해당 페이지가 존재하지 않습니다.
      </Typography>
      <Link href={'/'}>
        <Typography variant={'h6'} color={'secondary'} className={classes.link}>
          홈페이지로 이동하기
        </Typography>
      </Link>
    </Container>
  );
}
