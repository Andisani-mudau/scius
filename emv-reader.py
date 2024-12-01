import hid
import re

# MSRX6 HID Vendor ID and Product ID (Replace with actual values)
VENDOR_ID = 0xXXXX  # Replace with MSRX6 Vendor ID
PRODUCT_ID = 0xYYYY  # Replace with MSRX6 Product ID

def connect_to_device():
    try:
        device = hid.device()
        device.open(VENDOR_ID, PRODUCT_ID)
        print("Connected to MSRX6!")
        return device
    except Exception as e:
        print(f"Failed to connect to HID device: {e}")
        return None

def parse_card_data(data):
    # Assuming track data in the form of %Track1Data?;Track2Data?
    track1 = re.search(r'%([^\?]+)', data)  # Track 1 data
    track2 = re.search(r';([^\?]+)\?', data)  # Track 2 data

    card_info = {
        "Title": None,
        "Card Format": "ISO 7811",
        "Card Type": None,
        "Issue Type": None,
        "Issue Date": None,
        "Expiry Date": None,
        "Country": None,
        "First Name": None,
        "Last Name": None,
        "Account Number": None
    }

    # Parse Track 1 Data
    if track1:
        track1_data = track1.group(1)
        # Extract relevant information from Track 1 (this varies by card format)
        # Example regex patterns (will depend on card data format)
        card_info["First Name"] = re.search(r'^[A-Za-z]+', track1_data)  # Example: extract first name
        card_info["Last Name"] = re.search(r'[A-Za-z]+$', track1_data)  # Example: extract last name
    
    # Parse Track 2 Data
    if track2:
        track2_data = track2.group(1)
        # Extract relevant information from Track 2
        # Example: Account number and expiration date
        card_info["Account Number"] = re.search(r'\d+', track2_data)  # Account number
        card_info["Expiry Date"] = re.search(r'(\d{2})(\d{2})$', track2_data)  # Expiry date MMYY

    # More parsing can be added for Title, Issue Type, Country, etc.
    return card_info

def listen_for_card(device):
    print("Listening for card swipes...")
    try:
        while True:
            data = device.read(64)  # Adjust size based on device report length
            if data:
                card_data = bytes(data).decode('utf-8', errors='ignore')
                print(f"Card Data Received: {card_data}")
                card_info = parse_card_data(card_data)
                print(f"Parsed Card Info: {card_info}")
    except KeyboardInterrupt:
        print("Stopped listening for card swipes.")
    except Exception as e:
        print(f"Error reading card data: {e}")
    finally:
        device.close()

if __name__ == "__main__":
    msrx6_device = connect_to_device()
    if msrx6_device:
        listen_for_card(msrx6_device)
