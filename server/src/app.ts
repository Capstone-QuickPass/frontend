
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('I am alive!');
});

app.listen(port, () => {
    console.log(`I am listening at http://localhost:${port}`);
});