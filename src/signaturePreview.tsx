import React from 'react';
import styles from './SignaturePreview.module.css';

interface FormInputs {
  fullName: string;
  jobPosition: string;
  emailAddress: string;
  phoneNumber: string;
  calendlyUrl: string;
}

interface SignaturePreviewProps {
  inputs: FormInputs;
}

const SignaturePreview: React.FC<SignaturePreviewProps> = ({ inputs }) => {

  const signatureHtml = `
    <table cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; border-collapse: collapse; border-spacing: 0;">
      <tr>
        <td style="padding-top: 24px;">
          <!-- Logo and Name/Position Section -->
          <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="width: 48px;">
                <a aria-label="BN Digital Homepage" href="https://bndigital.co" title="BN Digital Homepage" style="background-color: transparent; text-decoration: none;">
                            <img alt="BN Digital Logo" src="https://cdn.bndigital.co/images/signature_logo_gray_1x.png">
                </a>
              </td>                    
              <td style="width: 24px;"></td>
              <td>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 20px; font-weight: 700; line-height: 24px; text-align: left; color: #262523;">
                      ${inputs.fullName}
                    </td>
                  </tr>
                  <tr>
                    <td style="height: 4px;"></td>
                  </tr>
                  <tr>
                    <td style="font-family: Verdana, Geneva, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px; text-align: left; color: #666666;">
                      ${inputs.jobPosition}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Spacer and Divider -->
          <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td colspan="2" style="height: 24px;"></td>
            </tr>
            <tr>
              <td colspan="2" style="border-bottom: 1px solid #EDE8E1;"></td>
            </tr>
            <tr>
              <td colspan="2" style="height: 16px;"></td>
            </tr>
          </table>

          <!-- Responsive Links Row -->
          <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="font-size:0;" align="left" valign="top" dir="ltr">
                <div style="display:inline-block; vertical-align:top; width:100%; max-width: 300px;">
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;">
                    <tr>
                      <td align="left" valign="top" style="padding-right: 10px; padding-bottom: 8px;">
                        <a aria-label="Email ${inputs.fullName}" href="mailto:${inputs.emailAddress}" style="text-decoration: none; color: #262523; font-family: Verdana, Geneva, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px;" title="Email ${inputs.fullName}">${inputs.emailAddress}</a>
                      </td>
                    </tr>
                  </table>
                </div>
                <div style="display:inline-block; vertical-align:top; width:100%; max-width: 300px;">
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;">
                    <tr>
                      <td align="left" valign="top" style="padding-right: 10px; padding-bottom: 8px;">
                        <a aria-label="Call ${inputs.fullName}" href="tel:${inputs.phoneNumber}" style="text-decoration: none; color: #262523; font-family: Verdana, Geneva, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px;" title="Call ${inputs.fullName}">${inputs.phoneNumber}</a>
                      </td>
                    </tr>
                  </table>
                </div>
                <div style="display:inline-block; vertical-align:top; width:100%; max-width: 300px;">
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;">
                    <tr>
                      <td align="left" valign="top" style="padding-bottom: 8px;">
                        <a aria-label="Book a meeting with ${inputs.fullName}" href="${inputs.calendlyUrl}" style="text-decoration: none; color: #262523; font-family: Verdana, Geneva, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px;" title="Book a meeting with ${inputs.fullName}">Book a meeting</a>
                      </td>
                    </tr>
                  </table>
                </div>
                <div style="display:inline-block; vertical-align:top; width:100%; max-width: 300px;">
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;">
                    <tr>
                      <td align="left" valign="top" style="padding-bottom: 8px;">
                        <a aria-label="Work inquiry" href="https://bndigital.co/contact" style="text-decoration: none; color: #262523; font-family: Verdana, Geneva, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px;" title="Work inquiry">Work inquiry</a>
                      </td>
                    </tr>
                  </table>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="height: 8px;"></td>
            </tr>
            <tr>
              <td colspan="2" style="border-bottom: 1px solid #EDE8E1;"></td>
            </tr>
            <tr>
              <td colspan="2" style="height: 16px;"></td>
            </tr>
          </table>

          <!-- Confidentiality Notice -->
          <p style="max-width: 600px; width: 100%; margin: 0; font-family: Verdana, Geneva, sans-serif; font-size: 12px; font-weight: 400; line-height: 20px; text-align: justify; color: #666666;">
            The content of this email is confidential and intended for the recipient specified in the message only. It is forbidden to share any part of this message with any third party, without a written consent of the sender.
          </p>
        </td>
      </tr>
    </table>
  `;

  const isFormValid = () => {
    return inputs.fullName && inputs.jobPosition && inputs.emailAddress && inputs.phoneNumber && inputs.calendlyUrl;
  };

  const handleCopy = () => {
    if (isFormValid()) {
      navigator.clipboard.writeText(signatureHtml)
        .then(() => {
          alert('The HTML is copied to the clipboard. Do not forget to check the guide on how to set up an HTML signature in your email client.');
        })
        .catch(err => {
          console.error('Could not copy text: ', err);
        });
    }
  };

  const handleDownload = () => {
    if (isFormValid()) {
      const blob = new Blob([signatureHtml], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'signature.html';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleViewGuide = () => {
    window.open('https://www.notion.so/bndigital/Installing-HTML-Signature-5296cb9d10974126935025017902bd51?pvs=4', '_blank');
  };

  return (
    <div className={styles.signatureContainer}>
      <div className={styles.signatureBox}>
        <div dangerouslySetInnerHTML={{ __html: signatureHtml }} />
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.buttonPrimary}
          type="button"
          onClick={handleCopy}
          disabled={!isFormValid()}
          title={!isFormValid() ? 'Please fill in all fields before copying the signature.' : ''}
        >
          Copy HTML Signature
        </button>
        <button className={styles.button} type="button" onClick={handleViewGuide}>
          How to Install
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={handleDownload}
          disabled={!isFormValid()}
          title={!isFormValid() ? 'Please fill in all fields before downloading the signature.' : ''}
        >
          Download HTML
        </button>
      </div>
      <div className={styles.version}>Signature version 1.0, July 25, 2024</div>
    </div>
  );
};

export default SignaturePreview;
