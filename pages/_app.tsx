import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { ChakraProvider, DarkMode, Box, BoxProps } from "@chakra-ui/react";
import Head from "next/head";

import { theme } from "../theme";
import { PageWrapper } from "../components/page-wrapper";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const MotionBox = motion.custom<BoxProps>(Box);

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Head>
        <title>Garden IoT</title>
        <meta name={"description"} content={"Garden IoT"} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <DarkMode>
        <PageWrapper>
          <Header />
          <AnimatePresence initial={false} exitBeforeEnter>
            <MotionBox
              as="main"
              animate="enter"
              exit="exit"
              flexGrow={1}
              initial="initial"
              key={router.route}
              variants={{
                initial: { opacity: 0, y: -50 },
                enter: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 50 },
              }}
            >
              <Component {...pageProps} />
              <Footer />
            </MotionBox>
          </AnimatePresence>
        </PageWrapper>
      </DarkMode>
    </ChakraProvider>
  );
};

export default App;
