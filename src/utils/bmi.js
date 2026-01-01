export function calcBmiFromMetric({ heightCm, weightKg }){
    const h = Number(heightCm) / 100;
    const w = Number(weightKg);

    if (!isFinite(h) || !isFinite(w) || h <= 0 || w <= 0) return null;
    return w / (h * h);
}

export function calcBmiFromImperial({ heightFt, heightIn, weightSt, weightLb}){
    const ft = Number(heightFt);
    const inch = Number(heightIn);
    const st = Number(weightSt);
    const lb = Number(weightLb);

    if (![ft, inch, st, lb].every((n) => isFinite(n))) return null;

    const totalInches = ft * 12;
    const totalPounds = st * 14 + lb;
    if ( totalInches <= 0 || totalPounds <= 0) return null;

    return (totalPounds / (totalInches * totalInches)) * 703;
}

export function healthyWeightRangeMetrics(heightCm){
    const h = Number(heightCm) / 100;
    if ( !isFinite(h) || h <= 0) return null;

    const min = 18.5 * h * h;
    const max = 24.9 * h * h;
    return ( min, max);
}