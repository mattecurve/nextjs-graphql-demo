// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import ogs from 'open-graph-scraper';
import { ArticleService } from '../services';
import { IArticle } from '../services/article.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse<IArticle[]>) {
  const page = req.query.page ? Number(req.query.page) : 1;

  const articleService = new ArticleService();
  const { data } = await articleService.fetchArticles({
    pagination: {
      page,
    },
  });

  const articles = page == 1 ? data.firstPageArticles : data.retrievePageArticles;

  if (articles && articles.length) {
    for (let i = 0; i < articles.length; i += 1) {
      const article = articles[i];
      try {
        const result = await ogs({ url: article.url });
        console.log(result);
        let ogImage = '';
        if (result.result.success) {
          ogImage = result.result.ogImage ? result.result.ogImage : '';
        }
        if (ogImage) {
          article.ogImage = ogImage as unknown as { url: string };
        }
      } catch (e) {
        console.log(e);
        // do nothing
      }
    }
  }
  res.status(200).json(articles || []);
}
