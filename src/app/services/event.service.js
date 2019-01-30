import params from '../configs/params';

export class EventService {
    constructor() {}

    static async getOptions (name = 'yerevan',  date) {
        try {
            console.log(name);
            let options;
            if(!date){
                options = {
                    method: 'GET',
                    uri: `${params.eventBriteApiUrl}?q=${name}&expand=venue&token=${params.ebToken}`,
                    json: true
                };
            } else {
                options = {
                    method: 'GET',
                    uri: `${params.eventBriteApiUrl}?q=${name}&expand=venue&token=${params.ebToken}&start_date.keyword=${date}`,
                    json: true
                };
            }


            if (options) {
                return options;
            }

            return null;
        } catch (e) {
            throw e;
        }
    }
}
