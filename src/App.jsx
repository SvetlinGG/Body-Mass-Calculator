import { useBmi } from "../hooks/useBmi.js";
import UnitToggle from "../components/bmi/UnitToggle.jsx";
import MetricInputs from "../components/bmi/MetricInputs.jsx";
import ImperialInputs from "../components/bmi/ImperialInputs.jsx";
import ResultPanel from "../components/bmi/ResultPanel.jsx";

export default function App() {
  const bmiState = useBmi();

  return (
    <div className="container" style={{ padding: "2rem 0 4rem" }}>
      <header style={{ display: "grid", gap: "0.75rem", marginBottom: "1.5rem" }}>
        <h1 style={{ margin: 0, fontSize: "2.25rem", lineHeight: 1.1 }}>
          Body Mass Index Calculator
        </h1>
        <p style={{ margin: 0, color: "var(--muted)", maxWidth: 60 + "ch" }}>
          Enter your details below to calculate your BMI.
        </p>
      </header>

      <main style={{ display: "grid", gap: "1.25rem" }}>
        <section className="card" style={{ padding: "1.25rem" }}>
          <UnitToggle unit={bmiState.unit} onChange={bmiState.setUnit} />

          <div style={{ marginTop: "1rem" }}>
            {bmiState.unit === "metric" ? (
              <MetricInputs value={bmiState.metric} onChange={bmiState.setMetric} />
            ) : (
              <ImperialInputs value={bmiState.imperial} onChange={bmiState.setImperial} />
            )}
          </div>

          <div style={{ marginTop: "1.25rem" }}>
            <ResultPanel
              unit={bmiState.unit}
              bmi={bmiState.bmi}
              classification={bmiState.classification}
              healthyRange={bmiState.healthyRange}
              metricHeightCm={bmiState.metric.heightCm}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

