const calculateMetricBMI = (weight, height) => {
    var heightMeters = height / 100
    var results = (weight / (heightMeters * heightMeters)).toFixed(2)
    return results
}