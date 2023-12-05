import React,{useEffect,useState} from "react";
import NewsIteam from "./NewsIteam";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



 const Update = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&category=${props.category}&apikey=${props.apikey}&page=1&pageSize=15`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
 }
  useEffect(()=>{
    document.title = `${capitalizeFirstLetter(props.category )}- E-News`;
    Update();
  },[])


    // Previous page 
  // prevpage = async () => {
  //   console.log("prev");

  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${props.category}&category=${
  //     props.category
  //   }&category=${
  //     props.category
  //   }&apikey=fef6b7533bed47869b30131f0efcf86e&page=${
  //     this.state.page - 1
  //   }&pageSize=15`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   console.log(parsedata);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedata.articles,
  //     loading: false,
  //   });
  // };

  // nextpage = async () => {
  //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 15))) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       props.country
  //     }&category=${props.category}&category=${
  //       props.category
  //     }&category=${
  //       props.category
  //     }&apikey=fef6b7533bed47869b30131f0efcf86e&page=${
  //       this.state.page + 1
  //     }&pageSize=15`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedata = await data.json();
  //     console.log(parsedata);
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedata.articles,
  //       loading: false,
  //     });
  //   }
  // };

  const fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&category=${props.category}&apikey=${props.apikey}&page=${page+1}&pageSize=5`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles))
    setTotalResults( parsedata.totalResults)
  };
      return (
        <>
      <div className="container">
        <h2 style={{ margin: "35px 5px",marginTop:'60px' }}>
          {capitalizeFirstLetter(props.category)} News - Top Headlines{" "}
        </h2>
         {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsIteam
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={element.description? element.description.slice(0, 90): ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}/>
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
      </>
    )
  }

News.defaultProps = {
  country: "in",
  category: "health",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News