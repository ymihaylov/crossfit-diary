# CrossFit Diary

## What is CrossFit?
CrossFit is a high-intensity fitness program that combines various functional movements, including weightlifting, gymnastics, and cardio exercises. The goal is to improve overall physical performance, strength, and endurance in a structured, competitive environment.

## The idea of this project
My motivation for creating this application stemmed from my passion for CrossFit and my interest in tracking my progress between workouts. Additionally, I saw it as an opportunity to delve into new technologies and concepts such as Node.js, React.js, MongoDB, and Microservices architecture.

The CrossFit gym (in CF slang - The Box) where I train is named CrossFit Vitosha ([https://www.facebook.com/crossfitvitosha](https://www.facebook.com/crossfitvitosha)). It maintains a high standard, and the dedicated team behind it puts in a tremendous amount of effort for our benefit. One unique aspect of this CrossFit box is that the coaching team creates a video and description for each day's workout. This allows those who plan to train that day to become familiar with the workout details before they even arrive. This is the root of CrossFit Diary application - it should fetch this data and do some stuff with it.

After training for several months, I recognized the importance of maintaining a record or journal of my exercises. This would allow me to compare my current workouts with past ones and track my progress over time. I initially began taking notes using the Apple Notes application, but as my workouts expanded, the process became increasingly complicated and disorganized. Managing the notes started to feel like a bureaucratic task.

Then, I came up with the idea for this project – to develop my own implementaiton of a CrossFit Diary that would allow me to track my exercise progress effectively.

This is only an initial idea of the project, it will gonna expand in the feature.

## Use cases in nutshell
-   The application should retrieve daily workout information via the Facebook API on a daily basis
-   Details of each workout should be stored in a MongoDB collection.
-   Once the information is received, it must go through a transformation to separate the raw workout description into distinct exercises
-   The system user should authenticate using Facebook login, and their details should be stored in a MongoDB collection.
-   The authenticated user should have the ability to access each workout and log notes as well as results for every exercise within the workout.
-   The authenticated user should have the ability to search for workouts based on exercises and review their previous results
-   The authenticated user should have the ability to upload photos and videos for the workout which they visited

## Services
-   **workouts-data-serivce** - will be used to store workout info and send back to the front-end app
-   **workouts-data-transform-service** - The service will convert raw workout data into separate exercises. When the workouts-data-service gets new workout info, it'll send a message via Apache Kafka, and the workouts-data-transform-service will be notified. It'll then fetch the specific entry from the database and perform the transformation.
-   **crossfit-diary-frontend** - front-end of the application - written in React.js (Next.js) and Bootstrap

## Tech stack:
-   Node.js (Express.js)
-   React.js (Next.js)
-   MongoDB
-   Docker
-   Apache Kafka
-   Deployed on AWS
