import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
        <Head>
            <title>RealDeal</title>
        </Head>
        <Box maxWidth="1280" m="auto">
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
  )
}

export default Layout;