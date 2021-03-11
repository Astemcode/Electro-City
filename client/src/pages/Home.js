import React from 'react';

function Home() {
    return (
        <main>
            <section className="container">
                <h1 id="logo" className="center-align">Welcome to Electro-City</h1>
                <h4 className="center-align">What are you looking for?</h4>
                <form className="container">
                    <div className="row">
                        <div className="col s12">
                            <input type='text' name="search-term" />
                        </div>
                    </div>
                    <div className="row center">
                        <div className="col s12">
                            <button className="waves-effect waves-light btn-large">Search</button>
                            <button className="waves-effect waves-light btn-large">Post Item</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Home;