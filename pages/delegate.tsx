import type { NextPage } from "next";
import Head from "next/head";

const Delegate: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cross Chain Voting: Delegate</title>
      </Head>
      <div className="flex flex-col justify-center align-center items-center content-center h-full">
        <div>you are delegating 👍</div>
      </div>
    </>
  );
};

export default Delegate;
