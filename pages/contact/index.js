import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { BsArrowRight } from "react-icons/bs";
import { sendEmail } from "../../lib/email";
import Head from "next/head";
import Modal from "react-modal";

Modal.setAppElement("#__next");

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
        <div className="container mx-auto py-12 sm:py-16 md:py-32 flex flex-col items-center justify-center h-full">
          {/* text */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
            >
              Let me hear <span className="text-accent">what you got.</span>
            </motion.h2>
          </div>

          {/* form */}
          <div className="w-full max-w-[90%] sm:max-w-[700px]">
            <motion.form
              onSubmit={handleSubmit}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col gap-4 sm:gap-6"
            >
              {/* input group */}
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 w-full">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input text-sm sm:text-base p-2 sm:p-4"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input text-sm sm:text-base p-2 sm:p-4"
                  required
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="input text-sm sm:text-base p-2 sm:p-4"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="textarea text-sm sm:text-base p-2 sm:p-4"
                required
              ></textarea>
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[150px] sm:max-w-[170px] px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Send
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[20px] sm:text-[22px]" />
              </button>
              <p className="text-sm sm:text-base">Hate Forms? No Worries</p>
              <a
                href="mailto:thavindul@gmail.com"
                className="btn rounded-full border border-white/50 max-w-[150px] sm:max-w-[170px] px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Email Me
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[20px] sm:text-[22px]" />
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
