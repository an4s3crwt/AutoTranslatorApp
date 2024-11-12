# AutoTranslatorApp

AutoTranslatorApp is a mobile application developed with React Native and Expo that automatically translates the text copied to the clipboard to a specific language. In its current version, the app translates the copied text into English using the Deepl API and then copies the translation back to the clipboard for easy use.

## Features

- **Automatic clipboard detection**: The app checks the clipboard content every 2 seconds.
- **Automatic translation**: It uses the Deepl API to translate any text copied to the clipboard.
- **Clipboard copying**: The translation is automatically copied to the clipboard so the user can easily use it.

## Requirements

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (preferably the LTS version)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

    git clone https://github.com/an4s3crwt/AutoTranslatorApp.git
    cd AutoTranslatorApp


2. **Install dependencies**:

    If you're using `npm`, run:

    
    npm install
    

    Or if you prefer `yarn`:

  
    yarn install


3. **Set up your Deepl API key**:

    1. Sign up at [Deepl](https://www.deepl.com/pro) and get your API key.
    2. Create a `.env` file in the root of the project and add the following line:

        
        DEEPL_API_KEY=your_api_key
        

4. **Run the app**:

    If everything is set up correctly, you can start the project with Expo. Run:

    
    expo start
    

    This will open a page in your browser with a QR code that you can scan using the Expo Go app on your mobile device.

## Usage

- Copy any text to the clipboard.
- The app will automatically detect the text and translate it into Russian.
- The translated text will be copied back to the clipboard, ready to use.

## Future Improvements

There are several features I plan to add in the future to enhance the app:

1. **Support for multiple languages**:
    - Currently, the app only translates to Russian. In the future, I plan to allow the user to choose the target translation language (e.g., English, Spanish, German, etc.).

2. **Improved user interface**:
    - Adding a visual interface to display the translated text and offer a better user experience.
    - Implementing a feature where the user can view a history of translations.

3. **Clipboard detection optimization**:
    - Implementing a more efficient way to monitor the clipboard, perhaps allowing users to customize the time interval for checking the clipboard.

4. **Better error handling**:
    - Improving error handling for cases where the Deepl API is unavailable or when the clipboard is empty.

5. **User authentication**:
    - Integrating a user authentication system to allow users to save their language preferences or view a history of custom translations.

6. **Cross-platform support**:
    - Currently, the app is focused on Android/iOS devices using Expo. In the future, I plan to extend support to platforms like the web.

## Contributing

Contributions are welcome! If you find any issues or want to add a new feature, feel free to fork the project and submit a pull request.

### To contribute:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/new-feature`.
3. Make your changes and commit: `git commit -m 'Add new feature'`.
4. Push to your branch: `git push origin feature/new-feature`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
