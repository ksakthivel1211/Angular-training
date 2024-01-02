# LearnInfinite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



************************************************************************************************************************************************
 
> Learn-infinite is educational platform where we can explore various course and enrich our knowledge

>> Project setup:

 -> Home
    -> Dashboard
    -> Explore Courses
    -> My Courses
    -> Notes
    -> Settings

 -> Login/Registration

1. Home page:

    * Header component 
        - Welcome message
        - Search-box component
        - Cart component
        - Login button/Profile icon

    * Left-menu-Container Component
        - Logo
        - Contains all the child route links as menu options 

    * Router-outlet : Appends selected page component dynamically on selection from the Left-menu-container Component

2. Dashboard:

    * Ad-section component

    * Course-selection component

    * Selected course section :
        - Card-container component
            .Arrow component : for scrolling through the scrollable cards
            .Card component

    * Recommended course section : (displays only on login)
        - Card-container component
            .Arrow component : for scrolling through the scrollable cards
            .Card component

3. Explore course:(can be accessed only on login)

    * Heading

    * Card-container component:
        - Card component
        - Add to cart/Added button

4. My courses:(can be accessed only on login)

    * Heading

    * Card-container component:
        - Card component

5. Notes : -

6. Settings : 

    * Theme-selection section
    (Out of requirement, implemented to show the use-case of subjects(Observables))

7. Login/Registration:

    * Sign-up-form component
        - Form-input component
        - Login/Signup button

    * Validation :
        - Password validation is done through regex
        - Email validation is done through email validator


>> Gaurds :

    1. Auth-gaurd : checks if the login status is true , if not it re-routes the user to login page
        - Auth-gaurd is applied to explore courses and my courses route

>> Services:

    1. Data service : Contains methods to fetch api response of courses
    2. Authentication service : Contains methods that validates the form input and login/logout
    3. Theme service : Contains methos to update and fetch theme color
    4. Course service : Contains methods thats retrieves and manipulate available course and user course details 
    5. User data service : Contains methods thats fetch user details like user name and user courses

>> Pipes:

    1. Prefix-sufix pipe : added sybmbols or expressions to strings
    2. Sentence case pipe : Capitalize the first letter of the first word in a sentence


