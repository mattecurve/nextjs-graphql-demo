import type { NextPage } from "next";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import styles from "../styles/Home.module.css";
import { IArticle } from "./services/article.service";
import { TopMenu } from './components/home/TopMenu';
import { BannerSection } from './components/home/BannerSection';
import { DiscoverMore, ExploreSection } from './components/home/Explore';
import { Footer } from './components/common/Footer';
import { HeadTag } from './components/common/Head';
import { Loader } from './components/common/Loader';
import { ArticleCard } from './components/home/ArticleCard';

const fetchArticleData = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
      throw new Error(data.message)
  }
  return data
}

const Home: NextPage = () => {
  const [articleList, setArticleList] = useState<IArticle[]>([]);
  const [loadMore, setLoadMore] = useState(true);
  const [nextPage, setNextPage] = useState(1);

  const footerMenuList = [
    {
      title: 'Popular',
      menus: [
        {
          text: 'Viagra®',
          subText: '',
        },
        {
          text: 'Sildenafil',
          subText: 'Generic for Viagra®',
        },
        {
          text: 'Cialis®',
          subText: '',
        },
        {
          text: 'Tadalafil',
          subText: 'Generic for Cialis®',
        }
      ]
    },
    {
      title: 'Popular',
      menus: [
        {
          text: 'Viagra®',
          subText: '',
        },
        {
          text: 'Sildenafil',
          subText: 'Generic for Viagra®',
        },
        {
          text: 'Cialis®',
          subText: '',
        },
        {
          text: 'Tadalafil',
          subText: 'Generic for Cialis®',
        }
      ]
    },
    {
      title: 'Popular',
      menus: [
        {
          text: 'Viagra®',
          subText: '',
        },
        {
          text: 'Sildenafil',
          subText: 'Generic for Viagra®',
        },
        {
          text: 'Cialis®',
          subText: '',
        },
        {
          text: 'Tadalafil',
          subText: 'Generic for Cialis®',
        }
      ]
    },
    {
      title: 'Popular',
      menus: [
        {
          text: 'Viagra®',
          subText: '',
        },
        {
          text: 'Sildenafil',
          subText: 'Generic for Viagra®',
        },
        {
          text: 'Cialis®',
          subText: '',
        },
        {
          text: 'Tadalafil',
          subText: 'Generic for Cialis®',
        }
      ]
    }
  ];

  const loadMoreFun = (pageNumber: number) => {
    const url = `/api/articles?page=${pageNumber}`;
    fetchArticleData(url)
      .then((articles) => {
        articleList.push(...articles);
        setArticleList(articleList);
        if (articles.length === 30) {
          setNextPage(pageNumber + 1);
          setLoadMore(true);
        } else {
          setLoadMore(false);
        }
      })
      .catch(console.log);
  };

  const listItems = articleList.map((article) => (
    <ArticleCard article={article} />
  ));

  return (
      <div className={styles.container + 'container-fluid'}>
          <HeadTag />
          <header className='header'>
            <TopMenu />
          </header>
          <main className={styles.main}>
              <BannerSection />
              <div className='w-100 mb-5'>
                  <DiscoverMore/>
                  <ExploreSection/>
                  <div className='container'>
                      <div className='row'>
                        <div className={styles.scrollMenu + ' d-flex justify-content-md-around flex-wrap flex-sm-nowrap'}>
                            <a href='#'>Everyday Health</a>
                            <a href='#'>All</a>
                            <a href='#'>Hair</a>
                            <a href='#'>Lifestyle</a>
                            <a href='#'>Mental Health</a>
                            <a href='#'>Sex</a>
                            <a href='#'>Skin</a>
                        </div>
                      </div>
                  </div>
                  <div className={styles.borderContainer + ' mt-4 mb-2'}></div>
              </div>

              <div className='container'>
                  <InfiniteScroll
                      pageStart={nextPage}
                      loadMore={() => loadMoreFun(nextPage)}
                      hasMore={loadMore}
                      loader={
                          <Loader/>
                      }
                      useWindow={true}
                  >
                      {listItems}
                  </InfiniteScroll>
              </div>
          </main>

          {/* Footer */}
          <Footer footerMenuList={footerMenuList} />
      </div>
  );
};

export default Home;
