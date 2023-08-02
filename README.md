# Whatsup - WhatsApp Clone

Whatsup is a WhatsApp clone that allows users to send text, image, and audio messages to their contacts in real-time. It includes features like user authentication, contact management, real-time messaging using Socket.IO, and video and voice call support.

## Live Demo

[View Live Demo](https://whatsup-kmaar.vercel.app/)

## Tech Stack

The Whatsup WhatsApp Clone is built using the following technologies and libraries:

- **Frontend:** React.js, Tailwind CSS, Socket.IO-client, etc.
- **Backend:** Node.js, Express.js, Prisma ORM, Socket.IO, etc.
- **Database:** PostgreSQL

## Installation

1. Clone the repository:

```
git clone https://github.com/SudoKMaar/whatsup.git
```

2. Install dependencies for frontend and backend:

```
cd whatsup/frontend
npm install

cd ../backend
npm install
```

3. Set up environment variables:

Create a `.env` file in the `backend` folder with the following variables:

```
PORT=port_number
DATABASE_URL=your_postgresql_database_url
ZEGO_APP_ID=your_zego_app_id
ZEGO_SERVER_ID=your_zego_server_id
```

4. Start the frontend and backend servers:

```
# Frontend
cd frontend
npm start

# Backend
cd backend
npm start
```

Your application should now be running on `http://localhost:3000`.

## Features

- User registration and login
- Real-time messaging with text, images, and audio
- View and manage contacts
- Online status of contacts
- Incoming and outgoing call support

## Usage

1. **User Registration and Login:**

   Users can create an account by providing their email, name, and profile picture. Once registered, users can log in using their credentials.

2. **Contact Management:**

   Users can view and manage their contacts. They can search for specific contacts using the search bar.

3. **Real-time Messaging:**

   Users can send text, images, and audio messages to their contacts in real-time. New messages will appear instantly without requiring page reloads.

4. **Video and Voice Calls:**

   Users can make video and voice calls to their contacts. To initiate a call, click on the video or voice call button next to the contact's name. Incoming calls will trigger a pop-up notification, and users can accept or reject the call.

## Contributing

We welcome contributions to the Whatsup project! If you would like to contribute, please follow these guidelines:

### Issues

Before submitting a new issue, please search existing issues to avoid duplicates. If you find a related issue, you can add your comments or reactions to it.

### Bug Reports

If you encounter a bug while using Whatsup, please submit a bug report. Make sure to include the steps to reproduce the issue, the expected behavior, and the actual behavior.

### Feature Requests

If you have a feature idea or enhancement suggestion, please submit a feature request. Provide a detailed description of the feature and explain how it would benefit the application.

### Pull Requests

We encourage pull requests for bug fixes, new features, and improvements. Before submitting a pull request, ensure the following:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and write clear and concise commit messages.
3. Test your changes thoroughly to ensure they work as expected.
4. Update the README.md if necessary.
5. Submit the pull request, explaining the changes and referencing any related issues.

### Code of Conduct

Please note that we have a Code of Conduct in place to ensure a positive and inclusive community. By participating in this project, you agree to abide by the Code of Conduct.

## License

The Whatsup project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). This means you are free to use, modify, and distribute the code. The MIT License is a permissive license, and it places limited restrictions on what you can do with the software.

Please refer to the [LICENSE](/LICENSE) file for the full text of the MIT License.

By contributing to the Whatsup project, you agree that your contributions will be licensed under the terms of the MIT License.
