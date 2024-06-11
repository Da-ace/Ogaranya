import React from "react";
import "../styles/api.css";
import api from "/radius-1(1).png";
const Api = () => {
  return (
    <div>
      <div className="developer" id="develop">
        <div className="container site-developer">
          <p className="develop">Developers</p>
          <div className="developer-info">
            <h1>Built for developers, by developers</h1>
            <p>
              Why complicate things with registrations, passwords, and app
              downloads? With our platform, you can dive straight into the
              action. No need to sign up—just connect with your preferred
              text-based messaging service and explore a world of opportunities.
            </p>
          </div>

          <div className="developer-api">
            <div className="api-img">
              <img src={api} alt="" />
            </div>
            <div className="api-info">
              <h2>Powerful, flexible API + Webhooks</h2>
              <p>
                A full REST API that has predictable URLs and valid responses,
                uses standard codes, authentication, and verbs. Plus webhooks
                for asynchronous events. Voilà.
              </p>
              <button>Explore the API</button>
            </div>
          </div>

          <div className="developer-api develope">
            <div className="api-info">
              <h2>Documentation so good you’ll cry</h2>
              <p>
                We invest our time into fully abstracting our API so your team
                can focus on building a cohesive system. Integrate with Ogaranya
                in minutes, not months.
              </p>
              <button>Explore the API</button>
            </div>
            <div className="api-img">
              <img src={api} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;
