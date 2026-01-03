# Body Mass Index Calculator
Live-Demo: https://willowy-sunburst-406ccb.netlify.app/

A modern, responsive BMI calculator built with React and Vite. Calculate your Body Mass Index and get health insights with both metric and imperial unit support.

## Features

- **Dual Unit Support**: Switch between metric (cm/kg) and imperial (ft/in/st/lb) measurements
- **Real-time Calculation**: BMI updates instantly as you type
- **Health Classification**: Get your BMI category (Underweight, Healthy, Overweight, Obese)
- **Healthy Weight Range**: See your ideal weight range for metric measurements
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, gradient-based design with smooth interactions

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties and gradients
- **JavaScript ES6+** - Modern JavaScript features

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Body-Mass-Calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── Components/
│   └── bmi/
│       ├── UnitToggle.jsx      # Metric/Imperial toggle
│       ├── MetricInputs.jsx    # Height/Weight inputs (metric)
│       ├── ImperialInputs.jsx  # Height/Weight inputs (imperial)
│       └── ResultPanel.jsx     # BMI result display
├── hooks/
│   └── useBmi.js              # BMI calculation logic
├── utils/
│   └── bmi.js                 # BMI utility functions
├── styles/
│   ├── globals.css            # Global styles
│   └── tokens.css             # CSS custom properties
├── App.jsx                    # Main app component
└── main.jsx                   # App entry point
```

## BMI Categories

- **Underweight**: BMI < 18.5
- **Healthy Weight**: BMI 18.5 - 24.9
- **Overweight**: BMI 25 - 29.9
- **Obese**: BMI ≥ 30

## License

This project is open source and available under the [MIT License](LICENSE).