import {h, render} from 'preact';
import {Router, Link} from 'preact-router';

import Home from './pages/home';
import Conference from './pages/conference';

function App() {
    return (
        <div>
            Hello world!
            <header>
                <Link href="/">Home</Link>
                <br />
                <Link href="/conference/amsterdam2019">Amsterdam 2019</Link>
           </header>

            <router>
                <Home path="/" />
                <Conference path="/conference/:slug" />
            </router>
        </div>
    )
}

render(<App />, document.getElementById('app'));