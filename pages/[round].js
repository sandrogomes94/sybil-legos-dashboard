// MODULES
import clientPromise from "../lib/mongodb";

// COMPONENTS
import Content from "./components/content";
import Header from "./components/header";

export default function Round(props){

  return(
    <>
      <div className="app-container">
        <Header />
        <Content applications={props.applications} stats={props.stats} round={props.round}/>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { round } = context.query;

  const client = await clientPromise;
  const db = client.db("gitcoin_rounds");

  let stats = await db.collection(`${round}_stats`).find({}).toArray();
  stats = JSON.parse(JSON.stringify(stats));

  let applications = await db.collection(`${round}_applications`).find({}).toArray();
  applications = JSON.parse(JSON.stringify(applications));

  return {
    props: { applications, stats, round },
  };
}
