import rp from 'request-promise';
import { SUCCESS_CODE } from '../../configs/status-codes';
import { BadRequest, NotFound } from '../../errors';
import { INVALID, NOT_EXISTS } from '../../configs/constants';
import { EventService } from "../../services";

export class EventController {
    static async getEvents(req, res, next) {
        const { name, date } = req.query;
        let options;

        try {

            if (!name && !date) {
                options = await EventService.getOptions();
            } else if (!date){
                options = await EventService.getOptions(name);
            } else if (!name) {
                options = await EventService.getOptions('yerevan', date);
            } else {
                options = await EventService.getOptions(name, date);
            }

            const response = await rp(options);

            if (!response) {
                throw new BadRequest(INVALID);
            }

            let places = [];

            response.events.forEach((event) => {
                if(event.venue){
                    places.push({
                        name: event.name.text,
                        latitude: event.venue.latitude,
                        longitude: event.venue.longitude
                    })
                }
            });

            return res.status(SUCCESS_CODE).json(places);
        } catch (err) {
            next(err);
        }
    }
}
