"use client"

export default function Error() {

  return (
    <>
      <div id="error-message"
        className="min-h-screen flex flex-col justify-center items-center">
        <p className="h-full my-2">
          {"Oof sorry T_T"}
        </p>
        <p className="my-2">Would you  mind letting me know something broke?</p>
        <a id="contact-me"
          href="mailto:joo.darryl@gmail.com?subject='Your website is not working'"
          className="underline"
        >Contact Me {">"}</a>
      </div>
    </>
  )
}