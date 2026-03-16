---
title: "Upcoming Changes to Let’s Encrypt Certificates"
date: "2025-12-15T11:11:51-08:00"
type: "newsletter"
---

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <!-- Facebook sharing information tags -->
    <meta property="og:title" content="{{Subject}}" />

    <title>{{Subject}}</title>
</head>

<body bgcolor="#FAFAFA" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; height: 100% !important; width: 100% !important; background-color: #f9f7ed; margin: 0; padding: 0;">
<style type="text/css">#outlook a {
              padding: 0;
          }
          .body{
              width: 100% !important;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
              margin: 0;
              padding: 0;
          }
          .ExternalClass {
              width:100%;
          }
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
              line-height: 100%;
          }
          img {
              outline: none;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
          }
          a img {
              border: none;
          }
          p {
              margin: 1em 0;
          }
          table td {
              border-collapse: collapse;
          }
          /* hide unsubscribe from forwards*/
          blockquote .original-only, .WordSection1 .original-only {
            display: none !important;
          }

          @media only screen and (max-width: 480px){
            body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} /* Prevent Webkit platforms from changing default text sizes */
            body{width:100% !important; min-width:100% !important;} /* Prevent iOS Mail from adding padding to the body */

            #bodyCell{padding:10px !important;}

            #templateContainer{
              max-width:600px !important;
              width:100% !important;
            }

            h1{
              font-size:24px !important;
              line-height:100% !important;
            }

            h2{
              font-size:20px !important;
              line-height:100% !important;
            }

            h3{
              font-size:18px !important;
              line-height:100% !important;
            }

            h4{
              font-size:16px !important;
              line-height:100% !important;
            }


            #templatePreheader{display:none !important;} /* Hide the template preheader to save space */

            #headerImage{
              height:auto !important;
              max-width:600px !important;
              width:100% !important;
            }

            .headerContent{
              font-size:20px !important;
              line-height:125% !important;
            }

            #bodyImage{
              height:auto !important;
              max-width:560px !important;
              width:100% !important;
            }

            .bodyContent{
              font-size:18px !important;
              line-height:125% !important;
            }

            .footerContent{
              font-size:14px !important;
              line-height:115% !important;
            }

            .footerContent a{display:block !important;} /* Place footer social and utility links on their own lines, for easier access */
          }
</style>
<table align="center" border="0" cellpadding="0" cellspacing="0" id="bodyTable" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-collapse: collapse !important; height: 100% !important; margin: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0; width: 100% !important" width="100%">
	<tbody>
		<tr>
			<td align="center" id="bodyCell" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; height: 100% !important; width: 100% !important; border-top-width: 0px; border-top-color: #f9f7ed; border-top-style: solid; margin: 0; padding: 20px;" valign="top"><!-- BEGIN TEMPLATE // -->
			<table border="0" cellpadding="0" cellspacing="0" id="templateContainer" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse !important; width: 600px; border: 1px solid #f9f7ed;">
				<tbody>
					<tr>
						<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"><!-- BEGIN PREHEADER // -->
						<table border="0" cellpadding="0" cellspacing="0" id="templatePreheader" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-bottom-color: #f9f7ed; border-bottom-style: solid; border-bottom-width: 1px; border-collapse: collapse !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
							<tbody>
								<tr style="">
									<td align="left" class="preheaderContent" pardot-data="" pardot-region="preheader_content00" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 12.5px; text-align: left; padding: 10px 20px; background: rgb(249, 247, 237);" valign="top">Let’s Encrypt Technical Update</td>
									<td align="left" class="preheaderContent" pardot-data="" pardot-region="preheader_content01" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 12.5px; text-align: left; padding: 10px 20px 10px 0px; background: rgb(249, 247, 237);" valign="top" width="180">&nbsp;</td>
								</tr>
							</tbody>
						</table>
						<!-- // END PREHEADER --></td>
					</tr>
					<tr>
						<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"><!-- BEGIN HEADER // -->
						<table border="0" cellpadding="0" cellspacing="0" id="templateHeader" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-bottom-color: #f9f7ed; border-bottom-style: solid; border-bottom-width: 1px; border-collapse: collapse !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
							<tbody>
								<tr pardot-repeatable="" style="">
									<td align="left" class="headerContent" pardot-region="header_image" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #505050; font-family: Helvetica; font-size: 20px; font-weight: bold; line-height: 20px; text-align: left; vertical-align: middle; padding: 0;" valign="top"><a href="https://outreach.abetterinternet.org/e/1011011/2025-12-15/3z2t7/%%email_id%%/h/%%internal.tracker_url_hash%%"><img alt="" border="0" height="138" id="headerImage" src="/images/newsletters/2025/2025-12-15-upcoming-changes-to-let-s-encrypt-certificates/image-01.png" style="max-width: 600px; outline: none; text-decoration: none; width: 600px; height: 138px; border-width: 0px; border-style: solid;" width="600"></a></td>
								</tr>
							</tbody>
						</table>
						<!-- // END HEADER --></td>
					</tr>
					<tr>
						<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"><!-- BEGIN BODY // -->
						<table border="0" cellpadding="0" cellspacing="0" id="templateBody" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-bottom-color: #f9f7ed; border-bottom-style: solid; border-bottom-width: 1px; border-collapse: collapse !important; border-top-color: #f9f7ed; border-top-style: solid; border-top-width: 1px; mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
							<tbody>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top"><h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#171347;">Upcoming Changes to Let’s Encrypt Certificates</span></h1>
