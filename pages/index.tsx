import type { NextPage } from "next";
import Head from "next/head";

import Image from "next/image";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styles from "../styles/Home.module.css";
import { ArticleService } from "./services";
import { IArticle } from "./services/article.service";
import HomeImage from "./../public/hims-blog-atf.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import logo from "./../public/logo.png";
import {
  faChevronDown,
  faArrowLeftRotate,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { Height } from "@mui/icons-material";
const Home: NextPage = () => {
  const [articleList, setArticleList] = useState<IArticle[]>([]);
  const [loadMore, setLoadMore] = useState(true);
  const [nextPage, setNextPage] = useState(1);

  const loadMoreFun = (pageNumber: number) => {
    const articleService = new ArticleService();
    articleService
      .fetchArticles({
        pagination: {
          page: pageNumber,
        },
      })
      .then((articleResponse) => {
        articleList.push(...articleResponse.data.retrievePageArticles);
        setArticleList(articleList);
        console.log(articleResponse.data.retrievePageArticles.length);
        if (articleResponse.data.retrievePageArticles.length === 30) {
          setNextPage(pageNumber + 1);
          setLoadMore(true);
        } else {
          setLoadMore(false);
        }
      })
      .catch(console.log);
  };

  const listItems = articleList.map((article) => (
    <div key={article.id} className="card mb-3 article-container border-0">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="pb-4">
            <div
              className={styles.cardImage}
              style={{
                backgroundImage: `url("https://cdn.buttercms.com/de6uJAc5RJGecOC4BJgz")`,
              }}
            ></div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body ms-5">
            <h5 className={"card-title font-weight-normal" + styles.titlecard}>
              {article.title}
            </h5>
            <p className="card-text">{article.text}</p>
            <a className={styles.cardLink} href={article.url}>
              Read This Article
            </a>
          </div>
        </div>
      </div>
      <div className={styles.borderContainer + " mt-4 mb-2"}></div>
    </div>
  ));

  return (
    <div className={styles.container + "container-fluid"}>
      <Head>
        <title>Savoir Faire | hims</title>
        <meta name="description" content="Savoir Faire" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
        />
        @import
        url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");
      </Head>
      <main className={styles.main}>
        <div className={styles.mainHims}>
          <h2>hims</h2>

          <div className={styles.hamburg}>
            <FontAwesomeIcon
              style={{ height: " auto", width: "16px" }}
              icon={faBars}
            />
          </div>
          <button className="button button4">
            WHAT WE TREAT &nbsp;
            <span className={styles.icon}>
              <FontAwesomeIcon
                style={{
                  fontWeight: "bold",
                  float: "right",
                }}
                icon={faChevronDown}
              />
            </span>
          </button>
        </div>
        <div className={styles.mainhead}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 ">
                <h1
                  className={styles.title + " text-md-start sm-12 text-center "}
                >
                  Savoir Faire
                </h1>

                <p
                  className={styles.description + " text-md-start text-center"}
                >
                  it&apos;s french. say it how it&apos;s supposed to be said.
                  <br /> it&apos; ll make your mouth feel funny.
                </p>
              </div>
              <div className="col-lg-6 col-12">
                <div className={styles.image}>
                  <Image
                    src={HomeImage}
                    className={styles.image + "img-fluid"}
                    alt="Savoir Faire"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 mb-5">
          <div className="text-center">
            <div className={styles.ptag}>
              <p className="mt-5 mb-5">Discover more about mens health</p>
            </div>
          </div>

          <div className={styles.partTwo}>
            <div className="text-center">
              <div className={styles.explore}>
                <h2 className="mb-4 ">Explore the Hims Journal</h2>
              </div>
            </div>
          </div>

          {/* Practice */}
          <div className="row">
            <div className="h5">
              <div className={styles.scrollmenu}>
                <a href="#home">Everyday Health</a>
                <a href="#news">All</a>
                <a href="#contact">Hair</a>
                <a href="#about">Lifestyle</a>
                <a href="#about">Mental Health</a>
                <a href="#about">Sex</a>
                <a href="#about">Skin</a>
              </div>
            </div>
          </div>

          <div className={styles.borderContainer + " mt-4 mb-2"}></div>
        </div>

        <div className="container">
          {/* {listItems} */}
          <InfiniteScroll
            pageStart={nextPage}
            loadMore={() => loadMoreFun(nextPage)}
            hasMore={loadMore}
            loader={
              <div key={0} className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            useWindow={true}
          >
            {listItems}
          </InfiniteScroll>
        </div>
      </main>

      {/* Footer */}
      <div
        className="row justify-content-evenly text-white pt-5 pb-5 px-2"
        style={{ backgroundColor: "black" }}
      >
        <div className="col-md-2 pt-2 ">
          <h3
            className="pb-3 "
            style={{ marginLeft: "6%", fontWeight: "650", fontSize: "160%" }}
          >
            Get the latest <br /> from Hims
          </h3>
          <input
            type="email"
            placeholder="Email address"
            className="px-3 "
            style={{
              width: "90%",
              height: "10%",
              borderRadius: "6px",
              backgroundColor: "black",
              color: "#ffffff",
              fontWeight: "900px",
              outline: "none",
              border: "0.5px solid grey",
              marginLeft: "6%",
            }}
          />
        </div>
        <div className="col-md-2 pt-5 " style={{ paddingLeft: "60px" }}>
          <h6 style={{ fontSize: "75%", fontWeight: "650" }} className="pb-4">
            Popular
          </h6>
          <p className="">
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                lineHeight: "40px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Viagra®
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none"
              style={{
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Sildenafil
            </a>
            <br />
            <h6
              style={{
                fontSize: "75%",
                fontWeight: "600",
                color: "gray",
              }}
            >
              Generic for Viagra®
            </h6>

            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                lineHeight: "40px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Cialis®
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Tadalafil
            </a>
            <h6 style={{ fontSize: "75%", fontWeight: "600", color: "gray" }}>
              Generic for Cialis®
            </h6>

            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                lineHeight: "40px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Minoxidil Solution
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Finasteride Pills
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                lineHeight: "40px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Topical Finasteride
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Sertraline
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                lineHeight: "40px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Sertraline for PE
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                marginTop: "100px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Premature <br /> Ejaculation Pills
            </a>
          </p>
        </div>
        <div className="col-md-2 pt-5" style={{ paddingLeft: "50px" }}>
          <h6 style={{ fontSize: "75%", fontWeight: "650" }} className="pb-4">
            Learn
          </h6>
          <p>
            <a
              href="#"
              className="link-light text-decoration-none"
              style={{
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              About Us
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                lineHeight: "40px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              How It Works
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                lineHeight: "40px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Our Medical Experts
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Savoir Faire
            </a>
            <br />
            <h6
              style={{
                fontSize: "75%",
                fontWeight: "600",
                color: "gray",
              }}
            >
              (It’s our blog)
            </h6>

            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                lineHeight: "40px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Medical Review
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Advocacy
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                lineHeight: "40px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Purpose
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Reviews
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                lineHeight: "40px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Investors
            </a>
          </p>
        </div>
        <div className="col-md-2 pt-5 " style={{ paddingLeft: "35px" }}>
          <h6 style={{ fontSize: "75%", fontWeight: "650" }} className="pb-4">
            Connect
          </h6>
          <p>
            <a
              href="#"
              className="link-light text-decoration-none  "
              style={{
                lineHeight: "40px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Help Center
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              contact@forhims.com
            </a>
            <h6
              style={{
                fontSize: "75%",
                fontWeight: "600",
                color: "gray",
                lineHeight: "20px",
              }}
            >
              (If you are a customer seeking support)
            </h6>

            <a
              href="#"
              className="link-light text-decoration-none "
              style={{
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              press@forhims.com
            </a>
            <br />
            <h6
              style={{
                fontSize: "75%",
                fontWeight: "600",
                color: "gray",
                lineHeight: "20px",
              }}
            >
              Important: FOR MEDIA ONLY. Do not use for customer service
              <br />
              inquires. press@forhims.com <br /> goes to a third party — never
              send personal, medical, or health information to this <br />{" "}
              address. Support <br /> inquiries will not be addressed.
            </h6>
          </p>
        </div>
        <div className="col-md-2 pt-5 " style={{ paddingLeft: "25px" }}>
          <h6 style={{ fontSize: "75%", fontWeight: "650" }} className="pb-4">
            Careers
          </h6>
          <p>
            <a
              href="#"
              className="link-light text-decoration-none"
              style={{
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Professionals
            </a>
            <br />
            <a
              href="#"
              className="link-light text-decoration-none"
              style={{
                lineHeight: "40px",
                fontWeight: "600",
                fontSize: "85%",
              }}
            >
              Providers
            </a>
          </p>
        </div>

        <div className="row bg-black">
          <Image
            src={logo}
            width="60%"
            height="-10%"
            style={{ border: "1px solid blue" }}
          />
          <div className="col-8 bg-black ">
            <p
              style={{
                fontSize: "70%",
                margin: "2%",
              }}
              className="text-white justify-content-evenly"
            >
              <a href="#" style={{ margin: "2%", fontWeight: "600" }}>
                Terms & conditions
              </a>
              <a href="#" style={{ margin: "2%", fontWeight: "600" }}>
                Privacy Policy
              </a>
              <a href="#" style={{ margin: "2%", fontWeight: "600" }}>
                sitemap
              </a>
              <a href="#" style={{ margin: "2%", fontWeight: "600" }}>
                CCPA: Do Not Sell My Personal Information
              </a>
            </p>
            <p
              style={{
                marginTop: "-1%",

                fontSize: "70%",
                paddingLeft: "4%",
                fontWeight: "600",
                width: "auto",
              }}
            >
              © 2022 Hims & Hers Health, Inc. All rights reserved. HIMS, HERS,
              H, and HIMS & HERS are trademarks of Hims, Inc.
            </p>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default Home;
