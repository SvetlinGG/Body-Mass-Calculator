function round1(n){
    return Math.round(n * 10) / 10;
}

export default function ResultPanel({ unit, bmi, classification, healthyRange, metricHeightCm}){
     const hasResult = bmi != null && isFinite(bmi);

     return (
        <div className="result-panel">
            {!hasResult ? (
                <>
                <h2>Welcome</h2>
                <p>
                Enter your height and weight and you'll see your BMI result here.
                </p>
                </>
            ) : (
                <>
                <div className="bmi-result">
                    <div className="bmi-label">Your BMI is...</div>
                    <div className="bmi-value">
                        {round1(bmi)}
                    </div>
                    <div className="bmi-classification">
                        {classification?.label ?? '-'}
                    </div>
                </div>

                {unit === 'metric' && healthyRange && metricHeightCm ? (
                    <p className="healthy-range">
                        Your healthy weight range is between {" "}
                        <strong>
                            {Math.round(healthyRange.min)}kg - {Math.round(healthyRange.max)}kg
                        </strong>
                        .
                    </p>
                ) : null}
                </>
            )}
        </div>
     );
}