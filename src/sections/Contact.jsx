import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import "./css/Contact.css";
const userSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
  });


  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_wdcomuz",
        "template_wwlr8mk",
        data,
        "7qkJteyD1v-6jOfq4"
      )
      .then((result) => console.log(result.text))
      .catch((error) => console.log(error.text));
    reset();
  };

  return (
    <>
      <div id="contact"></div>
      <div className="contact__section">
        <div className="contactForm">
          <h1 className="contactTitle">Kontakt</h1>
          <h3 className="contactSubTitle">
            Zaufaj doświadczeniu i skontaktuj się, aby uzyskać profesjonalną
            pomoc prawną dostosowaną do Twoich potrzeb.
          </h3>
          <hr className="hrContact" />
          <div className="input__section">
            <form className="inputFields" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="inputName"
                {...register("name")}
                placeholder="Twoje Imię *"
              />
              <div className="error__section">
                {errors.name && (
                  <span className="errorName">Imię musi zawierać co najmniej 3 znaki</span>
                )}
              </div>
              <input
                className="inputEmail"
                {...register("email")}
                placeholder="Twój E-mail *"
              />
              <div className="error__section">
                {errors.email && (
                  <span className="errorEmail">Niepoprawny e-mail</span>
                )}
              </div>
              <div className="msg">
                <textarea
                  className="inputText"
                  {...register("message")}
                  placeholder="Wiadomość *"
                ></textarea>
                <div className="error__section">
                  {errors.message && (
                    <span className="errorText">Wiadomoćś powinna zawierać co najmniej 10 znaków</span>
                  )}
                </div>
              </div>
              <input className="btn" type="submit" value="Wyślij wiadomość" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
