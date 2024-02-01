import { Client, Account, ID } from "appwrite";

const client = new Client()
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("65b649a83237ed1ea891");

const account = new Account(client);

export const handleSendOTP = async (phoneNumber:any) => {
    try {
      // Create a phone session
      const sessionToken = await account.createPhoneSession(ID.unique(), `+91${phoneNumber}`);
      // Handle success (e.g., show a success message to the user)
      console.log('OTP sent successfully:', sessionToken);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

 export const handleVerifyOTP = async (otp:any) => {
    try {
      // Replace `userId` and `[SECRET]` with the actual values
      const userId = '65b6747b4e38be3dfdfb';
      const session = await account.updatePhoneSession(userId, otp);

      // Handle success (e.g., show a success message to the user)
      console.log('OTP verified successfully:', session);
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };
