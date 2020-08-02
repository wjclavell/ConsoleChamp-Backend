# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day   | Deliverable                                                      | Status     |
| ----- | ---------------------------------------------------------------- | ---------- |
| Day 1 | Project Description                                              | Complete   |
| Day 1 | Wireframes / Priority Matrix / Timeline `backend` and `frontend` | Complete   |
| Day 2 | Working RestAPI                                                  | Incomplete |
| Day 3 | Core Application Structure (HTML, CSS, etc.)                     | Incomplete |
| Day 4 | MVP & Bug Fixes                                                  | Incomplete |
| Day 5 | Final Touches and Present                                        | Incomplete |

## Project Description

[Heroku Url](https://videogame-ratings.herokuapp.com/)

This project will be a full CRUD application for Video Game Ratings. It will be similar to Rotten Tomatoes or Metacritic. Most likely I will focus just on console exclusive games.

## Frontend Repo

[Frontend](https://github.com/wjclavell/FrontEnd-P2/blob/master/planning_directory/project-worksheet.md)

#### References/Relationships

Main video game collection with references to -->

- Critic review collection
- User review colection

## User Stories

- User can view all video games on the site
- User can click a category (PS4, Nintendo Switch, XBOX One) to view games for that system
- User can click on genre type to view games in that genre
- User can click a game to view critic reviews
- User can create a user review for selected game
- User can delete and update their own reviews
- User can add a game to the list and edit the content

## Wireframes

Upload images of functioning Postman routes (will be updated)

## Time/Priority Matrix

[backend TPM](https://res.cloudinary.com/wjclavell/image/upload/v1596217003/project2-videogameratings/P2-backend-TPM_evnqku.png)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- controllers
- seed data
- routers
- server.js
- test routes
- schemas/models

#### PostMVP

- user signup/login
- favorite games to save in separate collection

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions. Try and capture what logic would need to be defined if the game was broken down into the following categories.

#### MVP

| Component      | Priority | Estimated Time | Time Invetsted | Actual Time |
| -------------- | :------: | :------------: | :------------: | :---------: |
| Controllers    |    H     |      4hr       |      4hr       |     -hr     |
| Seed Data      |    H     |      3hr       |      2hr       |     -hr     |
| Routers        |    H     |      .5hr      |      .5hr      |     -hr     |
| Test Routes    |    H     |      1hr       |      1hr       |     -hr     |
| Server.js      |    M     |      .5hr      |      .5hr      |     -hr     |
| Schemas/Models |    H     |      2hrs      |     1.25hr     |     -hr     |
| Total          |    -     |     11hrs      |      -hrs      |    -hrs     |

#### PostMVP

| Component         | Priority | Estimated Time | Time Invetsted | Actual Time |
| ----------------- | :------: | :------------: | :------------: | :---------: |
| User Signup/Login |    M     |     3.5hr      |      -hr       |     -hr     |
| Favorites         |    L     |     3.5hr      |      -hr       |     -hr     |
| Total             |    -     |      7hrs      |      -hrs      |    -hrs     |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object

## Previous Project Worksheet

- [Readme's](https://github.com/jkeohan/fewd-class-repo/tree/master/final-project-worksheet/project-worksheet-examples)
- [Best of class readme](https://github.com/jkeohan/fewd-class-repo/blob/master/final-project-worksheet/project-worksheet-examples/portfolio-gracie.md)
