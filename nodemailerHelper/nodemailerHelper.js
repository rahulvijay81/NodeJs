const nodemailer = require("nodemailer");

async function sendMail(email, user) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "rahul.v@stratagile.com",
      pass: process.env.APP_PASSWORD,
    },
  });

  const message = {
    from: 'Rahul Vijay',
    to: email,
    subject: "You have logged in successfully.",
    text: "You have logged in successfully.",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
        <html
        xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        >
        <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
        />
        <title>StratAgile</title>
        <style type="text/css">
        .ReadMsgBody {
            width: 100%;
        }
        .ExternalClass {
            width: 100%;
        }
        .ExternalClass * {
            line-height: 100%;
        }
        div,
        p,
        a,
        li,
        td {
            -webkit-text-size-adjust: none;
            -ms-text-size-adjust: none;
        }
        TD IMG {
            display: block;
            border: 0;
        }
        table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        table td {
            border-collapse: collapse;
        }
        a:link {
            color: #000001;
            text-decoration: none;
        }
        a:active {
            color: #000001;
            text-decoration: none;
        }
        a:visited {
            color: #000001;
            text-decoration: none;
        }
        a:hover {
            color: #000001;
            text-decoration: none;
        }
        textarea {
            resize: none;
        }
        textarea:focus,
        input:focus {
            outline: none;
        }
        body {
            background-color: #edede9;
            margin: 0;
        }
        .appleLinks a {
            color: inherit !important;
            text-decoration: none;
        }
        @media only screen and (max-width: 480px) {
            /* Standard Classes */
            body[yahoo] .container {
                width: 100% !important;
            }
            body[yahoo] .drop {
                width: 100% !important;
                float: left !important;
            }
            body[yahoo] .photo {
                width: 100% !important;
                height: auto !important;
            }
            body[yahoo] .show {
                display: block !important;
                margin: 0 !important;
                padding: 0 !important;
                overflow: visible !important;
                width: 100% !important;
                max-height: inherit !important;
            }
            body[yahoo] .contentpadding {
                padding-right: 20px !important;
                padding-left: 40px !important;
            }
            body[yahoo] .mobile-hidden {
                display: none !important;
            }
            body[yahoo] .mobile-padding {
                padding-right: 20px !important;
                padding-left: 20px !important;
            }
            body[yahoo] .paddingtop20 {
                padding-top: 20px !important;
            }
            body[yahoo] .text-left {
                text-align: left !important;
            }
            body[yahoo] .paddingtop0 {
                padding-top: 0px !important;
            }
            body[yahoo] .font20 {
                font-size: 20px !important;
            line-height: 24px !important;
        }
        body[yahoo] .font14 {
            font-size: 14px !important;
            line-height: 18px !important;
        }
        body[yahoo] .align-left {
            text-align: left !important;
        }
        body[yahoo] .borderright1 {
            border-right: 1px solid #f0f0f0 !important;
        }
        body[yahoo] .widthauto {
            width: auto !important;
        }
        
    }
    </style>
    
    </head>
    <body
    bgcolor="#edede9"
    style="
    margin: 0px;
    padding: 0px;
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
    "
    yahoo="fix"
    >
    <table
    border="0"
    cellpadding="0"
    cellspacing="0"
    width="100%"
    style="table-layout: fixed"
    >
    <tr>
    <td align="center" valign="top" bgcolor="#edede9">
    <div align="center">
    <table
    width="600"
    border="0"
    cellspacing="0"
    cellpadding="0"
    class="container"
    >
    <tr>
    <td align="center" valign="top" bgcolor="#ffffff">
    <table
    width="100%"
    border="0"
    cellspacing="0"
    cellpadding="0"
    >
    <tr>
    <td
    align="left"
    valign="top"
    bgcolor="#ffffff"
    style="padding: 20px"
    >
    <table
    width="100%"
    border="0"
    cellspacing="0"
    cellpadding="0"
    >
    <tr>
    <td align="left" valign="top" bgcolor="#ffffff">
    <a
    href="#"
    title="StratAgile"
    target="_blank"
    style="text-decoration: none"
                                >
                                  <img
                                  src="https://www.stratagile.com/wp-content/uploads/Stratagile-logo-red.png"
                                  width="130"
                                  height="auto"
                                  alt="StratAgile"
                                  title="StratAgile"
                                  border="0"
                                  style="font-family: font-family: Arial, 'sans-serif'; font-size: 20px; color: #000000; display: inline-block;"
                                  />
                                  </a>
                                  </td>
                                  </tr>
                                  <tr>
                                  <td
                                  align="left"
                                  valign="top"
                                  bgcolor="#ffffff"
                                  style="
                                  font-family: Arial, 'sans-serif';
                                  font-size: 14px;
                                  line-height: 18px;
                                  color: #333333;
                                  mso-line-height-rule: exactly;
                                  text-align: left;
                                  padding-top: 30px;
                                  padding-bottom: 20px;
                                  "
                                  >
                                  Hi ${user.username},
                                  </td>
                                  </tr>
                                  <tr>
                                  <td
                                  align="left"
                                  valign="top"
                                  bgcolor="#ffffff"
                                  style="
                                  font-family: Arial, 'sans-serif';
                                  font-size: 14px;
                                  line-height: 18px;
                                  color: #333333;
                                  mso-line-height-rule: exactly;
                                  text-align: left;
                                  padding-top: 20px;
                                  padding-bottom: 10px;
                                  "
                                  >
                                  You have logged in successfully
                                  </td>
                                  </tr>
                                  <tr>
                                  <td
                                  align="left"
                                  valign="top"
                                  bgcolor="#ffffff"
                                  style="
                                  font-family: Arial, 'sans-serif';
                                  font-size: 14px;
                                  line-height: 18px;
                                  color: #333333;
                                  mso-line-height-rule: exactly;
                                  text-align: left;
                                  padding-top: 20px;
                                  padding-bottom: 10px;
                                  "
                                  >
                                  Regards,
                                  </td>
                                  </tr>
                                  <tr>
                                  <td
                                  align="left"
                                  valign="top"
                                  bgcolor="#ffffff"
                                  style="
                                  font-family: Arial, 'sans-serif';
                                  font-size: 14px;
                                  line-height: 18px;
                                  color: #333333;
                                  mso-line-height-rule: exactly;
                                  text-align: left;
                                  "
                                  >
                                  Note: This is an auto-generated mail, Please do
                                not reply.
                                </td>
                                </tr>
                                </table>
                                </td>
                                </tr>
                                </table>
                                <!--footer-->
                                <table
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                >
                                <tr>
                                <td
                                width="600"
                                align="left"
                                valign="top"
                                bgcolor="#545559"
                                style="
                                font-family: Arial, 'sans-serif';
                                font-size: 12px;
                                line-height: 16px;
                                color: #ffffff;
                                mso-line-height-rule: exactly;
                                text-align: center;
                                padding-top: 20px;
                                padding-right: 20px;
                                padding-bottom: 20px;
                                padding-left: 20px;
                                "
                                class="container"
                                >
                                StratAgile &copy; 2024 All rights reserved.
                                </td>
                                </tr>
                                </table>
                                </td>
                                </tr>
                                </table>
                                </div>
                                </td>
                                </tr>
                                </table>
                                
                                <div
                                style="
                                display: none;
                                white-space: nowrap;
                                font: 15px courier;
                                color: #ffffff;
                                "
                                >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
    </body>
    </html>
    `,
  };

  //sending email
  const info = await transporter.sendMail(message);

  return info;
}

module.exports = { sendMail };
