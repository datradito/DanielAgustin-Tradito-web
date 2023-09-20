import Image from "next/image";
import styles from "./page.module.css";
import "@radix-ui/themes/styles.css";
import { Box, Container } from "@radix-ui/themes";
import Home from "./components/Home";

export default function HomePage() {
  return (
    <Box
      style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}
    >
      <Container size="1">
        <Home />
      </Container>
    </Box>
  );
}
