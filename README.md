# MockaRank - AI-Driven SEO Automation Platform

MockaRank is a powerful web application that simulates an SEO automation platform with autonomous AI agents. This platform helps users optimize their website content, track keyword rankings, and improve their overall search engine visibility with minimal manual intervention.

![MockaRank Logo](./generated-icon.png)

## 🚀 Features

- **AI-Powered SEO Automation**: Leverages artificial intelligence to autonomously optimize website content
- **Keyword Tracking**: Monitor keyword positions and performance over time
- **Competitor Analysis**: Get insights on competitor strategies and content
- **User-Friendly Dashboard**: Visualize your SEO performance metrics in one place
- **Role-Based Access Control**: Different permission levels for users and administrators
- **Dark/Light Mode**: Customizable UI experience to suit your preferences

## 📋 Prerequisites

- Node.js (v16 or later)
- PostgreSQL database
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/mockarank.git
cd mockarank
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory with the following variables:

```
DATABASE_URL=postgresql://username:password@localhost:5432/mockarank
SESSION_SECRET=your_session_secret
```

Replace the values with your actual PostgreSQL connection details.

4. **Push database schema**

```bash
npm run db:push
```

5. **Start the application**

```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## 🔑 Default Admin Credentials

For testing and initial setup, a default admin account is created automatically:

- **Username**: admin
- **Password**: admin123$

**Important**: Change these credentials in a production environment!

## 📊 Application Structure

- **Frontend**: React with Material UI components for a responsive interface
- **Backend**: Express.js REST API
- **Database**: PostgreSQL for data persistence
- **Authentication**: Passport.js with local strategy
- **State Management**: React Query for server state and data fetching

## 💼 Business Logic

MockaRank simulates an SEO platform with the following core functionalities:

1. **Autonomous SEO Optimization**: AI agents that crawl your website and automatically suggest and implement improvements
2. **Keyword Ranking Tracker**: Track your website's position for target keywords
3. **Competitor Analysis**: Monitor competitor content and SEO strategies
4. **Content Recommendations**: Get AI-driven suggestions for content creation
5. **Performance Metrics**: Visualize your SEO progress over time

## 📱 Pages and Routes

- **/** - Landing page with product information
- **/auth** - Authentication page (login/register)
- **/dashboard** - Main user dashboard (protected route)

## 🛡️ Authentication and Security

The application uses secure password hashing with scrypt and salt for user authentication. Sessions are stored in the PostgreSQL database using connect-pg-simple.

## 🎨 Customization

You can customize the application theme by modifying the `theme.json` file:

```json
{
  "primary": "#EC7FA9",
  "variant": "vibrant",
  "appearance": "light",
  "radius": 0.5
}
```

## 🔄 API Endpoints

- **POST /api/register** - Register a new user
- **POST /api/login** - Authenticate a user
- **POST /api/logout** - Log out the current user
- **GET /api/user** - Get the current user's information
- **GET /api/dashboard** - Get dashboard data (requires authentication)

## 🚫 Limitations

This application is a simulation and does not perform actual SEO analysis or website optimization. The data shown is for demonstration purposes only.

## 🔧 Troubleshooting

### Database Connection Issues

If you encounter database connection problems:

1. Verify your PostgreSQL service is running
2. Double-check your DATABASE_URL environment variable
3. Ensure the database exists or has been created
4. Try running `npm run db:push` to sync your schema

### Authentication Issues

If you're having login problems:

1. Clear your browser cookies
2. Verify you're using the correct credentials
3. Check the server logs for any authentication errors
4. Reset the admin password by manually updating the database (in development only)

### Application Won't Start

If the application fails to start:

1. Check for port conflicts (default is 5000)
2. Verify all dependencies are installed (`npm install`)
3. Look for error messages in the console
4. Make sure environment variables are set correctly

## 💻 Development

To contribute to the project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Material UI for the component library
- TanStack Query for data fetching
- Drizzle ORM for database interactions
- Wouter for routing

---

© 2025 MockaRank. All rights reserved.


# Tips
## Tips for Running and Testing the Project Locally

### 1. View Folder Structure
To view the folder structure of the project, you can use the `tree` command:
```bash
tree -L 2
```
or
```bash
tree -L 2 > folder-structure.txt
```
