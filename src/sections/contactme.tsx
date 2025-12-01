import React from "react";
import { useState } from "react";
import { Divider } from "@heroui/react";
import { Form, Input, Textarea, Button } from "@heroui/react";
import {
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
  const [submitted, setSubmitted] = useState(null);
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const newErrors = {};
    if (!data.name) newErrors.name = "Nama wajib diisi";
    if (!data.email) newErrors.email = "Email wajib diisi";
    if (!data.pesan) newErrors.pesan = "Pesan wajib diisi";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(data);

    // kirim form ke FormSubmit.co
    e.target.submit();
  };

  const targetRef = React.useRef(null);
  const { moveProps } = useDraggable({ targetRef });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
          Punya ide projek baru, atau butuh Web Developer di tim kamu. Jangan
          ragu untuk menghubungiku melalui kontak di bawah ini
        </h1>
      </div>
      <Button color="primary" variant="shadow" onPress={onOpen}>
        <BsFillSendFill /> Chat Saya
      </Button>
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
                  className="w-[100%] justify-center items-center space-y-4"
                  method="post"
                  validationErrors={errors}
                  onReset={() => setSubmitted(null)}
                  onSubmit={onSubmit}
                >
                  <div className="flex flex-col gap-4 w-full">
                    <Input
                      isRequired
                      errorMessage={({ validationDetails }) => {
                        if (validationDetails.valueMissing) {
                          return "Please enter your name";
                        }
                        return errors.name;
                      }}
                      label="Nama"
                      name="name"
                      placeholder="Enter your name"
                    />

                    <Input
                      isRequired
                      errorMessage={({ validationDetails }) => {
                        if (validationDetails.valueMissing) {
                          return "Please enter your email";
                        }
                        if (validationDetails.typeMismatch) {
                          return "Please enter a valid email address";
                        }
                      }}
                      label="Email"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                    />

                    <Textarea
                      isRequired
                      label="Pesan"
                      name="pesan"
                      placeholder="Enter your message"
                      type="pesan"
                    />

                    {errors.terms && (
                      <span className="text-danger text-small">
                        {errors.terms}
                      </span>
                    )}
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
