import React from "react";
import Card from "./Card";
import CardPromotion from "./CardPromotion";

function Experience() {
  return (
    <div>
      <CardPromotion
        img="https://pbs.twimg.com/profile_images/1542758734501654528/nzNTx_7V_400x400.jpg"
        name="Tata Consultancy Services"
        desg2="Assitant System Engineer - Trainee"
        desg1="Assitant System Engineer"
        period1="June 2021 - July 2022"
        duration1="1 year 1 month"
        period2="July 2022 - Present"
        duration2="6 months"
        location="Mumbai, Maharashtra"
        desc="Have worked on AWS Cloud with various services like CloudWatch, EC2 and S3."
      />
      <Card
        img="https://media.instamojo.com/imgs/09143a3290684345a2496a1633150658.jpg"
        name="Ethical Edufabrica Pvt. Ltd"
        desg="Student Trainee"
        period="June 2020"
        duration="1 month"
        location="Jabalpur, Madhya Pradesh"
        desc="The training was on Internet of Things (IoT). The training period was 4 weeks. The topics covered during the training were - Internet of Things, Home Automation using NodeMCU and Home Automation using Google Assistant and Fire Alert System."
      />
      <Card
        img="https://navbharattimes.indiatimes.com/tech/gadgets-news/bsnl-cheapest-prepaid-plan-for-users-to-compete-with-airtel-jio-and-vodafone-idea-know-all-benefits/thumb/msid-86422133,imgsize-16258,width-1200,height-900,resizemode-75/bsnl-86422133.jpg"
        name="Bharat Sanchar Nigam Limited"
        desg="Student Trainee"
        period="Nov 2019 - Dec 2019"
        duration="2 weeks"
        location="Jabalpur, Madhya Pradesh"
        desc="The training was on Basic Telecom. The training period was 2 weeks."
      />
      <Card
        img="https://media.licdn.com/dms/image/D4D0BAQFJQh64Duk-ZQ/company-logo_200_200/0/1664517252503?e=2147483647&v=beta&t=1tReM7eeFChNOHfcW9dnMc_B0zvOMy4KXZ_2EYNWA5Q"
        name="West Central Railway"
        desg="Student Trainee"
        period="June 2019"
        duration="1 month"
        location="Jabalpur, Madhya Pradesh"
        desc="The training was in Control Communication, Railnet and Exchange over a period of 30 days. The various equipments related to the named processes are studied."
      />
    </div>
  );
}

export default Experience;
