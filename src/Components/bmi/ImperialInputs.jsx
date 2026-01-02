
export default function ImperialInputs({ value, onChange }){
    const set = (patch) => onChange((s) => ({...s, ...patch}));

    const inputStyle = {
        width: '100%',
        padding: '0.9rem',
        borderRadius: '12px',
        border: '1px solid #dbe3ef',
        outline: 'none',
    };

    return (
        <div style={{ display: 'grid', gap: '0.9rem'}} >
            <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr", gap: '0.75rem'}} >
                <label style={{ display: 'grid', gap: '0.35rem'}}>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}} >Height (ft)</span>
                    <input 
                        style={inputStyle}
                        value={value.heightFt}
                        onChange={(e) => set({ heightFt: e.target.value})}
                        inputMode="numeric"
                        placeholder="0"
                        />
                </label>
                <label style={{display: 'grid', gap: '0.35rem'}} >
                    <span style={{ color: 'var(--muted)', fontSize: '0.9rem'}} >Height (in)</span>
                    <input 
                        style={inputStyle}
                        value={value.heightIn}
                        onChange={(e) => set({ heightIn: e.target.value})}
                        inputMode="numeric"
                        placeholder="0" 
                        />
                </label>
            </div>

            <div style={{display: 'grid',gridTemplateColumns: '1fr 1fr', gap: '0.75rem'}} >
                <label style={{display: 'grid', gap: '0.35rem'}} >
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}} >Weight (st)</span>
                    <input 
                        style={inputStyle}
                        value={value.weightSt}
                        onChange={(e) => set({ weightSt: e.target.value})}
                        inputMode="numeric"
                        placeholder="0" />
                </label>
            </div>
        </div>
    )
}