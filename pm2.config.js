module.exports = {
  apps: [{
    name: 'OnlineStore',
    script: './build/server.js',
    cwd: '/home/deploy/client/current',
    instances: 2,
    exec_mode: 'cluster',
    env_production: {
      NODE_ENV: 'production',
      PORT: 9020
    }
  }],

  deploy: {
    production: {
      user: 'deploy',
      host: ['some.host.com'],
      ref: 'origin/master',
      repo: 'git@github.com:KarinaTiurina/online-store-react.git',
      path: '/home/deploy/client',
      'post-deploy': 'npm install && npm run build:server && pm2 startOrRestart pm2.config.js --evn production'
    }
  }
};
