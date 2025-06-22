import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'

export class News extends Component {
   static defaultProps = { 
   country : 'us' ,
   pageSize : 8  , 
   category : 'general'   // ✅ fixed capitalization (was 'General')
   }
 
    static propTypes = { 
       country : PropTypes.string,
       pageSize : PropTypes.number,
       category : PropTypes.string
    }

  constructor() {
    super();
    console.log("Hello I am a Consructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }
  // Always use contructor with super() otherwise it will throw  error;

  // Componentdidmount runs after everthing in render is done and is a lifecycle method
  // async function can wait for some thing to resolve
 async componentDidMount(){
   console.log("cdm") ; 
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=547fc8d08ac54967a5f41115b8c7f305&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   let data = await fetch(url)
   let parsedata = await data.json();
   console.log(data) ; 
   this.setState({articles:parsedata.articles, totalResults: parsedata.totalResults})
}

handlenextclick = async()=>{
    console.log("next") ; 

    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=547fc8d08ac54967a5f41115b8c7f305&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    let parsedata = await data.json();
    console.log(data) ; 
    
     this.setState({
  page : this.state.page + 1 ,   
  articles:parsedata.articles  , 
  totalResults : parsedata.totalResults   
     })
    }

}

handlepreviousclick = async()=>{
   console.log("previous") ; 
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=547fc8d08ac54967a5f41115b8c7f305&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
   let data = await fetch(url)
   let parsedata = await data.json();
   console.log(data) ; 
   
    this.setState({
 page : this.state.page - 1 ,   
 articles:parsedata.articles    
    })
}

  render() {
    console.log("render") ; 
    return (
      <div className="container my-3">
       <h1 className="text-center">NewsMonkey - Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
        return <div className="col-md-4"  key = {element.url}>
            {" "}
            <Newsitem
           
              title={element.title ? element.title.slice(0,45) : " "}
              description={element.description ? element.description.slice(0,67) : " "}
              imageurl={element.urlToImage}
              newsurl={element.url}
              author = {element.author}
                data = {element.publishedAt}
            />
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between my-1" >
        <button  disabled = {this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepreviousclick}>&larr; Previous</button> 
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>&rarr; Next</button>
        </div>
      </div>
    );
  }
}

export default News;

// larr ---> left arrow html 
// rarr---> right arrow html -------- -------do not change comments or anything but correct it as news not showing --------
