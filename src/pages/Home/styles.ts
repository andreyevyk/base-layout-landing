import { Card } from 'components/Card';
import { styled, theme } from 'css/stitches.config';

export const Wrapper = styled('div', {
  padding: '0 160px',
  display: 'flex',
  alignItems: 'center',
  height: 'calc(100% - 87px)',

  overflow: 'hidden',
});
export const Main = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '32%',
  marginRight: 150,

  '& h1': {
    color: theme.colors.title,
    fontWeight: '600',
    fontSize: 80,
    lineHeight: '73px',
    fontFamily: theme.fonts.secondary,
  },
  '& span': {
    color: theme.colors.text,
    fontSize: '20px',
    lineHeight: '30px',

    margin: '45px 0',
  },
});
export const Places = styled('div', {
  display: 'grid',
  gap: 32,
  gridTemplateColumns: 'repeat(2, 1fr)',

  height: '100%',

  [`& ${Card}:nth-of-type(even)`]: {
    position: 'relative',
    top: '76px',
  },
});
