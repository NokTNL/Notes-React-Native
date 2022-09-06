## Installation

- https://docs.expo.dev/get-started/installation/
- Easiest way for beginners is to use the **Expo Cli**. To get access to the `expo` command: `npm install --global expo-cli`
  - In case it fails, try: `sudo npm install --unsafe-perm -g expo-cli`
- To display an RN app on a phone, install Expo Go on the phone
- To create a new project folder: sudo `npx create-expo-app <project-name>`
  - Using the typescript template: `npx create-expo-app -t expo-template-blank-typescript`

## Project setup

- `app.json` contains the configs expo needs
- `App.js` is the main app file

## Starting the app on development server

- `npx expo start` or `yarn start`, then scan the QR code on your phone to open it in Expo Go
- If you want to use a simulator instead, install Android Studio for Android, or XCode for iOS, and then choose the appropriate options after starting the development server
