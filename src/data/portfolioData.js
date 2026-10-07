import { Activity, Cloud, Code2, Container, Database, GitBranch } from 'lucide-react';

export const projects = [
  { number: '01', type: 'Cloud infrastructure', title: 'AWS static portfolio deployment', description: 'A completed React portfolio deployment project prepared for AWS free-tier hosting, with a production build and static-site deployment workflow.', impact: 'Practiced repeatable AWS hosting and automated deployment workflows.', technologies: ['React', 'AWS S3', 'CloudFront', 'Route 53', 'GitHub Actions'], icon: Cloud, color: 'blue', github: 'https://github.com/KyawHtet8/portfolio-site-hosting-with-aws-free-tire' },
  { number: '02', type: 'Full-stack application', title: 'Containerized service platform', description: 'A Spring Boot and React application packaged as independent services with reproducible local development and cloud deployment.', impact: 'Created consistent environments from development through production.', technologies: ['Java', 'Spring Boot', 'React', 'Docker', 'MySQL'], icon: Container, color: 'purple' },
  { number: '03', type: 'Platform engineering', title: 'Kubernetes delivery and observability', description: 'A multi-container workload deployed to Kubernetes with health checks, rolling updates, autoscaling, and operational dashboards.', impact: 'Improved service reliability with visible health and performance signals.', technologies: ['Kubernetes', 'AWS EKS', 'Prometheus', 'Grafana', 'Helm'], icon: Activity, color: 'green' },
  { number: '04', type: 'Academic full-stack system', title: 'RI student management system', description: 'A full-stack student management application developed with a Spring backend and React frontend, organized as separate services with Docker support.', impact: 'Applied full-stack architecture, service integration, and containerized development to a real academic assignment.', technologies: ['Spring', 'React', 'Docker Compose', 'REST API', 'JavaScript'], icon: Database, color: 'purple', github: 'https://github.com/KyawHtet8/RI_Student_Management_System_1' },
];

export const capabilities = [
  { icon: Cloud, title: 'Cloud & Infrastructure', text: 'AWS, Terraform, networking, IAM, S3, EC2, RDS, and CloudFront.' },
  { icon: GitBranch, title: 'CI/CD & Automation', text: 'Reliable build, test, security, and deployment workflows with GitHub Actions.' },
  { icon: Container, title: 'Containers & Platform', text: 'Docker images, Compose environments, Kubernetes workloads, and Helm.' },
  { icon: Code2, title: 'Software Engineering', text: 'Java, Spring Boot, REST APIs, React, relational data, and clean architecture.' },
];

export const toolkit = ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Java / Spring Boot', 'React', 'MySQL', 'Prometheus', 'Grafana'];

export const certifications = [
  { name: 'AWS Cloud Practitioner', status: 'Achieved', progress: 100 },
  { name: 'Multicloud Network Associate', status: 'Achieved', progress: 100 },
  { name: 'AWS Solutions Architect', status: 'Preparing', progress: 60 },
  { name: 'Docker Certified Associate', status: 'Preparing', progress: 70 },
];
