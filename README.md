#Country Info App
Developed by </a href="https://www.linkedin.com/in/matheusmartinsviana/" target="_blank">me</a>

## How to run

Clone this repository:
```bash
    git clone https://github.com/matheusmartinsviana/country-info-app
```

Open the folder in mainframe: 
```bash
    cd country-info-app
```

Now enter the folder *Backend*:
```bash
    cd backend
    npm install
    npm run dev
```
Make sure it worked if show the message: 'Server running at port 8000'.

Now it is necessary to set the environment variables:
```bash
    Step 1: 
    Create a file with name: .env
```
```bash
    Step 2: 
    Set the environment variables:
    VITE_GET_COUNTRIES_URL=http://localhost:8000/api/v1/countries
    VITE_GET_COUNTRY_URL=http://localhost:8000/api/v1/countryInfo
```
Now open another mainframe:
```bash
    cd country-info-app-frontend
    npm install
    npm run dev
```

Now open your navegator and paste this URL:
```bash
    http://localhost:5173/
```