import { useBmi } from "./hooks/useBmi.js";
import UnitToggle from "./Components/bmi/UnitToggle.jsx";
import MetricInputs from "./Components/bmi/MetricInputs.jsx";
import ImperialInputs from "./Components/bmi/ImperialInputs.jsx";
import ResultPanel from "./Components/bmi/ResultPanel.jsx";

export default function App() {
  const bmiState = useBmi();

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src="/logo.svg" alt="Logo" className="logo" />
          <h1>Body Mass Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our 
            body mass index (BMI) calculator. While BMI is not the sole determinant 
            of a healthy weight, it offers a valuable starting point to evaluate 
            your overall health and well-being.
          </p>
          
          {/* BMI Calculator Card */}
          <div className="bmi-card">
            <UnitToggle unit={bmiState.unit} onChange={bmiState.setUnit} />
            
            <div className="inputs-section">
              {bmiState.unit === "metric" ? (
                <MetricInputs value={bmiState.metric} onChange={bmiState.setMetric} />
              ) : (
                <ImperialInputs value={bmiState.imperial} onChange={bmiState.setImperial} />
              )}
            </div>
            
            <ResultPanel
              unit={bmiState.unit}
              bmi={bmiState.bmi}
              classification={bmiState.classification}
              healthyRange={bmiState.healthyRange}
              metricHeightCm={bmiState.metric.heightCm}
            />
          </div>
        </div>
        
        <div className="hero-image">
          <img src="/image-man-eating.webp" alt="Man eating" />
        </div>
      </section>
      
      {/* What your BMI result means section */}
      <section className="bmi-meaning">
        <div className="container">
          <div className="meaning-content">
            <h2>What your BMI result means</h2>
            <p>
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' 
              Maintaining a healthy weight may lower your chances of experiencing 
              health issues later on, such as obesity and type 2 diabetes. 
              Aim for a nutritious diet with reduced fat and sugar content, 
              incorporating ample fruits and vegetables. Additionally, strive for 
              regular physical activity, ideally about 30 minutes daily for 
              five days a week.
            </p>
          </div>
          
          <div className="tips-grid">
            <div className="tip-item">
              <img src="/icon-eating.svg" alt="Healthy eating" />
              <div>
                <h3>Healthy eating</h3>
                <p>
                  Healthy eating promotes weight control, disease prevention, 
                  better digestion, immunity, mental clarity, and mood.
                </p>
              </div>
            </div>
            
            <div className="tip-item">
              <img src="/icon-exercise.svg" alt="Regular exercise" />
              <div>
                <h3>Regular exercise</h3>
                <p>
                  Exercise improves fitness, aids weight control, elevates mood, 
                  and reduces disease risk, fostering wellness and longevity.
                </p>
              </div>
            </div>
            
            <div className="tip-item">
              <img src="/icon-sleep.svg" alt="Adequate sleep" />
              <div>
                <h3>Adequate sleep</h3>
                <p>
                  Sleep enhances mental clarity, emotional stability, and physical 
                  wellness, promoting overall restoration and rejuvenation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
