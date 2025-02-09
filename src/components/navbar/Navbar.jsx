"use client";
import { usePathname } from "next/navigation";
import sty from "./navbar.module.css";
import CustomLink from "./CustomLink";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div className={sty.container}>
        <Link href="/" className={sty.logo}>
          Logo
        </Link>

        <ul>
          {links.map((ele) => (
            <CustomLink key={ele.title} pathName={pathName} item={ele} />
          ))}
          {session ? (
            <>
              {isAdmin && (
                <CustomLink
                  item={{ path: "/admin", title: "admin" }}
                  pathName={pathName}
                />
              )}
              <button>logout</button>
            </>
          ) : (
            <CustomLink item={{ path: "/login", title: "login" }} />
          )}
        </ul>

        <Image
          src="/menu.png"
          alt=""
          width={30}
          height={30}
          className={sty.menu}
          onClick={() => setOpen((ele) => !ele)}
        />
      </div>

      {open && (
        <div className={sty.menuContainer}>
          {links.map((ele) => (
            <CustomLink key={ele.title} pathName={pathName} item={ele} />
          ))}
        </div>
      )}
    </>
  );
}
