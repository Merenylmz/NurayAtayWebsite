import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import nailsImg from "../../public/img/task1.png";
import benefitTwoImg from "../../public/img/task2.png";
import makeUpImg from "../../public/img/task3.png";
import bodyImg from "../../public/img/task4.png";

const benefitOne = {
  title: "Protez Tırnak",
  desc: "Estetik ve zarafeti birleştiren protez tırnak uygulamalarımızla kusursuz ellere sahip olun. Hem dayanıklı hem de şık tırnaklarla her an bakımlı hissedin.",
  image: nailsImg,
  bullets: [
    {
      title: "Sadece dayanıklı değil, aynı zamanda estetik olarak kusursuz tırnaklara sahip olmak ister misiniz",
      desc: "Alanında uzman ekibimiz, en kaliteli malzemelerle tırnaklarınıza zarif bir görünüm kazandırır.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Şık ve güçlü tırnaklara sahip olmak artık hayal değil.",
      desc: "Profesyonel uygulamalarımızla, tırnaklarınıza istediğiniz uzunluk ve şekli kazandırıyoruz.",
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
      desc: "İstenmeyen tüylerden kurtulmanın en modern ve güvenli yolu lazer epilasyon.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Ellerinizle Fark Yaratın",
      desc: "Protez tırnaklarımızla kırılmalara elveda diyerek uzun süre kalıcı, bakımlı ve dikkat çeken tırnaklarla her an mükemmel görünün.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Kusursuz Eller, Uzun Süre Kalıcı Güzellik",
      desc: "Kaliteli ve dayanıklı tırnak tasarımlarıyla elleriniz her zaman bakımlı ve dikkat çekici görünür.",
      icon: <CheckBadgeIcon />,
    },
  ],
};

const benefitThree = {
  title: "Kalıcı Makyaj",
  desc: "Kaş, dudak ve eyeliner gibi bölgelere uygulanan kalıcı makyaj ile doğal güzelliğinizi ortaya çıkarın. Zamandan tasarruf edin ve her an makyajlı gibi görünün.",
  image: makeUpImg,
  bullets: [
    {
      title: "Mikroblading ve Kalıcı Makyaj",
      desc: "Doğal güzelliğinizi kalıcı olarak ön plana çıkarın.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Zamandan Tasarruf, Sonsuz Güzellik",
      desc: "Kalıcı makyajla hayatınızı kolaylaştırın. Spor yaparken, yüzerken veya gün içinde makyajınızın bozulmasından endişe etmeyin.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Kalıcı Güzelliğin Sırrı: Kalıcı Makyaj",
      desc: "Sabahları makyajla vakit kaybetmekten sıkıldınız mı? Kalıcı makyaj uygulamalarımızla kaş, eyeliner ve dudaklarınızda her an kusursuz bir görünüm yakalayın.",
      icon: <CheckBadgeIcon />,
    },
  ],
};


const benefitFour = {
  title: "Vücut ve Cilt Bakımı",
  desc: "Cildinizin ihtiyacına yönelik özel bakımlarımızla tanışın. Derinlemesine temizlik, nemlendirme ve yenileme işlemleriyle cildinizin canlılığını geri kazandırın.",
  image: bodyImg,
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
