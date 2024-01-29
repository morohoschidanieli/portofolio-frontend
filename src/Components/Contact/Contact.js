import styled from "styled-components";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useTouchMoveOutside } from "../../hooks/useTouchMoveOutside";

const ContactLayout = styled.div(
  ({ theme }) => ` 
    position:fixed;
    height:auto;
    width:400px;
    right:40px;
    bottom:30px;
    padding:10px;
    background-color:transparent;

    @media screen and (max-width: ${theme.breakpoints.md})  {
    width:auto;
    bottom:0px;
    right:0px;
    padding:20px;
  }`
);

const ContactWrapper = styled.div(
  ({ theme }) => `
    position:relative;
    display:flex;
    flex-direction:column;
    height:100%;
    width:100%;
    `
);

const ContactButtonWrapper = styled.div(
  ({ theme }) => `
    display:flex;
    justify-content:end`
);

const ContactButton = styled.div(
  ({ theme }) => `
  
  display:flex;
  justify-content:center;
  align-items:center;
  height:60px;
  width:60px;
  border-radius:50%;
  cursor:pointer;
  border-image-source:${theme.gradientColor};
  background:${theme.gradientColor};
`
);

const ContactButtonIcon = styled(FontAwesomeIcon)(
  ({ theme }) => `
  color:white;
  font-size:24px
`
);

const ContactForm = styled.div(
  ({ theme }) => `
  display:flex;
  flex-direction:column;
  height:450px;
  border-radius:${theme.console.window.radius};
  padding: ${theme.console.window.padding};
  box-shadow: ${theme.boxShadow};
  margin:10px 0;
  background-color:${theme.console.window.background};
  font-family:${theme.fonts.Courier};
  color:${theme.console.window.fontPathColor};  
  `
);

const ContactFormTitle = styled.div(
  ({ theme }) => `
    font-size: ${theme.fontSizes.console};
    color:${theme.console.window.fontPathColor};  
    margin-bottom:30px;
`
);

const Label = styled.label(
  ({ theme }) => `
  width:100%;
  margin:10px 0px;`
);

const Input = styled.input(
  ({ theme }) => `
  width:100%;
  height:22px;
  padding:4px;
  border:none;
  font-size:16px;
  font-family:${theme.fonts.Courier};
  border-radius: 0.5rem;`
);

const TextArea = styled.textarea(
  ({ theme }) => `
  width:100%;
  padding:4px;
  height:22px;
  border:none;
  resize: none; 
  min-height:100px;
  font-size:16px;
  font-family:${theme.fonts.Courier};
  border-radius: 0.5rem;`
);

const FormControl = styled.div(
  ({ theme }) => `
  text-align:left;
  margin:14px 0px;`
);

const SubmitButton = styled.button(
  ({ theme }) => `
  width:100%;
  background-color:${theme.console.window.fontPathColor};
  border:none;
  border-radius:${theme.console.window.radius};
  height:32px;
  cursor:pointer;
  font-family:${theme.fonts.Courier};
  color:black;
  font-size:16px;`
);

const ErrorMessage = styled.div(
  ({ theme }) => `
  font-size:14px;
  color:red;`
);

const SuccessMessageRequest = styled.div(
  ({ theme }) => `
  width: 100%;
  margin:6px 0;
  `
);

const ErrorMessageRequest = styled.div(
  ({ theme }) => `
  width: 100%;
  margin:6px 0;
  color:red;
  `
);

const initialFormData = {
  name: {
    value: "",
    isValid: undefined,
    regex: new RegExp("([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+"),
    errorMessage: "Name is required",
  },
  email: {
    value: "",
    isValid: undefined,
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    errorMessage: "Please enter a valid email address",
  },
  content: {
    value: "",
    isValid: undefined,
    regex: /^\s*$/g,
    errorMessage: "Message is required",
  },
};

