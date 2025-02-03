"use client";

import Link from "next/link";
import styled from "styled-components";
import css from "styled-jsx/css";

const LiLink = styled.li`
  text-transform: capitalize;

  ${(prop) =>
    prop.active === "true" &&
    css`
      background-color: #fff;
      transition: background-color 0.7s ease;
      color: #28282b;
      border-radius: 50px;
    `}
  padding: .5em 1em;
`;

export default function CustomLink({ item, pathName }) {
  const { title, path } = item;
  return (
    <LiLink active={pathName === path ? "true" : "false"}>
      <Link href={path}>{title}</Link>
    </LiLink>
  );
}
