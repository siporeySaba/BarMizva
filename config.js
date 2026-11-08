// ===== ערכו כאן את הפרטים =====
export const firebaseConfig = {
  apiKey: "AIzaSyA_9O-rRhAkD3gdk3nUPFfZEUO7115ygv4",
  authDomain: "barmizva-f3c45.firebaseapp.com",
  projectId: "barmizva-f3c45",
  storageBucket: "barmizva-f3c45.firebasestorage.app",
  messagingSenderId: "258822815245",
  appId: "1:258822815245:web:977b81c3a2e729916bdf44"
};

// המייל שלכם (Google) - רק הוא יוכל לראות את הרשימה ב-admin.html
export const ADMIN_EMAIL = "hagaico100@gmail.com";

export const EVENT = {
  name: "אורי עוז כהן",
  date: "יום שני, 7.12 · כ״ז בכסלו",
  dateISO: "2026-12-07",   // לכפתור "הוסף ליומן"
  time: "19:00",           // אם ריק – השעה לא מוצגת והיומן יוצר אירוע של יום שלם
  place: "מועדון בני נצרים",
  lat: 31.140536,          // מיקום לניווט (Waze / Google Maps)
  lng: 34.313832
};
