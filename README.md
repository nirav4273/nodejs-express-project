## NodeJS Express with Babel
```
Create Basic node-express project with basic route. Babel minify to reduce code size & improve code performance
```
### Setup guide
1. npm run setup
	- setup .env file
2. npm install
	- Install plugins
3. npm start
	- Run Project
4. npm run prod:build
	- Run server production with ( Minify Version )

## Commands
1. npm run build : Create minify build of project. Two folder create one with minify & another one is pure java-script code.


### Project branches
1. master
	- base code
2. connect-sequelize [ WIP ]
	- Api with sequelize connection
3. connect-mongoo [ Pending ]
	- Api with mongodb databse.

### Project Structure

```
Root
|
|-- README.md
|___ src
	|
	|
	|__ controller
	|	|
	|	|
	|	|__ auth
	|		|
	|		|__ index
	|	
	|__ routes
	|	|
	|	|
	|	|__ auth
	|		|
	|		|__ index
	|
	|__ utils
		|
		|
		|__ response
		|__ debug
		|__ index

```