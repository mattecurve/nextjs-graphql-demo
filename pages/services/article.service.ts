import { v4 } from 'uuid';
import { GraphQLApiService } from './graphqlApi.service';

interface IGetArticleParams {
    filter?: {};
    pagination?: {
        page?: number;
    };
}

enum ArticleType {
    Story = 'story',
}

export interface IArticle {
    id: string;
    author: string;
    createdAt: Date;
    score: number,
    updatedAt: Date;
    title: string;
    text: string;
    type: ArticleType;
    url: string;
}

interface IArticleCreateParams {
    title: string;
    text: string;
    url: string;
    imageUrl: string;
}

interface IArticleResponse {
    data: {
        retrievePageArticles: IArticle[];
    }
}

const localCache: IArticle[] = [];

export class ArticleService extends GraphQLApiService {
    async fetchArticles(params: IGetArticleParams): Promise<IArticleResponse> {
        const query = `
        query ($PAGE: Int!) {
                retrievePageArticles(page: $PAGE) {
                    id
                    author
                    createdAt
                    score
                    updatedAt
                    title
                    text
                    type
                    url
                }
            }
        `;
        const variables: {[key: string]: any} = {};
        if (params.pagination?.page) {
            variables.PAGE = params.pagination?.page;
        }
        const response = await this.sendRequest<IArticleResponse>(query, variables);
        if (response.data.retrievePageArticles) {
            localCache.push(...response.data.retrievePageArticles);
        }
        return response;
    }

    createArticle(params: IArticleCreateParams): Promise<IArticle> {
        const article: IArticle = {
            ...params,
            id: v4(),
            author: 'onkar',
            createdAt: new Date(),
            score: 1,
            updatedAt: new Date(),
            type: ArticleType.Story,
        };
        localCache.push(article);
        return Promise.resolve(article);
    }
}