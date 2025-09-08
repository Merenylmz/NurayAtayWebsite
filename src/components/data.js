import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Protez Tırnak",
  desc: "Estetik ve zarafeti birleştiren protez tırnak uygulamalarımızla kusursuz ellere sahip olun. Hem dayanıklı hem de şık tırnaklarla her an bakımlı hissedin.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Tırnaklarınızda Kusursuz Sanat",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CheckBadgeIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Lazer Epilasyon",
  desc: "Gelişmiş lazer teknolojisi sayesinde istenmeyen tüylerden kalıcı olarak kurtulun. Pürüzsüz ve ipeksi bir cilde kavuşmanın rahatlığını yaşayın.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Kalıcı Pürüzsüzlükle Özgürleşin",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <CheckBadgeIcon />,
    },
  ],
};

const benefitThree = {
  title: "Kalıcı Makyaj",
  desc: "Kaş, dudak ve eyeliner gibi bölgelere uygulanan kalıcı makyaj ile doğal güzelliğinizi ortaya çıkarın. Zamandan tasarruf edin ve her an makyajlı gibi görünün.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <CheckBadgeIcon />,
    },
  ],
};


const benefitFour = {
  title: "Vücut ve Cilt Bakımı",
  desc: "Cildinizin ihtiyacına yönelik özel bakımlarımızla tanışın. Derinlemesine temizlik, nemlendirme ve yenileme işlemleriyle cildinizin canlılığını geri kazandırın.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Cildinize Hak Ettiği Işıltıyı Kazandırın",
      desc: "Uzman ekibimizle cildinize derinlemesine bir nefes aldırın.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Işıltınıza Yeniden Kavuşun",
      desc: "Cildinizin ihtiyaçları size özeldir.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Güzelliğinizin Temeli Sağlıklı Bir Cilt",
      desc: "Lekelerden arındırılmış, pürüzsüz ve sağlıklı bir cilt için size özel programlar hazırlıyoruz.",
      icon: <CheckBadgeIcon />,
    },
  ],
};


export {benefitOne, benefitTwo, benefitFour, benefitThree};
