import pywhatkit as kit

# Set recipient's phone number (with country code)
phone_number = "+917307157500"  # Replace with the recipient's number

# Message to be sent
message = "Hello! This is an automated message from Python."

# Send message instantly
kit.sendwhatmsg_instantly(phone_number, message, 10, tab_close=False)

print("Message sent successfully!")
