function Field({ label, suffix, value, onChange, placeholder = '0'}){
    return (
        <label style={{ display: 'grid', gap: '0.35rem'}} >
            <span style={{ color: 'var(--muted)', fontSize: '0.9rem'}}>{label}</span>
            <div style={{ position: 'relative'}}>
                <input 
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    inputMode="decimal"
                    placeholder={placeholder}
                    style={{
                        width: '100%',
                        padding: '0.9rem 3rem 0.9rem 0.9rem',
                        borderRadius: '12px',
                        border: '1px solid #dbe3ef',
                        outline: 'none',
                    }}
                     />
                     <span
                        style={{
                            position: 'absolute',
                            right: '0.9rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'var(--primary)',
                            fontWeight: 700,
                        }}
                        >
                            {suffix}
                     </span>
            </div>
        </label>
    );
}

export default function MetricInputs({ value, onChange }){

    return (
        <div style={{ display: 'grid', gap: '0.9rem'}} >
            <Field 
                label='Height'
                suffix="cm"
                value={value.heightCm}
                onChange={(v) => onChange((s) => ({...s, heightCm: v }))} 
                />
            <Field 
                label='Weight'
                suffix="kg"
                value={value.weightKg}
                onChange={(v) => onChange((s) => ({...s, weightKg: v }))} 
                />
        </div>
    );
}