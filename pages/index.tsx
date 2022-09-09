import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" color={red[100]}>
          Welcome
        </Typography>
        <Typography variant="h1">to sports!</Typography>
      </Box>
    </div>
  );
};

export default Home;
