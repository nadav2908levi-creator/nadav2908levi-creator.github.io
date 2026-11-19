// Firebase web config for the admin panel (the same project as the app). These values are not
// secret: access is enforced by firestore.rules (only uids listed in /admins can edit or publish).
// Leave firebase as null to use the panel in local demo mode only.
window.CHARTORA_ADMIN = {
  firebase: null,
  // firebase: { apiKey: '...', authDomain: '...', projectId: '...', appId: '...' },
};
