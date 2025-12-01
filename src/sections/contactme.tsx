import React, { useRef, useState } from "react";
import {
  Divider,
  Form,
  Input,
  Textarea,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  useDraggable,
} from "@heroui/react";
import { IoIosSend } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";

import { title, subtitle } from "@/components/primitives";

export default function Contactme() {
  const [errors, setErrors] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const targetRef = useRef(null);
  const { moveProps } = useDraggable({ targetRef });

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.name) newErrors.name = "Nama wajib diisi";
    if (!data.email) newErrors.email = "Email wajib diisi";
    if (!data.pesan) newErrors.pesan = "Pesan wajib diisi";

    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const newErrors = validateForm(data);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    setErrors({});
    e.target.submit();
  };

  return (
    <section
      className="flex flex-col items-center justify-center gap-4 p-8 md:py-10"
      id="contacts"
    >
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "violet", class: "my-0" })}>
          Contact Me
        </h1>
        <Divider className="mx-auto my-4 h-1 bg-primary rounded-full w-20" />
        <h1 className={subtitle({ class: "my-0" })}>
          Punya ide projek baru, atau butuh Web Developer di tim kamu? Jangan
          ragu untuk menghubungiku melalui kontak di bawah ini.
        </h1>
      </div>

      {/* Open Modal Button */}
      <Button color="primary" variant="shadow" onPress={onOpen}>
        <BsFillSendFill /> Chat Saya
      </Button>

      {/* Modal Contact */}
      <Modal
        ref={targetRef}
        backdrop="blur"
        isOpen={isOpen}
        placement="top-center"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader {...moveProps} className="flex flex-col gap-1">
                <span className="flex items-center">
                  <IoIosSend /> &nbsp;Kirim Pesan
                </span>
              </ModalHeader>

              <ModalBody>
                <Form
                  action="https://formsubmit.co/faridramadhan03@gmail.com"
                  method="post"
                  className="w-full space-y-4"
                  validationErrors={errors}
                  onSubmit={onSubmit}
                  onReset={() => setErrors({})}
                >
                  <div className="flex flex-col gap-4 w-full">
                    <Input
                      isRequired
                      name="name"
                      label="Nama"
                      placeholder="Enter your name"
                      errorMessage={
                        errors.name ? errors.name : "Please enter your name"
                      }
                    />

                    <Input
                      isRequired
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                      errorMessage={({ validationDetails }) => {
                        if (validationDetails.valueMissing)
                          return "Please enter your email";
                        if (validationDetails.typeMismatch)
                          return "Please enter a valid email address";

                        return errors.email;
                      }}
                    />

                    <Textarea
                      isRequired
                      name="pesan"
                      label="Pesan"
                      placeholder="Enter your message"
                      errorMessage={errors.pesan}
                    />
                  </div>

                  <Button color="primary" type="submit">
                    Kirim
                  </Button>
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
