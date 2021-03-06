import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Services } from "../components/Services";
import { Contact } from "../components/contact/Contact";
import { AboutUs } from "../components/AboutUs";
import { Team } from "../components/Team";
import Properties from "../components/property";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const myLoader2 = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Home({ locale }) {
  const router = useRouter();
  const { t, i18n } = useTranslation(locale, "common");
  return (
    <>
      <div>
        <Services />
        <Properties />
        <AboutUs
          aboutUsText={t("aboutUsText1")}
          aboutUsText1={t("aboutUsText2")}
          aboutUsText2={t("aboutUsText3")}
          aboutUsText3={t("aboutUsText4")}
        />
        <Team teamText1={t("teamText1")} />
        <Contact />
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale = "es-ES" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
