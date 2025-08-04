import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-primary-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Your privacy and data protection rights
          </p>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <h2 className="text-3xl font-bold mb-6 text-primary-navy">1. Data Collection and Processing</h2>
            <p className="mb-6">
              By signing the Rental Agreement, the Lessee confirms that they have been provided with information according to article 19, paragraph 1 of the Personal Data Protection Act (PDPA). The Lessee acknowledges that they are aware that the provision of their personal data is voluntary and that they understand their rights provided by the PDPA. The Lessee gives their unconditional consent for their personal data to be collected, processed, and transferred to third parties for the purposes of concluding and managing the Rental Agreement in compliance with all legal requirements.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-primary-navy">2. Information We Collect</h2>
            <p className="mb-4">We collect and process the following types of personal information:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Personal identification information (name, date of birth, ID/passport number)</li>
              <li>Contact information (phone number, email address, physical address)</li>
              <li>Driver's license information and driving history</li>
              <li>Payment and billing information</li>
              <li>Vehicle usage data and GPS tracking information</li>
              <li>Communication records and customer service interactions</li>
              <li>Insurance and emergency contact information</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-primary-navy">3. Legal Basis for Processing</h2>
            <p className="mb-6">
              We process your personal data based on the following legal grounds:
            </p>
            <ul className="mb-6 list-disc pl-6">
              <li>Contractual necessity for the performance of the rental agreement</li>
              <li>Legal obligations under Bulgarian and EU law</li>
              <li>Legitimate interests in providing safe and secure rental services</li>
              <li>Your explicit consent where required by law</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-primary-navy">4. How We Use Your Information</h2>
            <p className="mb-4">Your personal data is used for the following purposes:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Processing and managing vehicle rental agreements</li>
              <li>Identity verification and creditworthiness assessment</li>
              <li>Vehicle tracking and security monitoring</li>
              <li>Payment processing and billing</li>
              <li>Customer service and support</li>
              <li>Compliance with legal and regulatory requirements</li>
              <li>Marketing communications (with your consent)</li>
              <li>Fraud prevention and security measures</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-primary-navy">5. Data Sharing and Third Parties</h2>
            <p className="mb-4">We may share your personal data with:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Insurance companies for coverage and claims processing</li>
              <li>Payment processors and financial institutions</li>
              <li>Law enforcement agencies when legally required</li>
              <li>Emergency services and healthcare providers when necessary</li>
              <li>Vehicle manufacturers for warranty and safety recalls</li>
              <li>Credit reporting agencies for assessment purposes</li>
              <li>Legal advisors and compliance consultants</li>
              <li>Authorized service providers and business partners</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-primary-navy">6. Data Retention</h2>
            <p className="mb-6">
              We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Generally, we retain rental agreement data for a minimum of 7 years as required by Bulgarian tax and commercial law.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-primary-navy">7. Your Rights Under GDPR and PDPA</h2>
            <p className="mb-4">You have the following rights regarding your personal data:</p>
            <ul className="mb-6 list-disc pl-6">
              <li><strong>Right of Access:</strong> Request copies of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal requirements)</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for voluntary data processing</li>
              <li><strong>Right to Lodge a Complaint:</strong> File complaints with data protection authorities</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-primary-navy">8. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, regular security assessments, and staff training on data protection.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-primary-navy">9. International Data Transfers</h2>
            <p className="mb-6">
              If we transfer your personal data outside the European Economic Area, we ensure appropriate safeguards are in place through adequacy decisions, standard contractual clauses, or other approved mechanisms under GDPR.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-primary-navy">10. Contact Information</h2>
            <p className="mb-4">
              For any questions about this privacy policy or to exercise your rights, please contact our Data Protection Officer:
            </p>
            <div className="mb-6">
              <p><strong>Email:</strong> privacy@luxride.bg</p>
              <p><strong>Phone:</strong> +359 888 123 456</p>
              <p><strong>Address:</strong> 123 Vitosha Boulevard, Sofia 1000, Bulgaria</p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-primary-navy">11. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the effective date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Effective Date:</strong> January 1, 2025<br/>
                <strong>Last Updated:</strong> January 1, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;