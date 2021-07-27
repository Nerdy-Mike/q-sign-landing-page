/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui';
import NextLink from 'next/link';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <MenuLink></MenuLink>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path} >{children || label}</A>
  );
}


//rest can be removed