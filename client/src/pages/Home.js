import React from 'react';

function Home() {
    return (
        <main>
            <section className="container">
                <h1 className="center-align">Electro-City</h1>
                <form className="container">
                    <div className="row">
                        <div className="col s12">
                            <input type='text' name="search-term" />
                        </div>
                    </div>
                    <div className="row center">
                        <div className="col s12">
                            <button className="waves-effect waves-light btn-large">Search</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Home;