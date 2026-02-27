let wakeLock: WakeLockSentinel | null = null;

export async function requestWakeLock(): Promise<boolean> {
  try {
    if (!("wakeLock" in navigator)) return false;
    wakeLock = await navigator.wakeLock.request("screen");
    return true;
  } catch {
    return false;
  }
}

export async function releaseWakeLock(): Promise<void> {
  try {
    if (wakeLock) {
      await wakeLock.release();
      wakeLock = null;
    }
  } catch {
    // ignore
  }
}