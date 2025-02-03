"use client";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import CustomLink from "./CustomLink";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Container = styled.nav`
  /* background-color: rgb(7,7,67); */
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    gap: 2em;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .menu {
    display: block;
    width: 100px;
    position: relative;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const MenuContainer = styled.div`
  width: 50dvw;
  position: absolute;
  right: 0;
  top: 100px;
  height: calc(100vh - 100px);
  background-color: rebeccapurple;
`;

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "blog",
      path: "/blog",
    },
    // {
    //   title: "admin",
    //   path: "/admin",
    // },
    // {
    //   title: "login",
    //   path: "/login",
    // },
  ];

  const pathName = usePathname();
  const session = true;
  const isAdmin = true;

  return (
    <>
      <Container>
        <Link href="/" className="logo">Logo</Link>

        <ul>
          {links.map((ele) => (
            <CustomLink key={ele.title} pathName={pathName} item={ele} />
          ))}
          {session ? (
            <>
              {isAdmin && (
                <CustomLink item={{ path: "/admin", title: "admin" }} pathName={pathName}/>
              )}
              <button>logout</button>
            </>
          ) : (
            <CustomLink item={{ path: "/login", title: "login" }} />
          )}
        </ul>

        <div className="menu" onClick={() => setOpen((ele) => !ele)}>
          <Image src="/menu.png" alt="" fill/>
        </div>
      </Container>

      {open && (
        <MenuContainer>
          {links.map((ele) => (
            <CustomLink key={ele.title} pathName={pathName} item={ele} />
          ))}
        </MenuContainer>
      )}
    </>
  );
}
