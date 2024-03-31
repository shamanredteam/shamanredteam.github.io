import React from "react";
import Icon1 from "../../images/web-pentest.svg";
import Icon2 from "../../images/mobile-pentest.svg";
import Icon3 from "../../images/api-pentest.svg";
import Icon4 from "../../images/desktop-pentest.svg";
import Icon5 from "../../images/cloud-pentest.svg";
import Icon6 from "../../images/code-review.svg";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Web App Pentesting</ServicesH2>
          <ServicesP>
            Hidden vulnerabilities can make your website a victim of dangerous attacks. Let's identify and patch them!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Mobile App Pentesting</ServicesH2>
          <ServicesP>
            Your mobile application will be much safer with our unique approach on mobile application penetration testing.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>API Pentesting</ServicesH2>
          <ServicesP>
            Are you sure that your APIs are secure enough? If you haven't put them through penetration testing, you shouldn't be sure.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Desktop App Pentesting</ServicesH2>
          <ServicesP>
            Ensure your desktop applications are not susceptible to cyber threats with our Desktop App Pentesting service. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Cloud Security Assessment</ServicesH2>
          <ServicesP>
            Your cloud infrastructure can also become a victim of attackers. We offer thorough security assessment of your company's cloud assets.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>Secure Code Review</ServicesH2>
          <ServicesP>
            We audit the code base of your applications, identify potentially vulnerable code snippets and recommend remediation steps.  
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
