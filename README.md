## Link for backend code
[backend-terraform](https://github.com/VenkateshV14/AWS-Cloud-Resume-Challenge-backend.git)

# Cloud Resume Challenge - Frontend

This is the frontend of my [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/). The website is built using HTML, CSS, and JavaScript, and it's hosted on an Amazon S3 bucket with CloudFront as the CDN.

## 🌐 Live Website

[www.ganeshinfo.life](https://www.ganeshinfo.life)

## 🧰 Tech Stack

- **HTML/CSS/JavaScript** – Static website
- **AWS S3** – For hosting static files
- **AWS CloudFront** – CDN with SSL for global distribution
- **GitHub Actions** – CI/CD for automated deployments

## 🚀 CI/CD

Every time code is pushed to the `main` branch, GitHub Actions:

1. Uploads the files to the S3 bucket.
2. Optionally invalidates the CloudFront cache (to reflect updates immediately).

## 📊 Visitor Counter

The website displays a dynamic visitor count using:

- **AWS Lambda (Python)** – Backend logic
- **DynamoDB** – Stores the counter value
- **API Gateway** – REST endpoint for Lambda

The counter fetches and updates the visitor count every time the site is loaded.

## 📁 Folder Structure
```
cloud-resume-frontend/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── style.css
├── script.js
└── README.md
└── .gitignore
```
## 🔐 SSL
SSL certificate managed by AWS Certificate Manager and applied to the CloudFront distribution for HTTPS.

## 💡 What I Learned
- Static hosting on S3 with CloudFront and HTTPS
- CI/CD using GitHub Actions
- Setting up infrastructure using Terraform 
- Writing Lambda functions in Python
- Secure API integrations with IAM roles
- DNS configuration via GoDaddy
