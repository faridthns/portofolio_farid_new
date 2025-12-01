import React from "react";
import {
  Chip,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDraggable,
} from "@heroui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaRobot, FaShoppingCart, FaWind, FaBuilding } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";

import { title, subtitle } from "@/components/primitives";

export default function Projects() {
  const [selectedItem, setSelectedItem] = React.useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };
  const targetRef = React.useRef(null);
  const { moveProps } = useDraggable({ targetRef, isDisabled: !selectedItem });

  const list = [
    {
      title: "E-commerce",
      icon: <FaShoppingCart />,
      img: "/img/projects/ginsadv.jpg",
      desc: "Website penjualan ini dikembangkan untuk CV Gins ADV sebagai solusi digitalisasi proses pemesanan produk. Sistem ini memungkinkan pelanggan melakukan pemesanan produk melalui fitur keranjang belanja, sementara admin dapat mengelola data produk, pesanan, dan akun pengguna melalui dashboard yang terpisah. Aplikasi ini dibangun dengan desain antarmuka yang responsif untuk memastikan pengalaman pengguna yang optimal di berbagai perangkat. Proyek ini mencerminkan implementasi konsep CRUD, autentikasi, serta manajemen transaksi dalam sistem e-commerce sederhana.",
      tech: ["Codeigniter", "Bootstrap", "Javascript", "Jquery", "Mysql"],
      link: "https://ginsadv.id/",
    },
    {
      title: "Guest Registration",
      icon: <IoMdDocument />,
      img: "/img/projects/tamu.riscon.png",
      desc: "Aplikasi ini merupakan sistem informasi berbasis web yang dikembangkan untuk PT Riscon Victory. Sistem ini menyediakan fitur manajemen buku tamu dan presensi karyawan, dengan dukungan teknologi seperti pengambilan gambar melalui kamera dan pelacakan lokasi untuk validasi kehadiran. Selain itu, tersedia juga opsi input presensi manual bagi admin dan fitur dashboard admin untuk melakukan pengelolaan data, seperti daftar tamu, riwayat presensi, dan data karyawan.",
      tech: ["CodeIgniter", "Javascript", "Bootstrap", "MySql"],
      link: "https://tamu.riscongroup.id/",
    },
    {
      title: "Weather App",
      icon: <FaWind />,
      img: "/img/projects/webcuaca.png",
      desc: "CuacaKu adalah website yang menyediakan informasi perkiraan cuaca terkini untuk berbagai lokasi di seluruh dunia. Dengan antarmuka yang ramah pengguna dan desain responsif, website ini memungkinkan pengguna untuk dengan mudah mendapatkan data cuaca yang akurat dan relevan dengan cara melakukan pencarian berdasarkan nama kota atau nama negara.",
      tech: ["React.js"],
      link: "https://webcuaca.netlify.app/",
    },
    {
      title: "AI Chatbot",
      icon: <FaRobot />,
      img: "/img/projects/nanyaai.png",
      desc: "NanyaAI adalah website chat berbasis kecerdasan buatan yang dirancang untuk membantu kamu mencari jawaban, menulis, belajar, dan berkreasi secara instan. Dengan teknologi AI modern yang terintegrasi dengan groq, NanyaAI mampu memahami konteks percakapan dan memberikan respon yang relevan, alami, serta mudah dipahami layaknya berbicara dengan manusia.",
      tech: ["React.js"],
      link: "https://nanyaai.vercel.app/",
    },
    {
      title: "Company Profile",
      icon: <FaBuilding />,
      img: "/img/projects/geomakreasi.png",
      desc: "Website company profile PT Geo Mandiri Kreasi dirancang sebagai platform informasi resmi perusahaan yang berfokus pada layanan pelatihan dan pengembangan kompetensi di berbagai bidang. Website ini menampilkan tampilan modern, responsif, dan mudah digunakan untuk memudahkan pengunjung mengenal lebih jauh tentang perusahaan serta layanan yang ditawarkan. Website ini dibuat sebagai hasil projek dari program pelatihan PBL yang telah saya ikuti di BBPVP Kota Bekasi",
      tech: ["React.js", "Node.js", "Express.js", "Mysql"],
      link: "http://geomakreasi.pblweb01b01.cloud/",
    },
    {
      title: "Company Profile",
      icon: <FaBuilding />,
      img: "/img/projects/bersama.png",
      desc: "Website company profile PT Dunia Advertising dan PT Bintara Jaya Persada menampilkan profil perusahaan, produk, serta layanan di bidang percetakan dan penyedia sipil. Dilengkapi dengan fitur rating perusahaan, website ini membantu klien mengenal layanan secara transparan dan memperkuat citra profesional kedua perusahaan melalui tampilan modern dan interaktif.",
      tech: ["PHP", "Codeigniter", "Mysql"],
      link: "https://bintarabedaniaga.com/",
    },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center gap-4 p-8 md:py-10"
      id="projects"
    >
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title({ color: "violet", class: "my-0" })}>
          Featured Projects
        </h1>
        <Divider className="mx-auto my-4 h-1 bg-primary rounded-full w-20" />
        <h1 className={subtitle({ class: "my-0" })}>
          Berikut adalah beberapa proyek yang telah saya kerjakan sebagai bagian
          dari perjalanan saya di dunia pengembangan web.
        </h1>
      </div>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-3 justify-items-center py-6">
        {list.map((item, index) => (
          <>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-items-center"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card key={index} className="py-4  max-w-xs w-full">
                <CardHeader className="pb-0 pt-2 px-4 flex items-center">
                  {item.icon}&nbsp;
                  <h4 className="font-bold text-large text-wrap">
                    {item.title}
                  </h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 grid grid-cols gap-3">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={item.img}
                    width={270}
                  />
                  <Button color="primary" onPress={() => openModal(item)}>
                    See project
                  </Button>
                  <div className="flex flex-wrap gap-1">
                    {item.tech.slice(0, 3).map((i, index) => (
                      <Chip key={index} color="secondary" size="sm">
                        {i}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </>
        ))}
      </div>
      <Modal
        ref={targetRef}
        isOpen={!!selectedItem}
        scrollBehavior="inside"
        onOpenChange={(open) => {
          if (!open) closeModal();
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader {...moveProps} className="flex items-center gap-1">
                {selectedItem?.icon}
                {selectedItem?.title}
              </ModalHeader>
              <ModalBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={selectedItem.img}
                  width="100%"
                />
                <p className="text-justify">{selectedItem.desc}</p>
                <div className="flex flex-wrap gap-1">
                  <span>Tech :</span>
                  {selectedItem.tech.map((i, index) => (
                    <Chip key={index} color="secondary" size="sm">
                      {i}
                    </Chip>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <a href={selectedItem.link} rel="noreferrer" target="_blank">
                  <Button color="primary">
                    View live demo <FaExternalLinkAlt />
                  </Button>
                </a>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
