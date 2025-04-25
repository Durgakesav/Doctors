const API_BASE_URL = 'https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json';

export const doctorService = {
  // Get all doctors
  getAllDoctors: async () => {
    try {
      console.log('Fetching doctors from API...');
      const response = await fetch(API_BASE_URL);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch doctors: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log(`Successfully fetched ${data.length} doctors`);
      
      // Return the data directly without transformation
      return data;
    } catch (error) {
      console.error('Error fetching doctors:', error);
      // Return empty array instead of throwing to prevent app from crashing
      return [];
    }
  },

  // Get doctor by ID
  getDoctorById: async (id) => {
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch doctor');
      }
      const doctors = await response.json();
      const doctor = doctors.find(doc => doc.id === id);
      
      if (!doctor) {
        return null;
      }
      
      // Return the doctor data directly
      return doctor;
    } catch (error) {
      console.error('Error fetching doctor:', error);
      return null;
    }
  },

  // Add new doctor
  addDoctor: async (doctorData) => {
    try {
      // Since this is a mock API, we'll just return the doctor data with a new ID
      return {
        ...doctorData,
        id: Date.now().toString()
      };
    } catch (error) {
      console.error('Error adding doctor:', error);
      throw error;
    }
  },

  // Update doctor
  updateDoctor: async (id, doctorData) => {
    try {
      // Since this is a mock API, we'll just return the updated doctor data
      return {
        ...doctorData,
        id
      };
    } catch (error) {
      console.error('Error updating doctor:', error);
      throw error;
    }
  },

  // Delete doctor
  deleteDoctor: async (id) => {
    try {
      // Since this is a mock API, we'll just return true
      return true;
    } catch (error) {
      console.error('Error deleting doctor:', error);
      throw error;
    }
  }
}; 