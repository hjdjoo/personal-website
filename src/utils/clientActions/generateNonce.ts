// Adapted from https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#converting_a_digest_to_a_hex_string



function secureRandom(): number {
  const arr = new Uint8Array(1);
  crypto.getRandomValues(arr);
  return arr[0];
}

const randomValues = new Array(32);

for (let i = 0; i < randomValues.length; i++) {

  randomValues[i] = secureRandom();

}



const nonce = btoa(
  String.fromCharCode(...randomValues),
);
const encoder = new TextEncoder();
const encodedNonce = encoder.encode(nonce);


const hashedNonce = async (encodedNonce: Uint8Array) => {

  const hashBuffer = await crypto.subtle.digest("SHA-256", encodedNonce);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  return hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

};

// Use 'hashedNonce' when making the authentication request to Google
// Use 'nonce' when invoking the supabase.auth.signInWithIdToken() method
