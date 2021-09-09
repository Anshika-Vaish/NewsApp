import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let { title, description, URL, newsurl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
            <span className=" badge rounded-pill bg-danger" >{source}</span>
          </div>
          <img src={URL ? URL : "https://cbc.iclei.org/wp-content/uploads/2016/10/news2.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small> </p>
            <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>)
  }
}

export default Newsitem
