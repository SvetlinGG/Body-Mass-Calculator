
import { useMemo, useState } from "react";
import { healthyWeightRangeMetric, classifyBmi, calcBmiFromMetric, calcBmiFromImperial,  } from "../utils/bmi.js";


export function useBmi(){
    const [unit, setUnit] = useState('metric');

    const [metric, setMetric] = useState({heightCm: '', weightKg: ''});
    const [imperial, setImperial] = useState({
        heightFt: '',
        heightIn: '',
        weightSt: '',
        weightLb: '',
    });

    const bmi = useMemo(() => {
        return unit === 'metric'
        ? calcBmiFromMetric(metric)
        : calcBmiFromImperial(imperial)
    }, [unit, metric, imperial])

    const classification = useMemo(() => classifyBmi(bmi), [bmi]);

    const healthyRange = useMemo(() => {
        if (unit !== 'metric') return null;
        return healthyWeightRangeMetric(metric.heightCm)
    }, [unit, metric.heightCm]);

    return {
        unit,
        setUnit,
        metric,
        setMetric,
        imperial,
        setImperial,
        bmi,
        classification,
        healthyRange,
    };
}