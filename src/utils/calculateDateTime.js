/**
 * File: calculateDateTime.js
 * Author: Joseph Koh
 * Description: Contains functions for calculating and formatting datetime
 */

// Function to get current date time in 24h format YYYY-MM-DD HH:mm:ss
export const getCurrentDateTime = () => {
  const now = new Date();

  // Format the date and time
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// Function to get next day midnight date time in 24h format YYYY-MM-DD HH:mm:ss
export const getNextDayMidnightDateTime = () => {
  const now = new Date();

  // Add 2 days to the current date
  const nextDay = new Date(now);
  nextDay.setDate(now.getDate() + 2);

  nextDay.setHours(0, 0, 0, 0); // Set the time to midnight (00:00:00)

  // Format the date and time
  const year = nextDay.getFullYear();
  const month = String(nextDay.getMonth() + 1).padStart(2, "0");
  const day = String(nextDay.getDate()).padStart(2, "0");
  const hours = "00";
  const minutes = "00";
  const seconds = "00";

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// Function to convert datetime to 12 hour format
export const formatDateTimeTo12Hour = (dateTimeString) => {
  const date = new Date(dateTimeString);

  // Extract date
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Extract time
  const hours = date.getHours() % 12 || 12; // Convert 0 to 12 for 12-hour format
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  return `${day}/${month} ${hours}:${minutes} ${ampm}`;
};
