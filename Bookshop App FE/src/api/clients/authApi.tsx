import type { AuthResponseModel } from "../models/AuthResponseModel";

export const authApi = {
    verifyGoogleToken: async (googleToken: string): Promise<AuthResponseModel> => {
        const response = await fetch("https://localhost:7105/api/auth/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: googleToken }),
        });

        if (!response.ok) {
            throw new Error(`Backend verification failed: ${response.status} - ${response.text()}`);
        }

        return response.json();
    }
}