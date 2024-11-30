import hid

# Define MSRX6 HID Device Vendor ID and Product ID
VENDOR_ID = 0xXXXX  # Replace with MSRX6 Vendor ID
PRODUCT_ID = 0xYYYY  # Replace with MSRX6 Product ID

def connect_to_device():
    try:
        # Open the HID device
        device = hid.device()
        device.open(VENDOR_ID, PRODUCT_ID)
        print("Connected to MSRX6!")
        return device
    except Exception as e:
        print(f"Failed to connect to HID device: {e}")
        return None

def listen_for_card(device):
    print("Listening for card swipes. Swipe a card...")
    try:
        while True:
            data = device.read(64)  # Adjust size based on device report length
            if data:
                print(f"Card Data Received: {bytes(data).decode('utf-8', errors='ignore')}")
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
