import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const groups = [
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
          Scen46 är en kollektiv scen i Göteborg där ett flertal olika
          scenkonstgrupper bedriver verksamhet.
        </p>

        <div className="grid max-w-screen-md sm:grid-cols-3 md:grid-cols-3">
          {groups.map((group) => (
            <a
              href={group.website}
              key={group.name}
              className="self-center p-4 m-4 text-xl tracking-wide text-center border rounded-xl whitespace-nowrap hover:bg-sky-400 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {group.name}
            </a>
          ))}
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d533.0553891114885!2d11.917454488183903!3d57.695705598814065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff35a3ff80173%3A0x6f1b673cd409f2b5!2sSCEN46!5e0!3m2!1sen!2sse!4v1645641811704!5m2!1sen!2sse"
          allowFullScreen={false}
          loading="lazy"
          className="w-full mt-10 h-72"
        />
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
