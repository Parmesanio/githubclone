import React from 'react';
import './header.css';

const Header = () => {
    return ( 
        <header className="App-header">
        <div className="content">
          <div className="logo"><svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></div>
          <input type="text" placeholder="Search or jump to..." />
          {/* Img next to input w/ rounded border */}
          <span className="nextTo"><img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="dnjvek" /></span>
          <nav>
              <a href="#">Pull Requests</a>
              <a href="#">Issues</a>
              <a href="#">Marketplace</a>
              <a href="#">Explore</a>
            </nav>
            <svg class="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
            <span className="caret"></span>
            <img src="https://avatars2.githubusercontent.com/u/17994199?s=40&v=4" alt="lol" />
            <span className="caret"></span>
            </div>
        
        </header>
     );
}
 
export default Header;