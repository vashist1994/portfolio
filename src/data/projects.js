// Replace descriptions, metrics, and links with verified, non-confidential details.
export const projects = [
  {
    id: "lenovo-log-forecaster",
    number: "01",
    title: "Lenovo Log Forecaster",
    category: "Machine Learning",
    type: "PREDICTIVE MAINTENANCE",
    description: "A predictive analytics workflow for extracting signals from storage-system logs and identifying patterns associated with potential PSU or battery failures.",
    challenge: "Operational logs are noisy, nested, and high-volume. The goal is to turn raw telemetry into consistent, model-ready features.",
    approach: ["Log parsing & feature engineering", "Time-series and anomaly signals", "Failure-risk modelling workflow"],
    stack: ["Python", "Pandas", "Time Series", "ML"],
    accent: "mint",
    repoUrl: ""
  },
  {
    id: "oci-ml-workflow",
    number: "02",
    title: "OCI ML Workflow",
    category: "Data Engineering",
    type: "CLOUD ML PIPELINE",
    description: "A cloud-oriented machine-learning workflow focused on preparing data, training models, and organizing repeatable experimentation and deployment steps.",
    challenge: "Make the path from data preparation to model delivery easier to reproduce, monitor, and maintain.",
    approach: ["Data preparation pipeline", "Experiment and model workflow", "Deployment-oriented design"],
    stack: ["Python", "OCI", "ML Pipelines", "MLOps"],
    accent: "violet",
    repoUrl: ""
  },
  {
    id: "steris-analytics",
    number: "03",
    title: "Steris Analytics",
    category: "Machine Learning",
    type: "APPLIED ANALYTICS",
    description: "An applied data-science project showcasing structured analysis, feature development, and model-driven insights for operational decision support.",
    challenge: "Transform source data into reliable features and interpretable insights that can support a real business workflow.",
    approach: ["Data quality and exploration", "Feature engineering", "Model evaluation and communication"],
    stack: ["Python", "SQL", "Statistics", "Visualization"],
    accent: "blue",
    repoUrl: ""
  },
  {
    id: "fraud-analytics",
    number: "04",
    title: "Fraud Analytics",
    category: "Machine Learning",
    type: "RISK & ANOMALY DETECTION",
    description: "A machine-learning concept for identifying suspicious transaction patterns while balancing detection quality with the cost of false positives.",
    challenge: "Fraud signals can be rare and change over time, making class imbalance and evaluation strategy especially important.",
    approach: ["Imbalanced-data evaluation", "Risk signal engineering", "Precision/recall-focused assessment"],
    stack: ["Python", "Scikit-learn", "SQL", "Analytics"],
    accent: "amber",
    repoUrl: ""
  },

];