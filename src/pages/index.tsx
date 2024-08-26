import Head from "next/head";
import { Inter } from "next/font/google";
import { Box, Grid, Stack, Text } from "@mantine/core";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Leo Alex Thomas Portfolio</title>
        <meta name="description" content="Leo alex thomas portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box h="100%" ff="Roboto" maw={1600} mx="auto" p={10}>
        <Grid>
          <Grid.Col>
            <Stack>
              <Text>Leo Alex Thomas</Text>
              <Text>Frontend Developer</Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
