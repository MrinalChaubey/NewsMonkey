import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
 
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
   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=547fc8d08ac54967a5f41115b8c7f305&page=${this.state.page}&pageSize=20`;
   let data = await fetch(url)
   let parsedata = await data.json();
   console.log(data) ; 
   this.setState({articles:parsedata.articles, totalResults: parsedata.totalResults})
}

handlenextclick = async()=>{
    console.log("next") ; 

    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else {

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=547fc8d08ac54967a5f41115b8c7f305&page=${this.state.page+1}&pageSize=20`;
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
   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=547fc8d08ac54967a5f41115b8c7f305&page=${this.state.page-1}&pageSize=20`;
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
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
        return <div className="col-md-4"  key = {element.url}>
            {" "}
            <Newsitem
           
              title={element.title ? element.title.slice(0,45) : " "}
              description={element.description ? element.description.slice(0,67) : " "}
              imageurl={element.urlToImage}
              newsurl={element.url}
            />
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between my-1" >
        <button  disabled = {this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepreviousclick}>&larr; Previous</button> 
        <button type="button" className="btn btn-dark" onClick={this.handlenextclick}>&rarr; Next</button>
        </div>
      </div>
    );
  }
}

export default News;

// larr ---> left arrow html 
// rarr---> right arrow html --------
