"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Randevu Oluşturmak İçin Ne Yapmalıyım?",
    answer: `Randevunuzu web sitemizdeki iletişim kısmından, telefon numaramız veya sosyal medya hesaplarımız üzerinden kolayca alabilirsiniz. Size en uygun gün ve saat için ekibimizle görüşerek randevunuzu hemen oluşturabilirsiniz.`,
  },
  {
    question: "Kullandığınız Ürünler Güvenli ve Kaliteli mi?",
    answer: "Evet, merkezimizde kullanılan tüm ürünler dermatolojik olarak onaylı, dünya çapında kabul görmüş markalardan oluşmaktadır. Müşterilerimizin sağlığı ve güvenliği bizim için en önemli önceliktir.",
  },
  {
    question: "Yapılan İşlemlerin Kalıcılığı Ne Kadar Sürer?",
    answer:
      "İşlemin türüne göre kalıcılık süresi değişir. Örneğin, protez tırnakların 3-4 haftada bir bakıma ihtiyacı olurken, kalıcı makyaj uygulamaları cilt tipine göre 1-2 yıl kalıcılığını koruyabilir. İşlem sonrası bakım önerilerimizle kalıcılığı uzatabilirsiniz.",
  },
];
