import { test, expect } from "@playwright/test";

test("Wrong password handling", async ({ page }) => {
	await page.goto("https://hvaskjer-next-v9gz.vercel.app/profile");

	const emailField = page.getByPlaceholder("Email");
	expect(emailField).not.toBeNull();
	await emailField.fill("wrongemail");

	const passwordField = page.getByPlaceholder("Password");
	expect(passwordField).not.toBeNull();
	await passwordField.fill("wrongpassword");

	const submitButton = page.getByText("Logg Inn");
	await submitButton.click();
	expect(submitButton).not.toBeNull();
});
