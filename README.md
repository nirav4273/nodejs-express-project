### NODEJS

##### Tech Stack
* Framework: NodeJS with MySQL database
* Libraries: Express JS & Sequelize
* Authentication: Passport JS with JWT tokens

##### Setup
1. npm install
2. Create `.env` file from `.env.copy` & update your values.



#### Database configuration
1. Add your DB details into .env file.
2. Migration run: `npm run migrate`


##### Create New Migration file.
```
npm run create:migrate <filename>
```

##### Run existing migration files
```
npm run migrate
```


#### Create new seed file
```
npm run create:seed <filename>
```

#### Run seeds files
```
npm run seed
```

##### Start Development Server
```
npm run start-dev
```

##### Start Production Server
```
npm run prod
```



##### Eslint
```
npm run lint (Check errors)
npm run lint:fix (Fix possible error automatically via this command)
```





