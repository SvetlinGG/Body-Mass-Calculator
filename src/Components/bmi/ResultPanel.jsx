function round1(n){

    return Math.round(n * 10) / 10;
}

export default function ResultPanel({ unit, bmi, classification, healthyRange, metricHeightCm}){
     const hasResult = bmi != null && isFinite(bmi);

     return (
        <div 
            style={{
                background: 'linear-gradient(90deg, var(--primary), #587dff',
                color: 'white',
                borderRadius: '18px',
                padding: '1.1rem',
            }}
        >
            {!hasResult ? (
                <>
                <h2 style={{ margin: 0}}>Welcome</h2>
                <p style={{ margin: '0.35rem 0 0', opacity: 0.9}}>
                Enter your height and weight and you’ll see your BMI result here.
                </p>
                </>
            ) : (
                <>
                <div style={{ display: 'grid', gap: '0.35rem'}} >
                    <div style={{ opacity: 0.95}} >Your BMI is...</div>
                    <div style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1}} >
                        {round1(bmi)}
                    </div>
                    <div style={{ opacity: 0.95}} >
                        {classification?.label ?? '-'}
                    </div>
                </div>

                {unit === 'metric' && healthyRange && metricHeightCm ? (
                    <p style={{ margin: '0.8rem 0 0', opacity: 0.95}} >
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