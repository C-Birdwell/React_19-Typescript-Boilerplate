# :globe_with_meridians: React 19 Typescript Boilerplate

A React 19 boilerplate built in Typescript. This boilerplate serves the foundation of any project requiring a React Frontend.
This boilerplate was created by **Colin Andrew Birdwell** for personal and professional use. Please feel free to use the entirety or parts of this project for your own use.

- React 19.1
- Built with Vite using react-ts

## :electric_plug: Integrated Features

- Redux
- Redux Toolkit
- React Router
- SaSS

## :hammer: Running Locally

To get started:

`npm i`\
or\
`npm install`

then to start the **Development Environment**:

`npm run dev`\
or\
`npm start`

_Note_:
The boilerplate has been configured to open up a new browser tab on the designated default browser. If you wish to turn this off then navigate to:

> :root  
> |  
> | - vite.config.ts

Then change server -> open: true to false or delete the block of code:

```text
 server: {
    open: true,
  },
```

## :dromedary_camel: Path Aliasing

Path Aliasing targets first direct folder of the src folder.
To add more please follow the pattern found on:

> :root  
> |  
> | - tsconfig.app.json  
> | - tsconfig.json  
> | - vite.config.ts

### tsconfig.app.json & tsconfig.json

```text
 "paths": {
      "@/*": ["./src/*"],
      "@/assets": ["./src/assets"],
      "@/components": ["./src/components"],
      "@/constants": ["./src/constants"],
      "@/hooks": ["./src/hooks"],
      "@/lib": ["./src/lib"],
      "@/pages": ["./src/pages"],
      "@/routes": ["./src/routes"],
      "@/store": ["./src/store"],
      "@/styles": ["./src/styles"],
      "@utils": ["./src/utils"]
    }
```

### vite.config.ts

```text
alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@styles": path.resolve(__dirname, "./src/store"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
```

## :earth_americas: Environment Files

A default .env file is located in the root directory. For security purposes it is suggested to create a .env.development and .env.production when creating more complex projects.
