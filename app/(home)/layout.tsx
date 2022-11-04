import FootNav from "../components/foot-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FootNav />
    </>
  )
}