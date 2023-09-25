import type { NextPage } from "next";
import Head from "next/head";

const Vote: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cross Chain Voting: Stats</title>
      </Head>
      <div className="flex flex-col justify-center align-center items-center content-center h-full">
        <div>you are voting 👍</div>
      </div>
    </>
  );
};

export default Vote;
