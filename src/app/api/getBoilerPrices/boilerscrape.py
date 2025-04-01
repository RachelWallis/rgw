from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import json
import time
import re

options = Options()
options.add_argument("--headless")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")

driver = webdriver.Chrome(options=options)

all_boiler_data = []

for URL in urls:
    driver.get(URL)

    # Click the accordion section for Technical Specifications
    try:
        accordion_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//button[@data-testid="showMoreContentActionButton" and @title="Technical specifications"]'))
        )
        driver.execute_script("arguments[0].click();", accordion_button)
        print("Accordion clicked.")

        # Wait up to 10s for the technical specs table to be visible
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "pdp-product-specs"))
        )
        print("Technical specs table is visible.")
    except Exception as e:
        print("Failed to load technical specs table:", e)
        print("Trying longer sleep to let content render...")
        time.sleep(5)

    soup = BeautifulSoup(driver.page_source, "html.parser")

    data = {}

    # Boiler Name
    name_tag = soup.find(attrs={"data-testid": "product-name"})
    data["Boiler Name"] = name_tag.get_text(strip=True) if name_tag else "N/A"

    # Price
    price_tag = soup.find(attrs={"data-testid": "price"})
    data["Price"] = price_tag.get_text(strip=True) if price_tag else "N/A"

    # Image
    image_tag = soup.find(attrs={"data-testid": "pdpImage"})
    if image_tag and image_tag.find("img"):
        data["Product Image"] = image_tag.find("img").get("src")
    else:
        data["Product Image"] = "N/A"

    # Technical Specs
    specs = {}
    accordion = soup.find("table", id=re.compile("pdp-product-specs", re.IGNORECASE))
    if accordion:
        print("Found technical specs table.")
        rows = accordion.find_all("tr")
        for row in rows:
            cells = row.find_all("td")
            if len(cells) == 2:
                key = cells[0].get_text(strip=True)
                value = cells[1].get_text(strip=True)
                print(f"{key}: {value}")  # Debug output
                specs[key] = value
    else:
        print("Technical specs table not found.")

    # Filter only required fields
    required_fields = [
        "Brand", "Flow Rate", "For Use With", "Fuel Type", "Range", "Warranty", "Weight",
        "Energy Rating", "Water Heating Energy Efficiency Class", "Output", "Depth (mm)",
        "Efficiency (SAP 2009)", "Mounting Type", "Supplier Product Code", "Type",
        "Height", "Width", "Model Number"
    ]

    for field in required_fields:
        data[field] = specs.get(field, "N/A")

    all_boiler_data.append(data)

driver.quit()

with open("boilers.json", "w", encoding="utf-8") as f:
    json.dump(all_boiler_data, f, indent=4)

print(f"Scraping completed for {len(all_boiler_data)} products.")