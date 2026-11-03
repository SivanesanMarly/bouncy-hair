export function validateBooking(b) {
  const errors = {};
  if (!b.name || b.name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^[6-9]\d{9}$/.test((b.phone || "").replace(/\D/g, "").slice(-10))) errors.phone = "Enter a valid 10-digit mobile number.";
  if (!b.service) errors.service = "Choose a service.";
  if (!b.date || b.date < new Date().toISOString().slice(0, 10)) errors.date = "Pick today or a later date.";
  if (!b.time) errors.time = "Pick a time.";
  return errors;
}
