import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Index page</h1>

        <ul>
          <li>
            <Link href="/profile">/profile link redirect to /account</Link>
          </li>
          <li>
            <Link href="/account">/account link</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
