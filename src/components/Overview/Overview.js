import React from 'react';
import './overview.css';

const Overview = () => {
    return ( 
       <section id="overview" className="content">
        <div className="buttons">
            <a href="#">Overview</a>
            <a href="#">Repositories</a>
            <a href="#">Stars</a>
            <a href="#">Folowers</a>
            <a href="#">Following</a>
        </div>
        <hr />
        <div className="repos">
            <p>Pinned repositories</p>
            <p>Customize your pinned repositories</p>
                <div className="repo">
                <svg class="octicon octicon-grabber" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"></path></svg>
                <a href="#">Repo - 1</a>
                <br />
                <p>Repo Description</p>
                <span className="circle"></span>
                <span className="language">Language</span>
                </div>
                <div className="repo">
                <svg class="octicon octicon-grabber" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"></path></svg>
                <a href="#">Repo - 1</a>
                <br />
                <p>Repo Description</p>
                <span className="circle"></span>
                <span className="language">Language</span>
                </div>
                <div className="repo">
                <svg class="octicon octicon-grabber" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"></path></svg>
                <a href="#">Repo - 1</a>
                <br />
                <p>Repo Description</p>
                <span className="circle"></span>
                <span className="language">Language</span>
                </div>
        
        </div>
        <p id="contribute"></p>
       </section>
     );
}
 
export default Overview;