import BillingNav from "../billing/components/BillingNav"

interface MainLayoutProps {
    children: React.ReactNode
}


const MainLayout = ({children}:MainLayoutProps) => {
  return (
    <>
        {/* <BillingView /> */}
        <BillingNav />
        <main>
            {children}
        </main>
    </>
  )
}

export default MainLayout