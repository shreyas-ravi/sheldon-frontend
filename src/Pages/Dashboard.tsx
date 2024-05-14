
import { useEffect, useState } from "react";
import "../Styles/dashboard.css";

function Dashboard() {
  
  const [member_id, setMember_id] = useState("");

  useEffect(() => {
    
    const storedMemberId = sessionStorage.getItem('member_id');
    if (storedMemberId) {
      setMember_id(storedMemberId);
    }
  }, []);
  
  const topicList = [
    "Machine Learning",
    "Geopolitics",
    "SpaceX",
    "F1",
    "Indian Politics",
    "Premiere League",
    "Psychology",
    "Technology",
    "Gaming",
    "Anime",
    "US Politics",
    "Israel / Palestine",
  ];

  /*const topicSummaries = [
    {
      Topic: "Machine Learning",
      Title:
        "Women with heart disease underdiagnosed by machine learning models",
      Summary: `
        - Researchers find that machine learning models used to predict heart disease risk often underestimate the risk for women.
        - Traditional risk assessment tools, like the Framingham Risk Score, are based on data primarily from men, leading to inaccuracies in assessing heart disease risk in women.
        - Study analyzed data from over 400,000 patients from the UK Biobank.
        - Machine learning models trained on this data showed significant gender disparities in risk prediction.
        - Models tended to underestimate heart disease risk in women, particularly younger women.
        - One possible reason for the underestimation is the difference in the way heart disease manifests in women compared to men.
        - Researchers emphasize the importance of improving risk assessment tools to accurately predict heart disease risk in women.
        - Addressing these gender disparities can lead to more effective prevention and treatment strategies for heart disease in women.
      `,
      Date: "4/22/2024",
    },
    {
      Topic: "Geopolitics",
      Title: "New Model 3",
      Summary: `
        - Summary for Geopolitics article goes here.
        - Point 1.
        - Point 2.
        - Point 3.
      `,
      Date: "4/22/2024",
    },
    {
      Topic: "Machine Learning",
      Title: "New Model 3",
      Summary: `
        - Summary for another Machine Learning article goes here.
        - Point 1.
        - Point 2.
        - Point 3.
      `,
      Date: "4/22/2024",
    },
  ];*/

  return (
    (member_id === "") ? <div>Please login first to use dashboard </div> : (
    <div id="dashboard-wrapper" className="bg-slate-50">
      <header id="header" className="text-3xl p-4 font-semibold tracking-tight">
        See today's highlights {member_id}
      </header>
      <main id="main">
        <section id="topic-section">
          <div id="topic-list" className="border rounded-xl p-8 bg-white">
            {topicList.map((topic) => (
              <div
                className="topic text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 rounded-md px-2 text-center hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
                key={topic}
              >
                {topic}
              </div>
            ))}
          </div>
          <div id="add-topics" className="rounded-xl border p-8 bg-white">
            <div>Current Sources Include: </div>
            <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
              <li>Reddit</li>
              <li>YouTube</li>
              <li>News Sites such as The New York Times...</li>
              <li>
                Magazines such as The Economist, The Verge, Wall Street
                Journal...
              </li>
              <li>General Internet Articles</li>
            </ul>
            <input
              className="mt-6 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              id="add-topics-input"
              type="text"
              placeholder="Add a topic"
            />
            <button className="mt-4 text-white bg-blue-500 p-2 hover:bg-blue-400 rounded-xl mt-4">
              Add Topic
            </button>
          </div>
        </section>
        <section
          id="content-section"
          className="border rounded-xl p-8 bg-white"
        >
         
            <div className="py-4" >
              <div id="title-date-box">
                <div className="text-xl">Machine Learning</div>
              </div>
              <div className=" text-md py-2 font-semibold">Women with heart disease underdiagnosed by machine learning models</div>
              <ul className="text-gray-900 p-4" style={{ listStyle: "disc" }}>
                <li>
                  Researchers find that machine learning models used to predict
                  heart disease risk often underestimate the risk for women.
                </li>
                <li>
                  Traditional risk assessment tools, like the Framingham Risk
                  Score, are based on data primarily from men, leading to
                  inaccuracies in assessing heart disease risk in women.
                </li>
                <li>
                  Study analyzed data from over 400,000 patients from the UK
                  Biobank.
                </li>
                <li>
                  Machine learning models trained on this data showed
                  significant gender disparities in risk prediction.
                </li>
                <li>
                  Models tended to underestimate heart disease risk in women,
                  particularly younger women.
                </li>
                <li>
                  One possible reason for the underestimation is the difference
                  in the way heart disease manifests in women compared to men.
                </li>
                <li>
                  Researchers emphasize the importance of improving risk
                  assessment tools to accurately predict heart disease risk in
                  women.
                </li>
                <li>
                  Addressing these gender disparities can lead to more effective
                  prevention and treatment strategies for heart disease in
                  women.
                </li>
              </ul>
            </div>
          
        </section>
      </main>
      <div>{member_id}</div>
    </div>
  )
)
}

export default Dashboard;
