import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'

export class News extends Component {
   static defaultProps = { 
      country: 'us',
      pageSize: 8,
      category: 'general'
   }

   static propTypes = { 
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
   }

   constructor(props) {
      super(props);
      console.log("Hello I am a Consructor");
      this.state = {
         articles: [],
         loading: false,
         page: 1,
         totalResults: 0
      };
      document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`;
   }

   async updatenews() {
      console.log("cdm");
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=547fc8d08ac54967a5f41115b8c7f305&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(data);
      this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults });
   }

   async componentDidMount() {
      console.log("cdm");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=547fc8d08ac54967a5f41115b8c7f305&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(data);
      this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults });
   }

   handlenextclick = async () => {
      await this.setState({ page: this.state.page + 1 });
      this.updatenews();
   }

   handlepreviousclick = async () => {
      await this.setState({ page: this.state.page - 1 });
      this.updatenews();
   }

   render() {
      console.log("render");
      return (
         <div className="container my-3">
            <h1 className="text-center">NewsMonkey - Top {this.props.category} Headlines  </h1>

            <div className="row">
               {this.state.articles.map((element) => {
                  return <div className="col-md-4" key={element.url}>
                     {" "}
                     <Newsitem
                        title={element.title ? element.title.slice(0, 45) : " "}
                        description={element.description ? element.description.slice(0, 67) : " "}
                        imageurl={element.urlToImage ? element.urlToImage : "https://via.placeholder.com/150"} // ✅ fallback image
                        newsurl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                     />
                  </div>
               })}
            </div>
            <div className="container d-flex justify-content-between my-1">
               <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepreviousclick}>&larr; Previous</button>
               <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>&rarr; Next</button>
            </div>
         </div>
      );
   }
}

export default News;

// larr ---> left arrow html 
// rarr---> right arrow html -------- -------do not change comments or anything but correct it as 
