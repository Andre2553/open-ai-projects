import Link from "next/link";
import { HeaderContainer, NavContainer } from "../styles/components/header";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <h1>OpenAI Projects</h1>
      </HeaderContainer>
      <NavContainer>
        <Link href="/">Home</Link>
        <Link href="/summarize">Summarize</Link>
        <Link href="/img-generation">Image Generation</Link>
      </NavContainer>
    </>
  );
}
