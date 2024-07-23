import Script from "next/script";

import { createClient } from "@/utils/supabase/client"


export default async function GoogleButton() {

  const supabase = createClient();

  const signInWithGoogle = async () => {

    const { data, error } = await supabase
      .auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent"
          }
        }
      })

  }



  return (
    <div>
      <Script src="https://accounts.google.com/gsi/client" async></Script>
      <button>

      </button>
    </div>
  )

}