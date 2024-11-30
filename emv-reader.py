import serial

# Define MSRX6 connection details
PORT = "COM3"  # Replace with your device's port
BAUDRATE = 9600  # Default baud rate for MSRX6
TIMEOUT = 1  # Timeout for serial communication in seconds

def connect_to_msr():
    """
    Establish a connection with the MSRX6 device.
    """
    try:
        msr = serial.Serial(port=PORT, baudrate=BAUDRATE, timeout=TIMEOUT)
        print(f"Connected to MSRX6 on {PORT}")
        return msr
    except Exception as e:
        print(f"Failed to connect to MSRX6: {e}")
        return None

def listen_for_card(msr):
    """
    Continuously listen for card data from the MSRX6.
    """
    print("Listening for card swipes. Swipe a card...")
    try:
        while True:
            if msr.in_waiting > 0:  # Check if data is available
                card_data = msr.read_all().decode('utf-8', errors='ignore').strip()
                if card_data:
                    print(f"Card Data Received: {card_data}")
                    return card_data
            else:
                print("No data received yet. Waiting...")
    except KeyboardInterrupt:
        print("Stopped listening for card swipes.")
    except Exception as e:
        print(f"Error reading card data: {e}")

# Main execution
if __name__ == "__main__":
    msr = connect_to_msr()
    if msr:
        try:
            listen_for_card(msr)
        finally:
            msr.close()
