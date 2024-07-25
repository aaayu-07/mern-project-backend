// ../config/corsOptions.js

const allowedOrigins = [
  'https://mern-blogging-frontend.netlify.app', // Add other allowed origins if needed
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // if you need to handle cookies
  optionsSuccessStatus: 204,
};

module.exports = corsOptions;
