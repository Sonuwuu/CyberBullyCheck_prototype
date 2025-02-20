Cyberbullying Detection Chrome Extension!!!
This project provides a Chrome Extension that allows users to select text on a webpage and check if it contains cyberbullying content. The selected text is sent to a Flask API, which processes the text using a pre-trained XGBoost model and returns the classification result.

Features

Users can select any text on a webpage and check if it contains cyberbullying content.
The text is sent to a Flask API for prediction.
The result (Bully / Non-Bully) is displayed as an alert in the browser.
Uses TF-IDF vectorization and XGBoost classification model.

1️⃣ Setting Up the Flask API (Backend)
Prerequisites
Install Python 3.x (Ensure it's added to PATH)
Install pip (Python package manager)
Install virtualenv (optional but recommended)
Installation Steps

Clone the repository

git clone https://github.com/your-repo/cyberbullying-extension.git
cd cyberbullying-extension

Create and activate a virtual environment (Recommended)

python -m venv myenv
source myenv/bin/activate   # For Mac/Linux
myenv\Scripts\activate      # For Windows

Install dependencies

pip install -r requirements.txt

Run the Flask API

python app.py
This will start the Flask server on http://127.0.0.1:5000.

2️⃣ Installing and Running the Chrome Extension
Steps to Install
Open Chrome and go to chrome://extensions/
Enable Developer Mode (toggle in the top-right corner).
Click on "Load unpacked".
Select the extension/ folder inside the project directory.
The extension should now appear in your Chrome toolbar.

How to Use
Select any text on a webpage.
Right-click and select "Check for Cyberbullying".
The extension will send the selected text to the Flask API.
If the text is bullying-related, an alert box will show the result.

3️⃣ API Endpoints
Method	Endpoint	Description
POST	/predict	Send text to classify as "Bully" or "Non-Bully".

4️⃣ Troubleshooting
Flask API Issues
If python is not recognized:
Try python3 app.py or check if Python is installed correctly.
If Flask doesn't start:
Ensure all dependencies are installed using pip install -r requirements.txt.
Chrome Extension Issues
If the extension doesn’t appear, ensure you have enabled Developer Mode and selected the correct folder.
If it doesn't work, check the JavaScript console (F12 → Console tab) for errors.
