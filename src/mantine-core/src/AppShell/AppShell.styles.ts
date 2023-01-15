import {
  createStyles,
  MantineNumberSize,
  MantineTheme,
  CSSObject,
  getSize,
  getBreakpointValue,
  rem,
} from '@mantine/styles';

export interface AppShellStylesParams {
  padding: MantineNumberSize;
  fixed: boolean;
  navbarOffsetBreakpoint: MantineNumberSize;
  asideOffsetBreakpoint: MantineNumberSize;
}

function getPositionStyles(props: AppShellStylesParams, theme: MantineTheme): CSSObject {
  const padding = getSize({ size: props.padding, sizes: theme.spacing });

  const navbarOffset = props.navbarOffsetBreakpoint
    ? getSize({ size: props.navbarOffsetBreakpoint, sizes: theme.breakpoints })
    : null;

  const asideOffset = props.asideOffsetBreakpoint
    ? getSize({ size: props.asideOffsetBreakpoint, sizes: theme.breakpoints })
    : null;

  if (!props.fixed) {
    return { padding };
  }

  return {
    minHeight: '100vh',
    paddingTop: `calc(var(--mantine-header-height, 0) + ${padding})`,
    paddingBottom: `calc(var(--mantine-footer-height, 0) + ${padding})`,
    paddingLeft: `calc(var(--mantine-navbar-width, 0) + ${padding})`,
    paddingRight: `calc(var(--mantine-aside-width, 0) + ${padding})`,

    [`@media (max-width: ${rem(getBreakpointValue(navbarOffset) - 1)})`]: {
      paddingLeft: padding,
    },

    [`@media (max-width: ${rem(getBreakpointValue(asideOffset) - 1)})`]: {
      paddingRight: padding,
    },
  };
}

export default createStyles((theme, props: AppShellStylesParams) => ({
  root: {
    boxSizing: 'border-box',
  },

  body: {
    display: 'flex',
    boxSizing: 'border-box',
  },

  main: {
    flex: 1,
    width: '100vw',
    boxSizing: 'border-box',
    ...getPositionStyles(props, theme),
  },
}));
