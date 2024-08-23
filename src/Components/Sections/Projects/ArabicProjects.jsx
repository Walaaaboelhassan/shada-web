import React, { useState } from "react";
import TopSection from "../../TopSection/TopSection";
import img1 from "../../../images/5881775159038296683.jpg";
import financial1 from "../../../images/image.png";
import SmallTitle from "../../SmallTitle/SmallTitle";
import { motion } from "framer-motion";

function ArabicProjects({ showPopup, setShowPopup }) {
  return (
    <div className="projects">
      <TopSection content="" title={"مشاريع الجمعية"} />
      <SmallTitle title="مشاريع الجمعية" />
      <div className="all-projects flex items-center justify-center flex-wrap gap-6 ">
        {showPopup && (
          <div className={`popup`}>
            <motion.div
              onClick={() => setShowPopup(false)}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="cover"
            ></motion.div>
            <motion.div
              initial={{ scale: 0, translate: "-50%" }}
              whileInView={{ scale: 1, translate: "-50%" }}
              transition={{ duration: 1 }}
              className="details shadow-lg"
            >
              <h1>مشاريع الجمعية</h1>
              <div className="about-project flex flex-col items-end">
                <h3>أعداد نادي للهايكنق داخل الأندية الرياضية</h3>
                <p className="w-[80%]"></p>
              </div>
              <div className="about-project goals !pt-0">
                <h3>أهداف المشروع</h3>
                <ol className="info">
                  <li>الوصول الى أكبر شريحة ممكنة من الممارسين</li>
                  <li>اعداد مدربين و مراقبين</li>
                  <li>نشاط مستمر في بيئة آمنه</li>
                </ol>
              </div>
              <div className="financial my-5">
                <img
                  className="w-[80%] m-auto"
                  src={financial1}
                  alt="financial"
                />
              </div>
            </motion.div>
          </div>
        )}
        <div className="project relative" onClick={() => setShowPopup(true)}>
          <motion.h3
            initial={{ scale: 0, bottom: "0", translateX: "-50%" }}
            whileInView={{ scale: 1, bottom: "17px", translateX: "-50%" }}
            transition={{ duration: 0.2 }}
            className="project-name"
          >
            أعداد نادي للهايكنق داخل الأندية الرياضية
          </motion.h3>
          <div className="image" onClick={() => setShowPopup(true)}>
            <img src={img1} alt="" />
          </div>
          <p onClick={() => setShowPopup(true)} className="description">
            {/* اجعل لك خبيئة من عمل صالح تكون صدقةً ترعى بها يتيمًا */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArabicProjects;
