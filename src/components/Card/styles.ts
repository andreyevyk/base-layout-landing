import { styled } from '@stitches/react';
import { theme } from 'css/stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: theme.colors.shape,
  border: `1px solid ${theme.colors.shape02}`,

  borderRadius: 25,
  '& img': {
    borderRadius: '25px 25px 0 0',
    height: '70%',
    objectFit: 'cover',
  },
  '& main': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '30%',
    marginLeft: 25,
  },

  '& .title': {
    fontFamily: theme.fonts.secondary,
    fontWeight: 600,
    fontSize: 23,
    lineHeight: '23px',
    color: theme.colors.title,

    marginBottom: 7,
  },
  '& .description': {
    fontSize: 15,
    lineHeight: '25px',
    color: theme.colors.text,
  },
});
