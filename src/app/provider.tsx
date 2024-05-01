"use client";

import LoadingIcon from "@/components/loading-icon";
import ScrollToTopButton from "@/components/scroll-to-top";
import theme from "@/utils/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(delay);
  }, []);

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <AnimatePresence>
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <LoadingIcon />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
        {loading === false && <ScrollToTopButton />}
      </ChakraProvider>
    </CacheProvider>
  );
}
