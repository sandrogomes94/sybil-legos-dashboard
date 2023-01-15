// MODULES
import { useState, useEffect } from "react";

// COMPONENTS
import Content from "../components/content";
import Header from "../components/header";

function Round(props) {

  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState()
  const [applications, setApplications] = useState()
  const [round, setRound] = useState()

  useEffect(() => {
    setStats(props.stats.stats);
    setApplications(props.applications.applications)
    setRound(props.round);
    setLoading(false);
  }, []);

  if (loading) return <></>;

  return(
    <>
      <div className="app-container">
        <Header />
        <Content stats={stats} applications={applications} round={round} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { round } = context.query;
  console.log(round)
  let stats = await fetch(`${process.env.API_ENDPOINT}/api/stats/${round}`)
  stats = await stats.json()
  console.log(stats)
  let applications = await fetch(`${process.env.API_ENDPOINT}/api/applications/${round}`)
  applications = await applications.json()

  return {
    props: { stats, applications, round },
  }
}

export default Round;