import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Icon1 from "/public/1.svg";
import Icon2 from "/public/2.svg";
import Icon3 from "/public/3.svg";
const RealEstate = () => {
  let myIcons = [Icon1, Icon2, Icon3];
  const { t, i18n } = useTranslation("realEstate");

  const contentData = t("propertyData", { returnObjects: true });

  const scrollToConciergerie = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("load", scrollToConciergerie);
    return () => window.removeEventListener("load", scrollToConciergerie);
  });

  return (
    <div className="section" onLoad={scrollToConciergerie}>
      <Head>
        <title>RealEstate</title>
      </Head>
      <div className="container">
        <div className="text-center">
          <h1 className=" my-4 text-capitalize" id="property-management">
            {t("propertyHeader")}
          </h1>
        </div>
        <h3 className="text-capitalize property-subheading mt-3">
          {t("propertyTitle")}
        </h3>
        <p className="lead property-subheading-text">{t("propertyText")}</p>
      </div>
      <div className="container">
        <div className="row text-center mt-5">
          {contentData?.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <span className="fa-stack fa-4x">
                  <Image
                    src={myIcons[index]}
                    alt="icon-conciergerie"
                    className="fw-3 svg-inline--fa  fa-house fa-stack-1x fa-inverse img-fluid"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="house"
                    role="img"
                    height={300}
                    width={300}
                    layout="responsive"
                  />
                </span>
                <h4 className="my-3 text-hogar2 text-uppercase">
                  {item.title}
                </h4>
                <ul className="list-unstyled">
                  {item.text.map((content) => {
                    return (
                      <li key={content.id}>
                        <p className="m-0 text-muted text-list">
                          {content.content}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RealEstate;

export const getStaticProps = async ({ locale = "es-ES" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["realEstate", "common"])),
  },
});
