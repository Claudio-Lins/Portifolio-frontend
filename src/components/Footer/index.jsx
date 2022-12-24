import { useState } from "react";
import { ImSpinner11 } from "react-icons/im";
import client from 'src/sanity';
import useValidation from "../../hooks/useFormValidation";
import { InputField } from "./InputField";

export function Footer({footer}) {
  const [isLoadding, setIsLoadding] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const {title, copy} = footer

  const {
    value: name,
    isTouched: isNameTouched,
    setValue: setNameValue,
    setIsTouched: setIsNameTouched,
    inputError: nameError,
  } = useValidation((value) => value.trim().length > 3);
  const {
    value: email,
    isTouched: isEmailTouched,
    setValue: setEmailValue,
    setIsTouched: setIsEmailTouched,
    inputError: emailError,
  } = useValidation((value) => value.includes("@") && value.includes("."));
  const {
    value: message,
    isTouched: isMessagelTouched,
    setValue: setMessageValue,
    setIsTouched: setIsMessageTouched,
    inputError: messageError,
  } = useValidation((value) => value.trim().length > 10);

  const isFormTouched = isNameTouched && isEmailTouched && isMessagelTouched;
  const isFormValid = !nameError && !emailError && !messageError  && !isLoadding && isFormTouched;

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoadding(true);
    const contactData = {
      _type: "contact",
      name,
      email,
      message,
    };
    try {
      await client.create(contactData);
      setIsLoadding(false);
      setIsFormSubmitted(true);
    } catch (error) {
      setIsLoadding(false);
      setIsFormError(true);
      console.log(error);
    }
  }

  return (
    <div id="contact" className="bg-background w-full flex flex-col min-h-screen justify-center items-center py-20">
      <div className="w-full max-w-7xl flex flex-col justify-center items-center ">
        <footer className="w-full max-w-sm">
          <h2 className="text-primary text-5xl text-center mb-8">{title}</h2>
          {!isFormSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputField
              id="name"
              label="Nome"
              onChange={setNameValue}
              onBlur={() => setIsNameTouched(true)}
              error={nameError}
            />
            <InputField
              id="email"
              label="Email"
              onChange={setEmailValue}
              onBlur={() => setIsEmailTouched(true)}
              error={emailError}
            />
            <InputField
              id="message"
              label="Mensagem"
              onChange={setMessageValue}
              onBlur={() => setIsMessageTouched(true)}
              error={messageError}
              isTextArea
            />
            {isFormError && (
              <span className="text-error text-xs ml-2 mt-1">
                Ocorreu um erro ao enviar a mensagem
              </span>
            )}
            <button
              disabled={!isFormValid}
              type="submit"
              className={`bg-primary hover:text-white hover:bg-darkPrimary duration-300 rounded-md p-3 mt-4 max-w-sm ${
                !isFormValid && 
                "bg-zinc-500 cursor-not-allowed hover:cursor-not-allowed hover:bg-zinc-500"
              }}`}
            >
              {isLoadding ? (
                <ImSpinner11 className="animate-spin text-center w-full text-zinc-400" />
              ) : "Enviar"}
            </button>
          </form>
          ) : (
            <h3 className="w-full text-white font-semibold">Obrigado por entrar em contacto!</h3>
          )}
          <span className="text-xs text-white mt-10 inline-block text-center w-full">
            {copy} {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </div>
  );
}
