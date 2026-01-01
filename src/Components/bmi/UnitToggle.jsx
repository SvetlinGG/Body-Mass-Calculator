
export default function UnitToggle({ unit, onChange }){
    return (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <strong>Enter your details below</strong>

            <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem'}}>
                <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center'}} >
                    <input 
                        type="radio"
                        name="unit"
                        checked={unit === 'metric'}
                        onChange={() => onChange('metric')} 
                        />
                        Metric
                </label>

                <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                    <input 
                        type="radio"
                        name="unit"
                        checked={unit === 'imperial'}
                        onChange={() => onChange('imperial')}
                         />
                         Imperial
                </label>
            </div>
        </div>
    );
}