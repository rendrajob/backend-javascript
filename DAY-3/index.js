const express = require('express');
const app = express();
const PORT = 8080;

const users = [
    { username: 'john', password: 'john' },
    { username: 'peter', password: 'peter' },
    { username: 'susan', password: 'susan' },
    { username: 'anna', password: 'anna' },
    { username: 'emma', password: 'emma' },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .send('please provide username and password value')
    }
    const valid = users.find(user => user.username === username && user.password === password);
    if (valid) {
      return res.status(200).send(`Welcome ${username}`)
    }
  
    res.status(400).send('Invalid Credentials')
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .send('please provide username and password value')
    }
    users.push({ username, password });
    res.status(201).send('Successfully registered');
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
