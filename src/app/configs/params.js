import {
    apiUrl,
    appUrl,
    apiPort,
    userTokenSecret,
    adminTokenSecret,
    sendGridApiKey,
    emailFrom,
    eventBriteApiUrl,
    ebToken

} from '../helpers/config';

const params = {
    development: {
        apiUrl,
        appUrl,
        apiPort,
        userTokenSecret,
        adminTokenSecret,
        sendGridApiKey,
        emailFrom,
        eventBriteApiUrl,
        ebToken

    },
    production: {
        apiUrl,
        appUrl,
        apiPort,
        userTokenSecret,
        adminTokenSecret,
        sendGridApiKey,
        emailFrom,
        eventBriteApiUrl,
        ebToken
    }
};

export default params.development;
