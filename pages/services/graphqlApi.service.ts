import { post, SuperAgentRequest } from 'superagent';

// this should be configured through env specific files
const API_URL = 'https://gql-technical-assignment.herokuapp.com/graphql';

export class GraphQLApiService {
  private buildRequest(): SuperAgentRequest {
    const siteAbsoluteUrl = new URL(API_URL);
    return post(siteAbsoluteUrl.toString())
      .set('Content-type', 'application/json')
      .set('Cache-Control', 'no-cache')
      .set('Connection', 'close');
  }

  sendRequest<T>(query: string = '', variables: { [key: string]: any } = {}): Promise<T> {
    const dataRequest = this.buildRequest();

    const gqlQuery = query
      .split('\n')
      .map((l) => l.trim())
      .join(' ');

    const requestBody: any = {
      query,
      variables,
    };

    return Promise.resolve(dataRequest.send(requestBody)).then((dataResponse) => {
      return dataResponse.body;
    });
  }
}
