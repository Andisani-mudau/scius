# Make sure python is installed
# pip install nfcpy pyscard
# pip install pyscard
# Download the driver from the card manufacture website (check at the very bottom of this file), install and run it.
# Run python emv-card-read-write.py

import nfc
from smartcard.System import readers
from smartcard.util import toHexString


def handle_nfc(tag):
    """
    Handles NFC tag operations.
    """
    print(f"NFC Tag Detected: {tag.type}")
    print(f"Tag ID: {tag.identifier.hex()}")

    if tag.ndef:
        print("NDEF Records Found:")
        for record in tag.ndef.records:
            print(f"Record Type: {record.type}, Data: {record.text}")
    else:
        print("This is a non-NDEF tag.")
        try:
            data = tag.read(0)
            print(f"Raw Data: {data.hex()}")
        except Exception as e:
            print(f"Error reading NFC data: {e}")


def handle_emv():
    """
    Handles EMV card operations.
    """
    # Get available readers
    available_readers = readers()
    if not available_readers:
        print("No EMV readers found.")
        return

    reader = available_readers[0]  # Select the first reader
    print(f"Using reader: {reader}")

    # Connect to the card
    connection = reader.createConnection()
    connection.connect()

    # APDU Command to select a payment application (e.g., AID for Visa)
    SELECT_APDU = [0x00, 0xA4, 0x04, 0x00, 0x07, 0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10, 0x00]
    response, sw1, sw2 = connection.transmit(SELECT_APDU)

    # Display response
    print(f"Response: {toHexString(response)}")
    print(f"Status: {hex(sw1)} {hex(sw2)}")

    if sw1 == 0x90 and sw2 == 0x00:
        print("Successfully selected the application.")
    else:
        print("Failed to select application on the EMV card.")


def main():
    """
    Main program to detect and handle NFC or EMV cards.
    """
    print("Waiting for a card or tag...")

    # Use nfcpy to detect NFC tags
    try:
        with nfc.ContactlessFrontend('usb') as clf:
            print("NFC Reader is active. Place your card/tag on the reader.")
            clf.connect(rdwr={'on-connect': handle_nfc})
    except Exception as e:
        print(f"NFC handling failed: {e}")
        print("Trying to detect an EMV card...")

        # If NFC fails, try pyscard for EMV cards
        try:
            handle_emv()
        except Exception as emv_error:
            print(f"EMV handling failed: {emv_error}")


if __name__ == "__main__":
    main()


# List of major NFC/EMV reader manufacturers and their official websites for drivers and support:

# 1. Advanced Card Systems (ACS)
# Website: https://www.acs.com.hk/
# Support Page: https://www.acs.com.hk/en/support/
# Known for: ACR122U, ACR38, ACR1281, and similar NFC readers.

# 2. HID Global (OMNIKEY)
# Website: https://www.hidglobal.com/
# Support Page: https://www.hidglobal.com/products/omnikey
# Known for: OMNIKEY series (e.g., 3021, 3121, 5422).

# 3. Identiv
# Website: https://www.identiv.com/
# Support Page: https://support.identiv.com/
# Known for: Identiv Smart Card Readers, SCR series.

# 4. Feitian Technologies
# Website: https://www.ftsafe.com/
# Support Page: https://www.ftsafe.com/Support
# Known for: Feitian R502, ACR family alternatives.

# 5. Gemalto (Now Thales)
# Website: https://www.thalesgroup.com/
# Support Page: https://supportportal.gemalto.com/
# Known for: Gemalto IDBridge and Ezio card readers.

# 6. ZCS ACR (Zoweetek)
# Website: http://www.zoweetek.com/
# Known for: Zoweetek Smart Card Readers.

# 7. SCM Microsystems (Now Identiv)
# Website: Redirects to Identiv’s website https://www.identiv.com/
# Known for: Older smart card readers such as SCR3310.

# 8. DUALi
# Website: http://www.duali.com/
# Known for: DRAGON NFC readers and DU-Series.

# 9. Elatec
# Website: https://www.elatec.com/
# Support Page: https://www.elatec.com/products
# Known for: TWN4 MultiTech Readers.

# 10. SpringCard
# Website: https://www.springcard.com/
# Support Page: https://www.springcard.com/en/knowledgebase
# Known for: SpringCard Prox’N’Roll NFC readers.

# 11. Sony
# Website: https://www.sony.net/
# Known for: Sony NFC solutions like RC-S380 readers.

# 12. IDEX Biometrics
# Website: https://www.idexbiometrics.com/
# Known for: Biometric smart card technology.

# 13. Evolis
# Website: https://www.evolis.com/
# Support Page: https://support.evolis.com/
# Known for: Primacy NFC and card personalization printers.

# 14. STMicroelectronics
# Website: https://www.st.com/
# Known for: NFC chips and hardware for integration.

# 15. NXP Semiconductors
# Website: https://www.nxp.com/
# Known for: MIFARE NFC solutions and reader ICs.

# 16. Broadcom
# Website: https://www.broadcom.com/
# Known for: EMV/NFC chipsets in card readers.
