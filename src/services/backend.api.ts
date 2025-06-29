import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Get VPS Metrics
 */
export const getVpsMetrics = async (period = "month") => {
  try {
    const res = await axios.get(`${BASE_URL}/metrics/vps`, {
      params: { period }
    });
    return { data: res.data, error: null };
  } catch (error) {
    console.error("getVpsMetrics error:", error);
    return { data: null, error };
  }
};

/**
 * Get Storage Info
 */
export const getStorageInfo = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/metrics/storage`);
    return { data: res.data, error: null };
  } catch (error) {
    console.error("getStorageInfo error:", error);
    return { data: null, error };
  }
};

/**
 * Health Check
 */
export const healthCheck = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/health`);
    return { data: res.data, error: null };
  } catch (error) {
    console.error("healthCheck error:", error);
    return { data: null, error };
  }
};
