const app = require('./app');
const port = process.env.PORT || 3000;

console.log(process.env.PORT);

app.listen(port, () => {
  console.log(`App running on port ${port}`)
}); 