# Legislacion 2024 Project Deployment Guide

This guide provides a step-by-step procedure to upload, build, and start the Legislacion 2024 project on a VM using PM2. It also includes additional information on how to manage the application once it's running.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Uploading the Project](#uploading-the-project)
3. [Building the Project](#building-the-project)
4. [Starting the Project with PM2](#starting-the-project-with-pm2)
5. [Managing the Project](#managing-the-project)
6. [Additional Information](#additional-information)

## Prerequisites

- Access to the VM.
- Git installed on your local machine and the VM.
- Node.js and npm installed on the VM. Node should be version 20 or higher.
- PM2 installed on the VM.
- SSH access to the VM.

## Uploading the Project

1. **Connect to the VM via SSH**:
```
bash
ssh your-username@vm-ip-address
```

2. **Clone the Project Repository**:
Navigate to the directory where you want to clone the project (e.g., /opt).

````
cd /opt
sudo git clone https://git.vicentelopez.gov.ar/gob/legislacion-2024.git legislacion2024
cd legislacion2024
````

3. **Transfer the .env File**:
On your local machine, use SCP to transfer the .env file to the VM.

````
scp /path/to/your/local/.env your-username@vm-ip-address:/opt/legislacion2024/.env
````
Ensure the .env file is correctly placed in the project directory (/opt/legislacion2024/).

## Building the project

1. **Navigate to project directory**
````
cd /opt/legislacion2024
````

2. **Install project dependencies**
````
npm install
````

3. **Install dotenv package**
````
npm install dotenv
````

4. **Build the project**
````
npm run build
````

## Starting the Project with PM2
To start the project, run:
````
pm2 start npm --name "legislacion2024" -- start
````

You can verify the PM2 status with:
````
pm2 status

````

## Managing the project
To stop de running PM2 process:
````
pm2 stop legislacion2024
````

To restart the process
````
pm2 restart legislacion2024

````
To view the logs:
````
pm2 logs legislacion2024
````

To check the PM2 status
````
pm2 status

````

## Additional information

# Updating the project:
1. **Pull the latest changes**
````
cd /opt/legislacion2024
sudo git pull
````

2. **Install project dependencies and rebuild**
````
npm install
npm run build
````

3. **Restart the project**
````
pm2 restart legislacion2024
````

## Accessing the application
Open your web browser and navigate to http://vm-ip-address:3000 to access the application.