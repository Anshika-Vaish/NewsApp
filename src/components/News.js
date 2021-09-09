import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: "in",
        pagesize: 7,
        category: "general",
    };
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    };
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    articles = [];
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResults: 0,
        };
        document.title = `${this.capitalizeFirstLetter(
            this.props.category
        )} - DailyNews`;
    }
    async update() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({ loading: true });

        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            articles: parseddata.articles,
            totalResults: parseddata.totalResults,
            loading: false,
        });
    }
    async componentDidMount() {
        this.update();
    }

    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
            }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1
            }&pageSize=${this.props.pagesize}`;

        this.setState({
            page: this.state.page + 1,
        });
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseddata.articles),
            totalResults: parseddata.totalResults,
            loading: false,
        });
    };

    render() {
        return (
            <>
                <h1
                    className="text-center"
                    style={{ margin: "35px 0px", marginTop: "90px" }}
                >
                    DailyNews - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
                    Headlines{" "}
                </h1>

                {this.state.loading && <Spinner />}
                {/* {this.state.articles.map((e)=>{console.log(e)})} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((e) => {
                                return (
                                    <div className="col-md-4" key={e.url}>
                                        <Newsitem
                                            title={e.title}
                                            description={e.description}
                                            URL={e.urlToImage}
                                            newsurl={e.url}
                                            author={e.author}
                                            date={e.publishedAt}
                                            source={e.source.name}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;
