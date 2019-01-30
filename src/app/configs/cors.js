
// cors origins options
// whitelist for domains which have access to send requests
const corsOptions = {
    development: {
        origin: [ /localhost:4200/, /localhost:4201/ ],
        credentials: true,
        allowedHeaders: [
            'Content-Type',
            'Authorization'
        ]
    },
    production: {
        origin: [ /DSBfd/, /zdfb/ ],
        credentials: true,
        allowedHeaders: [
            'Content-Type',
            'Authorization'
        ]
    }
};

export default corsOptions[process.env.NODE_ENV || 'development'];
