import Link from "next/link";

import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  // if (context?.params?.slug?.includes("profile")) {
  //   return {
  //     redirect: {
  //       destination: "/account",
  //     },
  //   };
  // }

  return {
    props: {
      slug: context.params?.slug,
      someVariable: "someValue",
    },
    revalidate: 300,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default function Home(props: any) {
  const { slug } = props;
  console.log("props", props);

  return (
    <main>
      <h1>Account page</h1>
      <h2>{slug?.join("/") || "No props WTF?"}</h2>

      <ul>
        <li>
          <Link href="/">Index page</Link>
        </li>
        <li>
          <Link href="/profile">/profile link redirect to /account</Link>
        </li>
        <li>
          <Link href="/account">/account link</Link>
        </li>
      </ul>
    </main>
  );
}
