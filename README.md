# AgroSphere

AgroSphere is a comprehensive agricultural platform designed to empower farmers, suppliers, and researchers with real-time data, expert insights, and management tools. The platform provides weather intelligence, market trends, crop management, and more, all in a modern, user-friendly web application.

## Features

- **User Authentication**: Secure login and registration for different user roles (farmer, supplier, researcher).
- **Personalized Dashboards**: Custom dashboards for each user type.
- **Weather Intelligence**: Real-time weather updates and 5-day forecasts based on location or city search.
- **Market Trends**: Live commodity prices and trend analysis.
- **Expert Insights**: Access to expert articles, Q&A, and research publications.
- **Farmer Portal**: Crop management, soil and irrigation tracking, and actionable insights.
- **Research Dashboard**: Data analysis, forecasting, and publication tools for researchers.
- **Supplier Portal**: Manage and showcase agricultural supplies.

## Tech Stack

- **Frontend**: React.js, Material-UI (MUI), Chart.js
- **Routing**: React Router
- **State Management**: React Context API
- **Forms & Validation**: Formik, Yup
- **APIs**: OpenWeatherMap (for weather data)
- **Authentication**: Mock authentication (can be replaced with Firebase/Auth0)

## Project Structure

```
agrosphere/
├── src/
│   ├── components/
│   ├── context/
│   ├── assets/
│   ├── utils/
│   ├── services/
│   ├── hooks/
│   ├── App.js
│   └── ...
```

## Main Components

### Layout & Navigation

- **Navbar**: Top navigation bar with links to all main sections and authentication actions.
- **Footer**: Bottom section with copyright and links.

### Authentication

- **Login**: User login form with validation.
- **Register**: User registration form with validation.
- **AuthContext**: Provides authentication state and logic across the app.

### Home & Dashboard

- **Home**: Landing page with hero section and feature highlights.
- **Dashboard**: Personalized dashboard with quick actions and recent activity for logged-in users.

### Weather

- **WeatherDashboard**: Allows users to search weather by city or use their location, shows current weather, 5-day forecast, and a temperature trend chart.

### Market

- **MarketTrends**: Displays real-time commodity prices, trends, and a price chart for key crops.

### Expert

- **ExpertInsights**: Blog posts, seasonal forecasts, and Q&A section for expert advice and research articles.

### Farmer

- **FarmerPortal**: Multi-step form for crop management, soil and irrigation tracking, and actionable insights. Includes tabs for crop management and insights.

### Research

- **ResearchDashboard**: Data analysis, forecasting, and publication tools for researchers, including charts and dataset management.

### Supplier

- **SupplierPortal**: Portal for suppliers to manage and showcase agricultural supplies and offers.

### Common/Utility

- **FeaturesSection, DataSection, MarketplaceSection, HeroSection**: Reusable sections for the Home page and other feature highlights.
- **mockData.js**: Contains mock data for development and testing.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd agrosphere
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000) (or another port if 3000 is in use).

### Environment Variables

- For weather features, you need an OpenWeatherMap API key. This is currently hardcoded in the project, but you can move it to a `.env` file for security:
  ```env
  REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
  ```

## Usage

- Register as a user (farmer, supplier, or researcher).
- Log in to access your personalized dashboard.
- Use the navigation bar to access features like Weather, Market Trends, Expert Insights, Farmer Portal, etc.
- For weather, search by city or use your current location for real-time updates and forecasts.

## Contribution

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/)
- [Unsplash](https://unsplash.com/) for free images
- [Material-UI](https://mui.com/)
- [Chart.js](https://www.chartjs.org/)
