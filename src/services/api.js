/**
 * Client API Service
 */

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Server error processing your message');
    }

    return data;
  } catch (error) {
    throw error;
  }
};
