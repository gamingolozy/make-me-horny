// utils/crypto.js
import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.CRYPTO_SECRET_KEY;

// ⚠️ IMPORTANT: Build time par error se bachne ke liye runtime check check lagaya hai
if (!SECRET_KEY && process.env.NODE_ENV === 'production') {
  console.warn("⚠️ Warning: CRYPTO_SECRET_KEY is missing!");
}

// 1. Encrypt Function
export const encryptPassword = (plainPassword) => {
  // Safety Check: Agar password khali hai toh khali string return karo
  if (!plainPassword) return '';
  
  return CryptoJS.AES.encrypt(String(plainPassword), SECRET_KEY || 'fallback-key').toString();
};

// 2. Decrypt Function
export const decryptPassword = (encryptedPassword) => {
  // Safety Check 1: Agar database se encryptedPassword undefined ya khali aaya hai
  if (!encryptedPassword) return '';

  try {
    const bytes = CryptoJS.AES.decrypt(String(encryptedPassword), SECRET_KEY || 'fallback-key');
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    
    // Safety Check 2: Agar decryption fail ho gaya (wrong key ya corrupted data)
    if (!decryptedText) {
      return '[Decryption Failed: Invalid Data or Key]';
    }
    
    return decryptedText;
  } catch (error) {
    console.error("Decryption Error caught:", error.message);
    return '[Decryption Error]';
  }
};
