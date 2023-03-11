# Project Overview

The React Dog Store

## Tech Stack Solution

- ecommerce store web application
- front end built with reactjs
- integrated with stripe
- uses google firebase for authentification and database

## Architecture

### Index.js

- entry point is index.js
- imports react and reactdom
- imports browsersrouter from react-router-dom
- imports app.js
- imports index.scss
- imports userprovider context
- creates root object with reactdom createroot getelementbyid root
- wraps everything in react strictmode
- wraps context and app inside browser router
- wraps app with context

### App.js

- imports routes and route from react-router-dom
- handles all route components?
- imports authentification component from routes
- imports home component from routes
- imports navigation from routes
- wraps everything in the routes function
- home component acts as a parent for other components (remember why)
- route elements have path and element props
- the element of home is navigation, but home also renders an index element wrapped inside the root route

### Authentification

- split into SignInForm and SignUpForm components

#### Sign In Form Component

- imports useState from react
- imports FormInput component
- imports signin functions from firebase utils
- imports button component
- imports styles
- sets defaultFormFields object with empty props
- Sign in form function establishes formFields state and setFormFields function with usestate
- creates formFields object
- resetFormFields function will setFormFields with empty object defaultFormFields
- Submit handler async function will:
  - prevent default behavior of target
  - establishes try catch block to handle errors
  - creates const user from await signin with email and password
  - handles some specific errors using switch case
- Change Handler function destructures change event into name and value props
  - sets the form fields with existing formFields spread with the named prop value updated
- returns JSX component

##### FormInput Component

- formInput function destructures props label and spreads other props
- returns jsx of form input including functionality and interactivity
- how does it pass data back up, simply by the value prop

### User Context

- Firebase's OnAuthStateChange returns us back an observable listener
- In order to use OASC we're going to mount it on component mount with useEffect
- onAuthStateChange will call our callback function whenever the state of the auth singleton changes

### Misc

- REPHRASE: style sheets are imported 'localy'

## Vocabulary

- [Singleton](https://en.wikipedia.org/wiki/Singleton_pattern)
