module.exports = {
  apps: [
    {
      name: 'Bucketlist Server',
      script: './bin/www',
      node_args: '-r dotenv/config',
    }
  ]
}