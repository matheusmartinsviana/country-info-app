<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
<img src="https://img.shields.io/github/last-commit/matheusmartinsviana/country-info-app" />
<img src="https://github.com/user-attachments/assets/cc14cb52-a7a7-4ea7-aa43-2e19e85e2764" height="auto" width="700" />
</div>
# Country Info App
This repository has a application using nodejs and reactjs to display country information, with information such as border countries and a population graph. <br>
Developed by <a href="https://www.linkedin.com/in/matheusmartinsviana/" target="_blank">me</a>

## Difficulties
- One of the most difficult tasks I had to deal with in this challenge was manipulating the information I pulled from the backend in the sense of, what if it doesn't exist? I had to do these treatments. <br>
- Another difficulty was managing the functions in the backend (as I needed to use 2 APIs, one with data from the other and all async) <br>
- Change the screen content when the user clicks on another country, as I needed to update the country information and update the graphic information(two diferent components).

## Future improvements
- Improve the UX/UI <br>

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
<br>
Open VS Code and inside country-info-app-frontend follow these steps:
Firstly is necessary to set the environment variables:
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
