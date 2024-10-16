# One Photos Project

Welcome to **One Photos**! This project is designed to provide a seamless photo management experience using modern technologies.

## Table of Contents

- [Setup](#setup)
- [Development](#development)
- [Production](#production)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Setup

To get started with the project, clone the repository and install the dependencies:

```bash
yarn install
```

## Development

To run the application in development mode, execute the following command:

```bash
yarn dev
```

This will start the development server, allowing you to see your changes in real-time.

## Production

### Building for Web

To build your application for production on the web, use:

```bash
yarn build:web
```

### Building for iOS

Before building your iOS application, you need to generate the native code:

```bash
yarn prebuild:native
```

Once the native code is generated, follow the terminal instructions to build and upload your iOS app for distribution.

### Building for Android

For Android, you can run:

```bash
yarn android
```

This will compile your app and prepare it for testing on Android devices.

## Scripts

The following scripts are available for managing your project:

- **Development**:
  - `yarn dev`: Start the development server.
  - `yarn dev:clean`: Start the development server and clean previous builds.

- **Build**:
  - `yarn build:web`: Build the app for production on the web.
  - `yarn prebuild:native`: Generate native code for iOS.

- **Linting & Formatting**:
  - `yarn lint`: Check and fix linting issues.
  - `yarn prettier`: Check and fix formatting issues.

- **Cleaning**:
  - `yarn clean`: Remove build artifacts.

## Dependencies

This project utilizes several key dependencies:

- **Core Libraries**:
  - `react`, `react-native`, `expo`: Frameworks for building the application.
  - `@tamagui`: UI library for building responsive layouts.

- **Development Tools**:
  - `eslint`, `prettier`: Tools for maintaining code quality and formatting.

Make sure to check the `package.json` file for a complete list of dependencies.

## Contributing

We welcome contributions to enhance the One Photos project. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for checking out One Photos! We hope you enjoy building with it. If you have any questions or feedback, feel free to reach out.