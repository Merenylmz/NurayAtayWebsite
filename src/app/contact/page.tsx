import { Container } from "@/components/Container";

function Contact() {
    return (
        <Container>
            <div className="min-h-screen py-10 px-4 md:px-20">
                {/* Google Maps Container */}
                <h2 className="text-center text-5xl my-4 font-tangerine font-bold" style={{color: "gold"}}>Iletisim Sayfası</h2>
                <div className="w-full h-96 mb-10 rounded-lg overflow-hidden border-2 border-yellow-400">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.6592785421667!2d28.86094311221424!3d41.032709671227614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb2b9f5fb677%3A0xa6ff6abd9e868f6!2sNuray%20Atay%20Luxury%20Beauty!5e0!3m2!1str!2str!4v1757440675690!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={undefined}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* İletişim Bilgileri */}
                <div className="rounded-lg border border-yellow-400 p-6 md:p-10 grid gap-6 md:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-tangerine text-white mb-4 font-bold" style={{color: "gold"}}>Iletisim Bilgileri</h2>
                        <p className="text-white mb-2">
                            <strong>Telefon:</strong> <a href="tel:+905405344034" className="text-blue-600 hover:underline">+90 540 534 40 34</a>
                        </p>
                        <p className="text-white mb-2">
                            <strong>Email:</strong> <a href="mailto:nurayatayluxurybeauty@gmail.com" className="text-blue-600 hover:underline">nurayatayluxurybeauty@gmail.com</a>
                        </p>
                        <p className="text-white">
                            <strong>Adres(Yazı Halinde):</strong> Merkez, Güngören Cd. No:5/a, 34200 Bağcılar/İstanbul
                        </p>
                        <h2 className="text-4xl font-tangerine text-white mb-4 mt-7 font-bold" style={{color: "gold"}}>Randevu Için</h2>
                        <p className="text-white mb-2">
                            <strong>Randevu:</strong> <a href="https://l.instagram.com/?u=http%3A%2F%2Frande.vu%2Fnuray-atay-luxury-beauty%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaepr39ews6XUYuGGq4gwGkRaT50sahO-0RI-RUCmPDbvw4iZDqfGV1lGsgiPw_aem_qqZEs93XEnYVtuKg4Harqg&e=AT3lD6isFovpoPUEdoxVSYnIfbtjAU9hhDhywc0Udi8tqScJd9IKR95cdpTfTrxibE3zyAQ0eowtajg_Y8DpjkqwASpi62Z8nVpnzuPv0Q" target="_blank" className="text-blue-500">Tıklayın...</a>
                        </p>
                    </div>
                    
                </div>
            </div>

        </Container>
    );
}

export default Contact;