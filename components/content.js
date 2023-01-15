import Round from "../pages/[round]";

export default function Content({ stats, applications, round }) {

  return (
    <>
      <div className="app-content">
        <div className="app-sidebar">
          <a href="" className="app-sidebar-link active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-home"
            >
            </svg>
            Farmer
          </a>
          <a href="" className="app-sidebar-link active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-home"
            >
            </svg>
            History
          </a>
          <a href="" className="app-sidebar-link active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-home"
            >
            </svg>
            Mixer
          </a>
          <a href="" className="app-sidebar-link active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-home"
            >
            </svg>
            Trend
          </a>
          <a href="" className="app-sidebar-link active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-home"
            >
            </svg>
            Flagged
          </a>
        </div>
        <div className="projects-section">
          <div className="projects-section-header">
            <p>{round.toUpperCase()} Round</p>
          </div>
          <div className="projects-section-line">
            <div className="projects-status">
              <div className="item-status">
                <span className="status-number">{stats.total_votes}</span>
                <span className="status-type">Total Donors</span>
              </div>
              <div className="item-status">
                <span className="status-number">{stats.unique_votes}</span>
                <span className="status-type">Unique Donors</span>
              </div>
              <div className="item-status">
                <span className="status-number">{stats.total_dai}</span>
                <span className="status-type">DAI Donated</span>
              </div>
              <div className="item-status">
                <span className="status-number">{stats.total_eth || stats.total_ftm}</span>
                <span className="status-type">{stats.total_eth ? "ETH" : "FTM"} Donated</span>
              </div>
            </div>
            <div className="view-actions">
              <button className="view-btn grid-view active" title="Grid View">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-grid"
                >
                  <rect x={3} y={3} width={7} height={7} />
                  <rect x={14} y={3} width={7} height={7} />
                  <rect x={14} y={14} width={7} height={7} />
                  <rect x={3} y={14} width={7} height={7} />
                </svg>
              </button>
            </div>
          </div>
          <div className="project-boxes jsGridView">
            {applications.map((application) => (
              <div className="project-box-wrapper">
                <div className="project-box">
                  <div className="project-box-content-header" key={application._id}>
                    <p className="box-content-header"><a href="">{application.title}</a></p>
                    <p className="box-content-subheader">{application.updated_at}</p>
                    <p className="box-content-subheader"><a href={application.website}>{application.website}</a></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
