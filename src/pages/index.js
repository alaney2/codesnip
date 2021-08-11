import Head from 'next/head'
import HeroNavbar from '../components/HeroNavbar';

export default function Home() {
  return <div className="bg">

    <Head>
      <title>CodeSnip</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.svg" />
    </Head>

    <HeroNavbar />

    <main className="text-center space-y-40 flex-col">
      <h1 className="hero">Demo here</h1>
      {/* <h1 className="text-2xl my-8">
        Coding done right.
      </h1> */}
      <h2>A coding environment for your students.</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia dolores est nisi sapiente perferendis rem reiciendis aliquam tenetur a veritatis eaque velit, ratione nobis assumenda quisquam dicta placeat maxime..</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia dolores est nisi sapiente perferendis rem reiciendis aliquam tenetur a veritatis eaque velit, ratione nobis assumenda quisquam dicta placeat maxime..</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia dolores est nisi sapiente perferendis rem reiciendis aliquam tenetur a veritatis eaque velit, ratione nobis assumenda quisquam dicta placeat maxime..</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia dolores est nisi sapiente perferendis rem reiciendis aliquam tenetur a veritatis eaque velit, ratione nobis assumenda quisquam dicta placeat maxime..</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia dolores est nisi sapiente perferendis rem reiciendis aliquam tenetur a veritatis eaque velit, ratione nobis assumenda quisquam dicta placeat maxime..</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia dolores est nisi sapiente perferendis rem reiciendis aliquam tenetur a veritatis eaque velit, ratione nobis assumenda quisquam dicta placeat maxime..</p>

    </main>

  </div>;
}