const Contact = ({ show, onClickOutside }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    show: false,
    type: "success",
  });
  const [formData, setFormData] = useState(initialFormData);
  const clickRef = useRef();
  useClickOutside(clickRef, () => hideContactForm());
  useTouchMoveOutside(clickRef, () => hideContactForm());

  const showContactFormHandler = () => {
    setShowContactForm(!showContactForm);
  };

  const hideContactForm = () => {
    setShowContactForm(false);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(process.env.REACT_APP_CONTACT_SERVER_LINK, {
        name: formData.name.value,
        email: formData.email.value,
        content: formData.content.value,
      });
      setIsLoading(false);
      setError({
        message: "Message sent successfully!",
        show: true,
        type: "success",
      });
      setFormData(initialFormData);
    } catch (err) {
      setError({
        message: "An error has occurred!",
        show: true,
        type: "error",
      });
    }
  };

  const onChangeInputHandler = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: {
          value: e.target.value,
          isValid: prevData[e.target.name].regex.test(e.target.value),
          regex: prevData[e.target.name].regex,
          errorMessage: prevData[e.target.name].errorMessage,
        },
      };
    });
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <ContactLayout ref={clickRef} title="Contact">
      <ContactWrapper>
        {showContactForm && (
          <motion.div
            animate={showContactForm ? "open" : "closed"}
            variants={variants}
          >
            <ContactForm autoComplete="false">
              <ContactFormTitle>contact me</ContactFormTitle>
              <form onSubmit={(e) => submitFormHandler(e)}>
                <FormControl>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    onChange={(e) => onChangeInputHandler(e)}
                    id="name"
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={formData.name.value}
                    autoComplete="false"
                    disabled={isLoading}
                  />

                  {formData.name.isValid === undefined ? (
                    ""
                  ) : formData.name.isValid ? (
                    ""
                  ) : (
                    <ErrorMessage>{formData.name.errorMessage}</ErrorMessage>
                  )}
                </FormControl>
                <FormControl>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onChange={(e) => onChangeInputHandler(e)}
                    id="email"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formData.email.value}
                    autoComplete="false"
                    disabled={isLoading}
                  />
                  {formData.email.isValid === undefined ? (
                    ""
                  ) : formData.email.isValid ? (
                    ""
                  ) : (
                    <ErrorMessage>{formData.email.errorMessage}</ErrorMessage>
                  )}
                </FormControl>
                <FormControl>
                  <Label htmlFor="content">Message</Label>
                  <TextArea
                    onChange={(e) => onChangeInputHandler(e)}
                    id="content"
                    placeholder="Your message"
                    name="content"
                    value={formData.content.value}
                    disabled={isLoading}
                  />
                  {formData.content.phone === undefined ? (
                    ""
                  ) : formData.content.phone ? (
                    ""
                  ) : (
                    <ErrorMessage>{formData.content.errorMessage}</ErrorMessage>
                  )}
                </FormControl>
                <SubmitButton
                  disabled={
                    formData.content.value.length === 0 ||
                    !formData.email.isValid ||
                    !formData.name.isValid ||
                    isLoading
                  }
                >
                  {isLoading ? <LoadingSpinner /> : "Submit"}
                </SubmitButton>
                <br />
                {error.show ? (
                  error.type === "success" ? (
                    <SuccessMessageRequest>
                      {error.message}
                    </SuccessMessageRequest>
                  ) : (
                    <ErrorMessageRequest>{error.message}</ErrorMessageRequest>
                  )
                ) : (
                  ""
                )}
              </form>
            </ContactForm>
          </motion.div>
        )}
        <ContactButtonWrapper>
          <motion.div
            initial={{ scale: 0 }}
            animate={
              showContactForm
                ? { rotate: -360, scale: 1.1 }
                : { rotate: 360, scale: 1 }
            }
          >
            <ContactButton onClick={() => showContactFormHandler()}>
              <ContactButtonIcon icon={faCommentDots} />
            </ContactButton>
          </motion.div>
        </ContactButtonWrapper>
      </ContactWrapper>
    </ContactLayout>
  );
};

export default Contact;
