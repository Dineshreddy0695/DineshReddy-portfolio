import React from "react";

export const Privacy = () => {
  return (
    <section
      id="privacy-policy"
      className="min-h-screen mt-16 bg-gray-50 py-12 px-6 md:px-20"
    >
      <div className="container mx-auto max-w-5xl space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy explains how our platform collects, uses,
            stores, and protects your personal information when you access or
            interact with our website, mobile application, or related services.
            By using our services, you consent to the practices described in
            this policy. We are fully committed to protecting your privacy and
            ensuring that your personal information is handled responsibly and
            securely. The purpose of this document is to provide you with
            transparency regarding the types of data we gather, how it is
            processed, and what rights you have as a user of our system.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect various types of information depending on how you
            interact with our platform. This includes information you provide
            directly, such as your name, email address, phone number, and
            payment details when creating an account, making a purchase, or
            submitting a query. In addition, we automatically collect certain
            data such as your device information, IP address, browser type,
            access times, and browsing patterns using cookies and tracking
            technologies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sensitive information such as payment credentials are encrypted and
            processed securely through trusted third-party payment gateways.
            Under no circumstances do we sell, trade, or rent your personal data
            to outside parties. We only process your information for legitimate
            business, operational, and legal reasons, and always in compliance
            with applicable data protection laws.
          </p>
        </div>

        {/* How We Use Your Data */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The data collected is used primarily to deliver and improve our
            services. For example, we use your contact details to communicate
            order confirmations, updates, or customer support responses. Your
            browsing activity may be used to personalize your experience by
            showing recommendations or tailored offers. Aggregated data is
            analyzed to understand usage trends and improve platform
            performance. Additionally, your information may be processed to
            detect fraudulent activity, secure transactions, and comply with
            legal obligations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We ensure that only authorized personnel with specific
            responsibilities have access to personal data, and we enforce strict
            internal security policies to prevent misuse or unauthorized
            disclosure.
          </p>
        </div>

        {/* Data Sharing */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">
            Data Sharing & Disclosure
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or rent personal information to marketers or third
            parties. However, we may share limited data with trusted service
            providers who assist in delivering our services, such as payment
            gateways, logistics companies, and analytics providers. These
            partners are contractually obligated to maintain confidentiality and
            use your information only for the specific services they provide.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In rare circumstances, we may disclose your information if required
            by law, regulation, or legal proceedings. We may also share
            aggregated, anonymized data that cannot reasonably identify you for
            research, analytics, or statistical purposes.
          </p>
        </div>

        {/* Data Retention */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">
            Data Retention & Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this policy or as required by law.
            Once data is no longer needed, it is securely deleted or anonymized.
            Industry-standard encryption and multi-layered security measures are
            implemented to protect your information from unauthorized access,
            disclosure, alteration, or destruction.
          </p>
        </div>

        {/* User Rights */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            As a user, you have the right to access, update, correct, or delete
            your personal information. You may also opt out of receiving
            promotional communications at any time. In certain jurisdictions,
            you may have additional rights such as data portability, objection
            to processing, or lodging complaints with data protection
            authorities. Requests regarding your data can be submitted through
            our support channels, and we will respond promptly in accordance
            with applicable laws.
          </p>
        </div>

        {/* Changes to Policy */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy periodically to reflect changes in
            legal requirements, technology, or business practices. Any updates
            will be published on this page with a revised effective date, and we
            encourage users to review it regularly to remain informed.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">
            Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions, concerns, or requests regarding this Privacy
            Policy or our handling of personal data, please contact us via the
            support email or helpline provided on our website. We are committed
            to resolving inquiries in a transparent and timely manner.
          </p>
        </div>
      </div>
    </section>
  );
};
