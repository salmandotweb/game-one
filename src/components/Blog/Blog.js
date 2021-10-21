import React from "react";
// import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Data from "../../fetch.json";
import "./Blog.css";

export default function Blog() {
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 150) + "..." : str;
  };

  // const [users, setUsers] = useState([]);

  // const getData = async () => {
  //   const fetchData = await fetch(
  //     "https://newsapi.org/v2/everything?q=gambling&apiKey=0dc5d0dced194f388fa34cd7f8966d91"
  //   );

  //   const response = await fetchData.json();
  //   const data = response.articles;
  //   setUsers(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="blog-site">
      <Banner title="Blog" classN="blogs-banner" />
      <main className="container">
        <div className="row mb-2">
          {Data.map((curr) => {
            return (
              <div class="col-md-6 blog-card" key={curr.url}>
                <img src={curr.urlToImage} class="card-img-top" alt="..." />
                <div class="card-body blog-card-body">
                  <h5 class="card-title">{curr.title}</h5>
                  <p class="card-text">{truncate(curr.description)}</p>
                  {/* eslint-disable-next-line */}
                  <a href={curr.url} target="_blank" class="btn linkBtn">
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
