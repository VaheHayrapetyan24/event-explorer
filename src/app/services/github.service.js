import { githubUrl } from '../helpers/config';
import randomWords from 'random-words';

export class GithubService {
    constructor() {}

    static async getOptions (name = randomWords()) {
        try {
            const options = {
                method: 'GET',
                uri: `${githubUrl}/search/repositories?q=${name}`,
                headers: {
                    'User-Agent': 'Request-Promise'
                },
                json: true
            };

            if (options) {
                return options;
            }

            return null;
        } catch (e) {
            throw e;
        }
    }
}
