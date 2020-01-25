const calculateMetricBMI = (weight, height) => {
    var heightMeters = height / 100
    var results = (weight / (heightMeters * heightMeters)).toFixed(2)
    return results
}

const getBMIClassification = (BMI) => {
    if (BMI < 18.5){
        return "Underweight"
        }
    else if (BMI < 25){
        return "Healthy"
        }
    else if (BMI < 30) {
        return "Overweight"
        }
}