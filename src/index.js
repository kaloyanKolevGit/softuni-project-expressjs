const express = require('express');
const dbConnect = require('./config/dbConfig')
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes');

const app = express();

const PORT = 5000;
dbConnect().then(() => console.log('DB is connected'))
.catch((err) => console.log(err));

expressConfig(app);
handlebarsConfig(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
