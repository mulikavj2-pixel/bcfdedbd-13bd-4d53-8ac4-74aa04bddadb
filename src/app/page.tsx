"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Zap, Building2, CheckCircle, Workflow, Layers, Users, Trophy, Handshake, Linkedin, Twitter, Github } from "lucide-react";

export default function TechVisionPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="floatingGradient"
      cardStyle="floating"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered 
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Insights", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
          brandName="TechVision"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070881857-915oknca.jpg"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Enterprise IT Solutions Built for Growth"
          description="Empower your business with cutting-edge technology infrastructure, cloud services, and expert IT consulting tailored to your unique needs."
          tag="IT Excellence"
          tagIcon={Zap}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070889693-mtqoj79g.jpg"
          imageAlt="IT dashboard interface"
          frameStyle="browser"
          buttons={[
            { text: "Schedule Consultation", href: "contact" },
            { text: "View Services", href: "services" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Who We Are"
          tagIcon={Building2}
          title="Transforming IT Challenges into Strategic Advantages"
          description="Founded in 2010"
          subdescription="Serving Fortune 500 Companies"
          icon={CheckCircle}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070891522-mowvruzt.jpg"
          imageAlt="TechVision office team"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardEight
          title="Our Proven IT Delivery Process"
          description="Streamlined methodology ensuring successful digital transformation at every stage"
          tag="Methodology"
          tagIcon={Workflow}
          features={[
            {
              id: 1,
              title: "Strategy & Assessment",
              description: "Deep analysis of your IT infrastructure, identifying gaps and opportunities for optimization",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070893230-a9fwp7zt.jpg",
              imageAlt: "Strategy and assessment phase"
            },
            {
              id: 2,
              title: "Design & Planning",
              description: "Custom IT solutions architected specifically for your business objectives and scalability",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070894358-9xh63mqb.jpg",
              imageAlt: "Design and planning phase"
            },
            {
              id: 3,
              title: "Implementation",
              description: "Seamless deployment and integration of solutions with minimal business disruption",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070895643-2lbvufdw.jpg",
              imageAlt: "Implementation phase"
            },
            {
              id: 4,
              title: "Support & Optimization",
              description: "Ongoing monitoring, maintenance, and continuous improvement of your IT systems",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070897077-jztncvdt.jpg",
              imageAlt: "Support and optimization phase"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Core IT Services"
          description="Enterprise-grade solutions designed to enhance security, performance, and scalability"
          tag="Services"
          tagIcon={Layers}
          products={[
            {
              id: "cloud",
              name: "Cloud Infrastructure",
              price: "Custom Pricing",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070898697-95p458uh.jpg",
              imageAlt: "Cloud infrastructure services"
            },
            {
              id: "security",
              name: "Cybersecurity Solutions",
              price: "Custom Pricing",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070899980-hjw66dow.jpg",
              imageAlt: "Cybersecurity protection"
            },
            {
              id: "support",
              name: "24/7 IT Support",
              price: "Custom Pricing",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070900861-82tz4dya.jpg",
              imageAlt: "IT support services"
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFive
          title="Meet Our Leadership"
          description="Experienced professionals dedicated to your IT success"
          tag="Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          team={[
            {
              id: "1",
              name: "David Chen",
              role: "Chief Technology Officer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070902636-nie3s53p.jpg",
              imageAlt: "David Chen, CTO"
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              role: "VP of Solutions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070903571-nkmocn7h.jpg",
              imageAlt: "Sarah Mitchell, VP Solutions"
            },
            {
              id: "3",
              name: "James Rodriguez",
              role: "Head of Security",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070904619-nqk70i7u.jpg",
              imageAlt: "James Rodriguez, Security Lead"
            },
            {
              id: "4",
              name: "Lisa Wang",
              role: "Client Success Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070905857-2chciiq8.jpg",
              imageAlt: "Lisa Wang, Client Success Director"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          title="Our Impact"
          description="Proven results delivering measurable business value to enterprise clients"
          tag="Achievements"
          tagIcon={Trophy}
          metrics={[
            {
              id: "1",
              title: "Enterprise Clients Served",
              subtitle: "Across Fortune 500 companies and growing organizations",
              category: "Business",
              value: "500+"
            },
            {
              id: "2",
              title: "Infrastructure Projects Delivered",
              subtitle: "Successfully implemented with 99.9% uptime guarantee",
              category: "Technology",
              value: "2,000+"
            },
            {
              id: "3",
              title: "Security Incidents Prevented",
              subtitle: "Through proactive monitoring and threat detection",
              category: "Security",
              value: "10,000+"
            },
            {
              id: "4",
              title: "Years of Combined Expertise",
              subtitle: "Industry veterans with proven track record",
              category: "Experience",
              value: "150+"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Partnering with the world's most innovative companies"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070883567-agr1zxmk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070577347-dvzptvw3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070884785-t8nsnq0v.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070291508-c8t9cvzr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070885992-ywea0bda.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070887043-1x6u6kld.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070887867-adxwy5sx.jpg"
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to Transform Your IT Infrastructure?"
          animationType="reveal-blur"
          inputPlaceholder="Enter your email"
          buttonText="Schedule Call"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="TechVision"
          copyrightText="© TechVision, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Cloud Infrastructure", href: "#" },
                { label: "Cybersecurity", href: "#" },
                { label: "IT Support", href: "#" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "#" },
                { label: "Case Studies", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Github, href: "https://github.com", ariaLabel: "GitHub" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}