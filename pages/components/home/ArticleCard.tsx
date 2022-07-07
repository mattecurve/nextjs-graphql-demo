import styles from "./../../../styles/Home.module.css";

export function ArticleCard(props: any) {
  const {article} = props;
  return (
    <div key={article.id} className="card mb-3 article-container border-0">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="pb-4">
            <div
              className={styles.cardImage}
              style={{
                backgroundImage: `url("${article.ogImage ? article.ogImage.url : 'https://cdn.buttercms.com/de6uJAc5RJGecOC4BJgz'}")`,
              }}
            ></div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body ms-5">
            <h5 className={"card-title font-weight-normal"}>
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
  )
}
