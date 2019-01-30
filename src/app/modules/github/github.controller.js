import { GithubService } from '../../services';
import rp from 'request-promise';
import { SUCCESS_CODE } from '../../configs/status-codes';
import { BadRequest, NotFound } from '../../errors';
import { INVALID, NOT_EXISTS } from '../../configs/constants';

export class GithubController {
    static async top20repositories(req, res, next) {
        const { q } = req.query;
        let options;
        if (!q) {
            options = await GithubService.getOptions();
        } else {
            options = await GithubService.getOptions(q);
        }
        try {
            const response = await rp(options);

            if(!response) {
                throw new BadRequest( INVALID );
            }

            return res.status(SUCCESS_CODE).json(response);
        } catch (err) {
            next(err);
        }

    }
}
