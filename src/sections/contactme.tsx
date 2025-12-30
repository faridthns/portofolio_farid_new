import { useRef, useState } from "react";
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
  interface FormValues {
    name: string;
    email: string;
    pesan: string;
  }

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const targetRef = useRef(null);
  const { moveProps } = useDraggable({ targetRef });

  const validateForm = (data: {
    name: string;
    email: string;
    pesan: string;
  }) => {
    const newErrors: Record<string, string> = {};

    if (!data.name) newErrors.name = "Nama wajib diisi";
    if (!data.email) newErrors.email = "Email wajib diisi";
    if (!data.pesan) newErrors.pesan = "Pesan wajib diisi";

    return newErrors;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const newErrors = validateForm(data as any);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    setErrors({});
    (e.currentTarget as HTMLFormElement).submit();
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
          {(_onClose) => (
            <>
              <ModalHeader {...moveProps} className="flex flex-col gap-1">
                <span className="flex items-center">
                  <IoIosSend /> &nbsp;Kirim Pesan
                </span>
              </ModalHeader>

              <ModalBody>
                <Form
                  action="https://formsubmit.co/faridramadhan03@gmail.com"
                  className="w-full space-y-4"
                  method="post"
                  validationErrors={errors}
                  onReset={() => setErrors({})}
                  onSubmit={onSubmit}
                >
                  <div className="flex flex-col gap-4 w-full">
                    <Input
                      isRequired
                      errorMessage={
                        errors.name ? errors.name : "Please enter your name"
                      }
                      label="Nama"
                      name="name"
                      placeholder="Enter your name"
                    />

                    <Input
                      isRequired
                      errorMessage={({ validationDetails }) => {
                        if (validationDetails.valueMissing)
                          return "Please enter your email";
                        if (validationDetails.typeMismatch)
                          return "Please enter a valid email address";

                        return errors.email;
                      }}
                      label="Email"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                    />

                    <Textarea
                      isRequired
                      errorMessage={errors.pesan}
                      label="Pesan"
                      name="pesan"
                      placeholder="Enter your message"
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
