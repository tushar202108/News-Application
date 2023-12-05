import React from "react";

const NewsIteam = (props)=> {

    let { title, description , imageUrl,newsUrl,date} = props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1192&q=80":imageUrl} className="card-img-top" alt="/" />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}....</p>
            <p className="card-text"><small className="text-body-secondary">On {new Date(date).toDateString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-danger">Read More </a>
          </div>
        </div>
      </div>
    );
}
export default NewsIteam;