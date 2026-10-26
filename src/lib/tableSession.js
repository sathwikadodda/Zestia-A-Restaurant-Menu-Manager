
export const DEVICE_TOKEN_KEY = "zestia-device-token";
export const TABLE_STORAGE_KEY = "zestia-table-number";
export const SESSION_ID_STORAGE_KEY = "zestia-session-id";

const API = "http://localhost:5000/api";

export function getDeviceToken() {
  let token = localStorage.getItem(DEVICE_TOKEN_KEY);

  if (!token) {
    token = crypto.randomUUID();
    localStorage.setItem(DEVICE_TOKEN_KEY, token);
  }

  return token;
}

export function getStoredSession() {
  return {
    tableNumber: localStorage.getItem(TABLE_STORAGE_KEY),
    sessionId: localStorage.getItem(SESSION_ID_STORAGE_KEY)
  };
}

export function saveSession(tableNumber, sessionId) {
  localStorage.setItem(TABLE_STORAGE_KEY, tableNumber);
  localStorage.setItem(SESSION_ID_STORAGE_KEY, sessionId);
}

export function clearStoredSession() {
  localStorage.removeItem(TABLE_STORAGE_KEY);
  localStorage.removeItem(SESSION_ID_STORAGE_KEY);
}

export async function claimTableSession(tableNumber) {
  if (!tableNumber) {
    return {
      success: false,
      error: "invalid_table",
      message: "Please select a valid table."
    };
  }

  try {
    const response = await fetch(`${API}/tables/claim`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tableNumber,
        deviceToken: getDeviceToken()
      })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return {
        success: false,
        error: "claim_failed",
        message: data.message || "Unable to claim table."
      };
    }

    return {
      success: true,
      sessionId: data.sessionId,
      message: data.message
    };
  } catch (error) {
    return {
      success: false,
      error: "network_error",
      message: "Cannot connect to the Zestia server."
    };
  }
}

export async function requestBillSession(sessionId) {
  if (!sessionId) {
    return {
      success: false,
      error: "missing_session",
      message: "No active session found."
    };
  }

  try {
    const response = await fetch(`${API}/sessions/request-bill`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId,
        deviceToken: getDeviceToken()
      })
    });

    const data = await response.json();

    return {
      success: response.ok && data.success,
      error: response.ok ? null : "request_failed",
      message: data.message
    };
  } catch {
    return {
      success: false,
      error: "network_error",
      message: "Cannot connect to the Zestia server."
    };
  }
}
