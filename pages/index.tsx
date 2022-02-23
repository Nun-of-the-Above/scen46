import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const GROUPS_TOLLKIT = [
  {
    name: "Revet Scenkonst",
    website: "https://www.revetscenkonst.se/",
  },
  {
    name: "Smuts",
    website: "https://www.facebook.com/teater.smuts/",
  },
  {
    name: "Rymdstationen",
    website: "https://www.rymdstationen.com/",
  },
  {
    name: "Kiriaka",
    website: "https://kiriaka.se/",
  },
  {
    name: "Slip of the Lip",
    website: "https://www.slipofthelip.se/",
  },
  {
    name: "Quizadillas",
    website: "https://quizadillas.se/",
  },
];

const Home: NextPage = () => {
  return (
    <div className="px-8">
      <Head>
        <title>SCEN46</title>
        <meta
          name="description"
          content="Hemsida för teaterkollektivet Scen46 i Göteborg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen px-0 py-16">
        <h1 className="m-0 text-6xl font-bold">SCEN46</h1>

        <p className="my-16 text-xl text-center">
          SCEN46 är ett teaterkollektiv i Göteborg där ett flertal frigrupper
          bedriver verksamhet.
        </p>

        <div className="grid max-w-screen-md grid-cols-3">
          {GROUPS_TOLLKIT.map((group) => (
            <a
              href={group.website}
              key={group.name}
              className="p-6 m-4 text-xl text-left text-center border rounded-xl"
              target="_blank"
              rel="noreferrer"
            >
              {group.name}
            </a>
          ))}
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
