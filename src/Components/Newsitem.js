import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    /* from this.props gather title and description */
    let { title, description, imageurl, newsurl, author, date } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              imageurl
                ? imageurl
                : "https://www.tagesspiegel.de/images/13812610/alternates/BASE_16_9_W1400/1749187888000/polizeieinsatz-nach-einbruch-in-einkaufszentrum.jpeg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title ? title.slice(0, 45) : " "}...
            </h5>
            <p className="card-text">
              {description ? description.slice(0, 67) : " "}...
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {date ? new Date(date).toGMTString() : "Unknown date"}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More...
            </a>
            {/* // here newsurl is javascript object */}
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