<br>
<span style="color:#171347;">Let’s Encrypt is introducing several updates to the certificates we issue, including new root certificates, the deprecation of TLS client authentication, and shortening certificate lifetimes. To help roll out changes gradually, we’re making use of <a href="https://outreach.abetterinternet.org/e/1011011/2025-01-09-acme-profiles/3z2s7/%%email_id%%/h/%%internal.tracker_url_hash%%">ACME profiles</a> to allow users to have control over when some of these changes take place. For most users, no action is required.<br>
<br>
Let’s Encrypt has generated two new Root Certification Authorities (CAs) and six new Intermediate CAs, which we’re collectively calling the “Generation Y” hierarchy. These are cross-signed from our existing “Generation X” roots, X1 and X2, so will continue to work anywhere our current roots are trusted.<br>
<br>
Most users get certificates from our default <a href="https://outreach.abetterinternet.org/e/1011011/docs-profiles--classic/3z2sb/%%email_id%%/h/%%internal.tracker_url_hash%%">classic</a> profile, unless they’ve opted into another profile. This profile will switch to the new Generation Y hierarchy on May 13 2026. These new intermediates do not contain the “TLS Client Authentication” Extended Key Usage due to an upcoming root program requirement. We have previously announced our plans to <a href="https://outreach.abetterinternet.org/e/1011011/ding-tls-client-authentication/3z2sf/%%email_id%%/h/%%internal.tracker_url_hash%%">end TLS Client Authentication</a> starting in February 2026, which will coincide with the switch to the Generation Y hierarchy. Users who encounter issues or need an extended period to switch can use our <a href="https://outreach.abetterinternet.org/e/1011011/docs-profiles--tlsclient/3z2sj/%%email_id%%/h/%%internal.tracker_url_hash%%">tlsclient</a> profile until May 2026, which will also remain on our existing Generation X roots.<br>
<br>
If you’re requesting certificates from our <a href="https://outreach.abetterinternet.org/e/1011011/docs-profiles--tlsserver/3z2sm/%%email_id%%/h/%%internal.tracker_url_hash%%">tlsserver</a> or <a href="https://outreach.abetterinternet.org/e/1011011/docs-profiles--shortlived/3z2sq/%%email_id%%/h/%%internal.tracker_url_hash%%">shortlived</a> profiles, you’ll begin to see certificates which come from the Generation Y hierarchy this week. This switch will also mark the opt-in general availability of short-lived certificates from Let’s Encrypt, including support for IP Addresses on certificates.<br>
<br>
We also announced our timeline to comply with upcoming changes to the <a href="https://outreach.abetterinternet.org/e/1011011/ine-requirements-requirements-/3z2st/%%email_id%%/h/%%internal.tracker_url_hash%%">CA/Browser Forum Baseline Requirements</a>, which will require us to shorten the length of time our certificates are valid for. Next year, you’ll be able to opt-in to 45 day certificates for early adopters and testing via the tlsserver profile. In 2027, we’ll lower the default certificate lifetime to 64 days, and then to 45 in 2028. For the full timeline and details, please see our post on <a href="https://outreach.abetterinternet.org/e/1011011/2025-12-02-from-90-to-45/3z2sx/%%email_id%%/h/%%internal.tracker_url_hash%%">decreasing certificate lifetimes to 45 days</a>.<br>
<br>
For most users, no action is required, but we recommend reviewing the linked blog posts announcing each of these changes for more details. If you have any questions, please do not hesitate to ask on <a href="https://outreach.abetterinternet.org/e/1011011/2025-12-15/3z2tb/%%email_id%%/h/%%internal.tracker_url_hash%%">o</a><a href="https://outreach.abetterinternet.org/e/1011011/2025-12-15/3z2tf/%%email_id%%/h/%%internal.tracker_url_hash%%">ur community forum</a>.</span></td>
								</tr>
							</tbody>
						</table>
						<!-- // END BODY --></td>
					</tr>
					<tr>
						<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"><!-- BEGIN FOOTER // -->
						<table border="0" cellpadding="0" cellspacing="0" id="templateFooter" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-collapse: collapse !important; border-top-color: #f9f7ed; border-top-style: solid; border-top-width: 1px; mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
							<tbody>
								<tr pardot-removable="" style="">
									<td align="left" class="footerContent" pardot-data="" pardot-region="footer_content00" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 15px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 152px;">
										<tbody>
											<tr>
												<td align="center" ng-show="slink.link != ''" style="padding: 0px 5px; width: 5px;" width="24"><a data-link-id="76937043604670399" href="https://outreach.abetterinternet.org/e/1011011/ternet-security-research-group/3z2t4/%%email_id%%/h/%%internal.tracker_url_hash%%" target="_self"><img alt="instagram" border="0" src="/images/newsletters/2025/2025-12-15-upcoming-changes-to-let-s-encrypt-certificates/image-02.png" style="display: block;" width="24"></a></td>
												<td align="center" ng-show="slink.link != ''" style="padding: 0px 5px; width: 100px;" width="24"><a href="https://outreach.abetterinternet.org/e/1011011/2025-12-15/3z2tf/%%email_id%%/h/%%internal.tracker_url_hash%%"><img alt="" border="0" height="25" src="/images/newsletters/2025/2025-12-15-upcoming-changes-to-let-s-encrypt-certificates/image-03.png" style="width: 118px; height: 25px; margin-top: 3px; margin-bottom: 3px; border-width: 0px; border-style: solid;" width="118"></a></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
								<tr style="">
									<td align="left" class="footerContent" pardot-data="" pardot-region="footer_content01" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: Helvetica; font-size: 10px; line-height: 15px; text-align: left; padding: 0px 20px 20px; background: rgb(249, 247, 237);" valign="top"><br>
Internet Security Research Group<br>
548 Market Street<br>
PO 77519<br>
San Francisco, CA 94104</td>
								</tr>
								<tr style="">
									<td align="left" class="footerContent original-only" pardot-data="" pardot-region="footer_content02" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: Helvetica; font-size: 10px; line-height: 15px; text-align: left; padding: 0px 20px 20px; background: rgb(249, 247, 237);" valign="top"><a href="{{Unsubscribe}}" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #606060; font-weight: normal; text-decoration: underline;">unsubscribe from all emails</a>&nbsp;&nbsp;&nbsp;<a href="{{EmailPreferenceCenter}}" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #606060; font-weight: normal; text-decoration: underline;">update subscription preferences</a>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						<!-- // END FOOTER --></td>
					</tr>
				</tbody>
			</table>
			<!-- // END TEMPLATE --></td>
		</tr>
	</tbody>
</table>
<br>
<!--
          This email was originally designed by the wonderful folks at MailChimp and remixed by Pardot.
          It is licensed under CC BY-SA 3.0
        -->
</body>
</html>
