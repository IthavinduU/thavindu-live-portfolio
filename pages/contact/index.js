import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { BsArrowRight } from "react-icons/bs";
import { sendEmail } from "../../lib/email";
import Head from "next/head";
import Modal from "react-modal";

Modal.setAppElement("#__next"); // To avoid screen reader issues

const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (message) => {
    setModalContent(message);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await sendEmail(formData);

    if (response.success) {
      openModal("Message sent successfully!");
      e.target.reset();
    } else {
      openModal("Error! Failed to send the message.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Get in touch with Thavindu Liyanage. Send a message or inquiry through the contact form."
        />
      </Head>
      <div className="h-full bg-primary/30">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          {/* text & form */}
          <div className="flex flex-col w-full max-w-[700px]">
            {/* text */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              Let me hear <span className="text-accent">what you got.</span>
            </motion.h2>
            {/* form */}
            <motion.form
              onSubmit={handleSubmit}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              {/* input group */}
              <div className="flex gap-x-6 w-full">
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input"
                  required
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder="subject"
                className="input"
              />
              <textarea
                name="message"
                placeholder="message"
                className="textarea"
                required
              ></textarea>
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Send
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
              <p>Hate Forms? No Worries</p>
              <a
                href="mailto:thavindul@gmail.com"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Email Me
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </a>
            </motion.form>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Notification Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div>{modalContent}</div>
        <button onClick={closeModal}>Close</button>
      </Modal>

      <style jsx global>{`
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          background: grey;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .overlay {
          background: rgba(0, 0, 0, 0.75);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Contact;
