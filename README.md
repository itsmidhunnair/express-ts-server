# Express TS Server

Express Server built using typescript

#### Add Typescript dependencies
```
npm i -D typescript @types/express @types/node
```

#### Initialize with typescript
```
 npx tsc --init
```

#### Add outDir in tsconfig.json
````
"compilerOptions": {
...
"outDir": "./dist",
...
}
````

#### To run server
````
npx ts-node index.ts
````

#### Add following in script
````
"build": "npx tsc",
"start": "node build/index.js",
"dev": "nodemon index.ts"
````


# VOILA Server READY!!!
