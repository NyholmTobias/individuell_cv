import React from "react"

const Repos = (props) => {
    return (
        <div className="col-12">
            <h2 className="text-center mb-3">GitHub Repos</h2>
            {props.myRepos.map((repo) => {
                return (
                <div className="col-xl-3 col-l-3 col-m-6 col-s-6 col-xs-6 text-center float-left mb-5">
                    <h5 key={repo.name}>{repo.name}</h5>
                    <p key={repo.description}>{repo.description}</p>
                    <a className="btn btn-primary mt-3" key={repo.html_url} href={repo.html_url}>Link to repository</a>
                </div>
                )
            })}
            {/* {props.orgsRepos.map((repo) => {
                return (
                <div className="col-xl-3 col-l-3 col-m-6 col-s-6 col-xs-6 text-center float-left mb-5">
                    <h5 key={repo.name}>{repo.name}</h5>
                    <p key={repo.description}>{repo.description}</p>
                    <a className="btn btn-primary mt-3" key={repo.html_url} href={repo.html_url}>Link to repository</a>
                </div>
                )
            })*/}
            
            <div className="col-xl-3 col-l-3 col-m-6 col-s-6 col-xs-6 text-center float-left mb-5">
                <h5>{props.eCommerceRepo.name}</h5>
                <p>{props.eCommerceRepo.description}</p>
                <a className="btn btn-primary mt-3" href={props.eCommerceRepo.html_url}>Link to repository</a>
            </div>
        </div>
    )
}

export default Repos